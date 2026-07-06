import { navbar } from "vuepress-theme-hope";

export default navbar([
  {
    text: "首页",
    icon: "home",
    link: "/",
  },
  {
    text: "文章",
    icon: "book",
    link: "/posts/",
  },
  {
    text: "关于",
    icon: "circle-info",
    link: "/intro.html",
  },
]);
