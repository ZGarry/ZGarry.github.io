# 入川为王

个人博客源码，基于 VuePress 2 和 vuepress-theme-hope。

访问地址：[GitHub Pages](https://zgarry.github.io/) / [Vercel](https://z-garry-github-io.vercel.app/)

## 本地开发

```bash
npx pnpm@8 install --frozen-lockfile
npx pnpm@8 run dev
```

## 构建验证

```bash
npx pnpm@8 run docs:build
node scripts/audit-home.mjs
```

推送到 `master` 后由 GitHub Actions 发布到 GitHub Pages，不再依赖 `gh-pages` 分支。

Vercel 使用同一仓库，构建和缓存规则保存在 `vercel.json`，静态输出目录为 `src/.vuepress/dist`。两处发布都要核验部署结果和线上页面，推送成功本身不代表发布完成。

## 内容范围与首页

《打工人手册》固定为作者确认的 110 篇：1 至 108，加上 5.5 和 53.5。[确认清单](docs/handbook-approved-110.json)包含编号、日期和文件；不可因重复扫描自动增删。《AI无相神功》单独维护。未分类的新归档内容继续等待作者分类。

首页使用独立的 VuePress 布局，提供响应式图片、深浅色模式、主题筛选、减少动态效果设置和键盘焦点。正文链接及历史跳转保留。图标为 Font Awesome 官方 SVG，来自本地版本化目录；升级时运行 `node scripts/sync-icons.mjs`。

[首页设计与资源说明](docs/home-design.md)记录改版依据和主图生成提示词。

## 文章日期

格式修整时保留文章 frontmatter 中的 `date`。[原有日期及核验依据](docs/article-date-records.md)单独记录；最后更新时间与原有发布日期分别维护。
