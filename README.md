# 入川为王

个人博客源码，基于 VuePress 2 和 vuepress-theme-hope。

访问地址：https://zgarry.github.io/

## 本地开发

```bash
pnpm install
pnpm run dev
```

## 构建验证

```bash
pnpm run build
```

推送到 `master` 后由 GitHub Actions 发布到 GitHub Pages，不再依赖 `gh-pages` 分支。

## 文章日期

格式修整时保留文章 frontmatter 中的 `date`。[原有日期及核验依据](docs/article-date-records.md)单独记录；最后更新时间与原有发布日期分别维护。
