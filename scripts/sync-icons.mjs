// Use actual library glyphs, without downloading a font or an icon CDN stylesheet.
import { copyFileSync } from 'node:fs';
const target = 'src/.vuepress/public/assets/vendor/fontawesome-6.7.2';
for (const [source, name] of [['house','home'],['book','book'],['circle-info','circle-info']]) {
  copyFileSync(`node_modules/@fortawesome/fontawesome-free/svgs/solid/${source}.svg`, `${target}/${name}.svg`);
}
copyFileSync('node_modules/@fortawesome/fontawesome-free/LICENSE.txt', `${target}/LICENSE.txt`);
