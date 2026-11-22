// Inserts a product box before a named H2 in guides that opt in through frontmatter:
//   products: ["P001", "P002"]        ids or group ids from src/data/products.json
//   productsBefore: "Heading text"    the H2 the box goes in front of (build fails if it is missing)
//   productsVariant: tools | pro | season | city   (optional, default tools)
//   productsTitle: "Custom heading"   (optional)
import { loadCatalog, renderBox, VARIANT_TITLES } from '../lib/products.mjs';

function textOf(node) {
  if (!node) return '';
  if (node.type === 'text') return node.value;
  return (node.children || []).map(textOf).join('');
}

export default function rehypeProductBox() {
  return (tree, file) => {
    const fm = (file.data && file.data.astro && file.data.astro.frontmatter) || {};
    const ids = fm.products;
    if (!Array.isArray(ids) || ids.length === 0) return;

    const where = file.path || '(unknown file)';
    if (!fm.productsBefore) {
      throw new Error(`[product-box] ${where}: "products" is set but "productsBefore" is missing`);
    }
    const cat = loadCatalog();
    for (const id of ids) {
      if (!cat.items.has(id)) throw new Error(`[product-box] ${where}: unknown product or group "${id}"`);
    }

    const variant = fm.productsVariant || 'tools';
    if (!VARIANT_TITLES[variant]) throw new Error(`[product-box] ${where}: unknown productsVariant "${variant}"`);
    let title = fm.productsTitle || VARIANT_TITLES[variant];
    if (variant === 'city' && !fm.productsTitle) title = `Prepare your home for ${fm.city || 'your area'}`;

    const want = String(fm.productsBefore).replace(/\s+/g, ' ').trim();
    const idx = tree.children.findIndex(
      (n) => n.type === 'element' && n.tagName === 'h2' && textOf(n).replace(/\s+/g, ' ').trim() === want
    );
    if (idx < 0) {
      throw new Error(`[product-box] ${where}: no H2 named "${want}" to place the box before`);
    }
    tree.children.splice(idx, 0, { type: 'raw', value: renderBox({ ids, variant, title }, cat) });
  };
}
