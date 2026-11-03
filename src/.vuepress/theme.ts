import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "https://zgarry.github.io",

  author: {
    name: "入川为王",
    url: "https://zgarry.github.io",
  },

  // Keep icons local: the first render must not wait for an overseas icon CDN.
  iconAssets: "/assets/vendor/fontawesome-6.7.2/icons.css",
  iconPrefix: "blog-icon blog-icon-",

  logo: "/logo.svg",

  repo: "ZGarry/ZGarry.github.io",

  docsDir: "src",
  docsBranch: "master",

  // navbar
  navbar,

  // sidebar
  sidebar,

  footer: "入川为王 · 我们的生活，存在着巨大的优化空间。",

  displayFooter: true,

  blog: {
    description: "长期思考、职场观察、AI 实践和生活复盘。",
    intro: "/intro.html",
    medias: {
      GitHub: "https://github.com/ZGarry",
    },
  },

  metaLocales: {
    editLink: "在 GitHub 上编辑此页",
  },

  plugins: {
    blog: { excerptLength: 100 },

    mdEnhance: {
      align: true,
      attrs: true,
      codetabs: true,
      figure: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
    },
  },
}, { custom: true });
