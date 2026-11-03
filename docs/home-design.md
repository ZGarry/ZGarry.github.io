# 首页改版说明

## 改版依据

原首页使用 VuePress BlogHome：文字横幅、十篇长摘要和侧栏。原主题强调色为蓝色，默认系统字体、12px 列表圆角；品牌名、标语、logo、导航、文章路径和原始日期继续保留。

新版是个人博客的编辑式首页，使用非对称图文首屏、两个系列入口、按主题筛选的四篇精选和作者介绍。设计参数为变化度 7、动态强度 5、密度 3，沿用 Vue 3，原生 CSS 实现，不引入动画或 3D 依赖。浅色和深色各使用一组统一变量，橙色为强调色。系统设置默认生效，原有主题按钮可以切换。

入场动画用于建立图文层次，轻微滚动进入用于提示阅读进展，悬停用于链接反馈；都尊重 `prefers-reduced-motion`。正文和导航由现有主题维护。

## 性能与兼容

- 首页静态生成，主要内容在 HTML 中，无 JavaScript 时仍可通过链接阅读。
- 使用本地系统字体；仅供应实际使用的三个 Font Awesome 官方 SVG，免去图标 CDN 和整套字体。
- 首页图像使用 640 / 960 / 1536 宽 WebP、响应式预加载、固定宽高与高优先级。仅生成图像的网页压缩与尺寸版本，未更改构图。
- 列表摘要上限由 300 调整到 100，文章全文不变。删除当前文章未使用的 Chart、ECharts、flowchart、Mermaid 渲染开关；原有数学排版保留。
- 文章按路由加载，保留禁用全站预取的配置，以及旧资源失效时恢复到目标文章的处理。
- Vercel 对 assets 设置一天浏览器缓存，其他页面沿用平台默认重验证，避免 HTML 长期指向已替换的脚本。
- `scripts/audit-home.mjs`比较相同构建目录的静态入口依赖，不能代替真实网络耗时或 Lighthouse 分数。

## 主图来源

通过内置 image_gen 生成原创主图，最终站点文件位于：

- `src/.vuepress/public/assets/home/river-640.webp`
- `src/.vuepress/public/assets/home/river-960.webp`
- `src/.vuepress/public/assets/home/river-1536.webp`

最终生成提示词：

> Use case: stylized-concept. Asset type: personal Chinese technology blog hero artwork, landscape 3:2. Create an exquisite cinematic landscape of a winding silver river cutting through dark sculptural mountain ranges, viewed from high above. A narrow warm burnt-orange light traces the river bend toward a distant horizon, subtly suggesting an evolving path of thought and computation. Slate graphite rock, cool fog, tactile fine-grained mineral surfaces, muted pale sky. Quiet ambitious mood, sophisticated contemporary digital art with photographic material realism. Strong S-shaped composition, dramatic depth, crisp silhouette and spacious sky in upper third. Palette: charcoal, silver grey, one restrained burnt-orange accent. No neon, no purple, no buildings, no people, no logos, no text, no UI, no watermark. Output only the artwork, edge to edge.
