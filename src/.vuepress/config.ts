import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "en-US",
  title: "入川为王",
  description: "A blog demo for vuepress-theme-hope",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
