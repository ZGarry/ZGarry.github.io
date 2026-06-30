# AI Demo 展示站

一个专门收纳 HTML Demo 的静态网站。它可以展示内置 demo，也支持访客在浏览器里上传自己的 demo 做本地预览、打包导出。

## 已内置 Demo

- **Claude 介绍自己**：单文件 HTML 叙事演示。
- **巴别图书馆**：单文件 HTML 沉浸式空间演示。
- **麻将换三张**：文件夹型 demo，入口为 `index.html`，资源文件通过相对路径加载。

每个内置 demo 都有预览入口和 zip 下载包，放在 `public/demos` 与 `public/downloads` 下。

## 功能

- 内置 demo 目录、搜索、标签筛选与实时 iframe 预览。
- 上传一个完整 `.html` / `.htm` / `.xhtml` 文件。
- 上传一个文件夹，要求文件夹内有且只有一个可直接运行的 HTML 入口。
- 上传文件会写入浏览器 Cache，并通过 Service Worker 映射成 `/preview/...` 路径，普通相对路径资源可以照常加载。
- 上传 demo 只保存在当前浏览器里，可以预览、移除或导出 zip。
- GitHub Pages workflow 已配置，推送到 `master` 或 `main` 后自动构建部署。

## 推荐语言与技术栈

推荐用 **TypeScript + React + Vite** 做展示站本体，用 **原生 HTML/CSS/JavaScript** 保存 demo 本身。

原因很简单：展示站需要长期维护上传、校验、预览、状态管理和构建部署，TypeScript 更稳；demo 则应该尽量保持“一个文件或一个文件夹即可运行”，便于传播、下载和归档。除非 demo 本身复杂到需要构建，否则优先输出静态 HTML。

如果以后要做真正的多人上传与公开分发，建议再加一个后端或对象存储：

- 前端：TypeScript / React / Vite
- 服务端：Node.js / Hono 或 Next.js API Routes
- 存储：S3/R2/OSS 一类对象存储
- 元数据：SQLite/PostgreSQL

当前版本刻意保持静态站形态，适合 GitHub Pages 托管。

## 本地开发

```bash
npm install
npm run dev
```

打开终端显示的本地地址即可。上传文件夹预览依赖 Service Worker，所以请使用 `http://127.0.0.1` 或 GitHub Pages 这类正常网页环境，不要直接用 `file://` 打开。

## 构建

```bash
npm run build
```

构建产物在 `dist/`。

## 上传格式规则

### 单 HTML

适合完整自包含 demo：

```text
my-demo.html
```

### 文件夹 Demo

文件夹里必须有且只有一个 HTML 入口：

```text
my-demo/
  index.html
  app.js
  styles.css
  assets/
    cover.png
```

HTML、CSS、JS、图片等资源建议使用相对路径，例如 `./styles.css`、`./assets/cover.png`。根路径写法如 `/assets/cover.png` 不适合静态上传预览，因为它会跳出当前 demo 的虚拟目录。

## 添加新的内置 Demo

1. 把 demo 放到 `public/demos/<demo-slug>/`。
2. 确保入口文件是 `index.html`，或在代码里明确指定入口。
3. 生成 zip 下载包到 `public/downloads/<demo-slug>.zip`。
4. 在 `src/demoManifest.ts` 里追加一条 demo 记录。
5. 运行 `npm run build` 确认构建通过。

## 发布到 GitHub Pages

仓库里已经包含 `.github/workflows/pages.yml`。推送到 GitHub 后，在仓库设置里确认 Pages 使用 GitHub Actions 部署；之后每次推送 `master` 或 `main` 都会自动发布 `dist/`。
