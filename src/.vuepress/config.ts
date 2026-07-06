import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "入川为王",
  description: "入川为王的个人博客，记录长期思考、职场观察和生活复盘。",

  theme,

  shouldPrefetch: false,
});
