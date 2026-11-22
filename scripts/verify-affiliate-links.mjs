// Run before every deploy:  node scripts/verify-affiliate-links.mjs
// For every product it opens the affiliate link like a visitor and checks that it
//  - answers with HTTP 200,
//  - ends on www.amazon.com,
//  - still carries the Associates tag, and
//  - lands on the expected product (ASIN in src/data/products.json).
// Exit code 1 if anything fails.
import fs from 'node:fs';

const data = JSON.parse(fs.readFileSync(new URL('../src/data/products.json', import.meta.url), 'utf-8'));
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

let failed = 0;
for (const p of data.products) {
  let line;
  try {
    const res = await fetch(p.url, { redirect: 'follow', headers: { 'User-Agent': UA, 'Accept-Language': 'en-US,en;q=0.9' } });
    await res.arrayBuffer();
    const u = new URL(res.url);
    const asin = (u.pathname.match(/\/(?:dp|aw\/d|gp\/aw\/d)\/([A-Z0-9]{10})/) || [])[1];
    const checks = {
      status200: res.status === 200,
      amazonHost: u.hostname === 'www.amazon.com',
      tag: u.searchParams.get('tag') === data.tag,
      asin: asin === p.asin,
    };
    const ok = Object.values(checks).every(Boolean);
    if (!ok) failed++;
    line = `${ok ? 'OK  ' : 'FAIL'} ${p.id} ${asin || 'no-asin'} ${ok ? '' : JSON.stringify(checks)}`;
  } catch (e) {
    failed++;
    line = `FAIL ${p.id} ${String(e).slice(0, 80)}`;
  }
  console.log(line);
  await sleep(700);
}
console.log(failed ? `\n${failed} link(s) failed. Do not deploy.` : `\nAll ${data.products.length} affiliate links verified.`);
process.exit(failed ? 1 : 0);
