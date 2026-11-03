import { readFileSync, existsSync, writeFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { gzipSync } from 'node:zlib';

const root = resolve('src/.vuepress/dist');
const html = readFileSync(resolve(root, 'index.html'), 'utf8');
const files = new Map();
const visit = (url, from = root) => {
  if (/^(https?:|data:)/.test(url)) return;
  const file = url.startsWith('/') ? resolve(root, '.' + url) : resolve(from, url);
  if (files.has(file) || !existsSync(file)) return;
  const body = readFileSync(file);
  files.set(file, { path: file.slice(root.length + 1).replaceAll('\\', '/'), bytes: body.length, gzip: gzipSync(body).length });
  if (file.endsWith('.js')) {
    // Static imports only: dynamic article and diagram chunks are not first-load cost.
    for (const m of body.toString().matchAll(/(?:\bfrom\s*|\bimport\s*)["']([^"']+)["']/g)) visit(m[1], dirname(file));
  }
};
for (const m of html.matchAll(/<(?:script|link)\b[^>]*(?:src|href)="([^"]+)"[^>]*>/g)) {
  if (/\.(js|css)(?:\?|$)/.test(m[1])) visit(m[1]);
}
const assets = [...files.values()];
const result = {
  collectedAt: new Date().toISOString(), method: 'Static entry graph, raw bytes and independently gzip-compressed files; not a browser timing measurement',
  html: { bytes: Buffer.byteLength(html), gzip: gzipSync(html).length },
  initialJS: assets.filter(a => a.path.endsWith('.js')).reduce((s,a)=>s+a.bytes,0),
  initialJSGzip: assets.filter(a => a.path.endsWith('.js')).reduce((s,a)=>s+a.gzip,0),
  initialCSS: assets.filter(a => a.path.endsWith('.css')).reduce((s,a)=>s+a.bytes,0),
  externalStylesheets: [...html.matchAll(/<link[^>]*href="(https?:[^\"]+)"[^>]*>/g)].map(m=>m[1]),
  assets: assets.sort((a,b)=>b.bytes-a.bytes),
};
if (process.argv[2]) writeFileSync(process.argv[2], JSON.stringify(result,null,2));
console.log(JSON.stringify({...result, assets: result.assets.slice(0,6)},null,2));
