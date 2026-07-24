// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import fs from 'fs';
import path from 'path';

function buildPubDateMap() {
  const blogDir = path.join(process.cwd(), 'src/content/blog');
  const map = {};
  try {
    for (const file of fs.readdirSync(blogDir)) {
      if (!file.endsWith('.md') && !file.endsWith('.mdx')) continue;
      const content = fs.readFileSync(path.join(blogDir, file), 'utf-8');
      const match = content.match(/^pubDate:\s*["']?([^"'\n]+)["']?/m);
      if (match) {
        const slug = file.replace(/\.mdx?$/, '');
        map[`https://homeservice-usa.com/blog/${slug}/`] = match[1].trim();
      }
    }
  } catch {}
  return map;
}

const pubDateMap = buildPubDateMap();

export default defineConfig({
  site: 'https://homeservice-usa.com',
  integrations: [
    sitemap({
      serialize(item) {
        const pubDate = pubDateMap[item.url];
        if (pubDate) {
          item.lastmod = new Date(pubDate).toISOString();
        } else {
          delete item.lastmod;
        }
        return item;
      },
    }),
    mdx(),
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-light',
    },
  },
});
