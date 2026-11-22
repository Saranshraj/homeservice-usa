// Product catalog, link safety gate, and HTML renderers for affiliate product boxes.
// Rule: the ONLY URL ever rendered for a product is its affiliate URL, and it must pass isAffiliateUrl().
import fs from 'node:fs';
import path from 'node:path';

const SHORT_LINK = /^https:\/\/link\.amazon\/[A-Za-z0-9]{6,24}$/;

function longLinkPattern(tag) {
  return new RegExp(
    '^https://www\\.amazon\\.com/dp/[A-Z0-9]{10}(?:/[^?#\\s]*)?\\?(?:[^#\\s]*&)?tag=' +
      tag.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') +
      '(?:&[^#\\s]*)?$'
  );
}

export const VARIANT_TITLES = {
  tools: 'Tools and parts you may need',
  pro: 'Before the pro arrives',
  season: 'Supplies for this season',
  city: 'Prepare your home',
};

export const DISCLOSURE =
  'Some links below are Amazon affiliate links. If you buy through them we may earn a small commission at no extra cost to you. As an Amazon Associate I earn from qualifying purchases.';

const esc = (s) =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

let cached;

export function loadCatalog() {
  if (cached) return cached;
  const file = path.join(process.cwd(), 'src/data/products.json');
  const raw = JSON.parse(fs.readFileSync(file, 'utf-8'));
  const long = longLinkPattern(raw.tag);
  const isAffiliateUrl = (u) => typeof u === 'string' && (SHORT_LINK.test(u) || long.test(u));

  const useCases = new Map(raw.useCases.map((u) => [u.id, u]));
  const products = new Map();
  const errors = [];

  for (const p of raw.products) {
    if (!isAffiliateUrl(p.url)) errors.push(`${p.id}: URL is not an allowed affiliate link (${p.url})`);
    if (!p.name) errors.push(`${p.id}: missing name`);
    if (!p.inGroup && !p.why) errors.push(`${p.id}: missing "why" line`);
    for (const u of p.useCases || []) if (!useCases.has(u)) errors.push(`${p.id}: unknown use case ${u}`);
    if (products.has(p.id)) errors.push(`${p.id}: duplicate id`);
    products.set(p.id, p);
  }
  const groups = new Map();
  for (const g of raw.groups || []) {
    for (const o of g.options) if (!products.has(o.productId)) errors.push(`${g.id}: option ${o.productId} not found`);
    for (const u of g.useCases || []) if (!useCases.has(u)) errors.push(`${g.id}: unknown use case ${u}`);
    groups.set(g.id, g);
  }
  if (errors.length) {
    throw new Error('[products] Catalog check failed:\n - ' + errors.join('\n - '));
  }

  // Everything that can appear as a card (groups replace their members).
  const items = new Map();
  for (const p of products.values()) if (!p.inGroup) items.set(p.id, p);
  for (const g of groups.values()) items.set(g.id, g);

  cached = { tag: raw.tag, useCases, products, groups, items };
  return cached;
}

function button(p, placement, label = 'View on Amazon', extra = '') {
  return (
    `<a class="product-btn${extra}" href="${esc(p.url)}" target="_blank" rel="sponsored nofollow noopener"` +
    ` data-affiliate data-product-id="${esc(p.id)}" data-product-name="${esc(p.name)}" data-placement="${esc(placement)}">` +
    `${esc(label)}<span class="sr-only"> (opens Amazon in a new tab)</span></a>`
  );
}

export function renderCard(item, cat, placement, attrs = '') {
  const firstUse = cat.useCases.get(item.useCases[0]);
  const actions =
    item.type === 'group'
      ? item.options
          .map((o) => button(cat.products.get(o.productId), placement, o.label, ' product-btn--size'))
          .join('')
      : button(item, placement);
  return (
    `<li class="product-card"${attrs}>` +
    `<span class="product-card__icon" aria-hidden="true">${firstUse ? firstUse.icon : ''}</span>` +
    `<div class="product-card__body"><p class="product-card__name">${esc(item.name)}</p>` +
    `<p class="product-card__why">${esc(item.why)}</p></div>` +
    `<div class="product-card__actions">${actions}</div></li>`
  );
}

export function renderBox({ ids, variant, title }, cat) {
  const cards = ids.map((id) => renderCard(cat.items.get(id), cat, variant)).join('');
  return (
    `<aside class="product-box product-box--${esc(variant)}" aria-label="${esc(title)}">` +
    `<p class="product-box__title">${esc(title)}</p>` +
    `<p class="product-box__disclosure">${esc(DISCLOSURE)} <a href="/affiliate-disclosure/">How we choose products</a></p>` +
    `<ul class="product-box__list">${cards}</ul>` +
    `<p class="product-box__note">Affiliate links. We may earn a commission. <a href="/recommended-products/">See all recommended products</a></p>` +
    `</aside>`
  );
}
