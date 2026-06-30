import type { Demo } from "./types";

const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`;

export const BUILTIN_DEMOS: Demo[] = [
  {
    id: "claude-intro",
    title: "Claude 介绍自己",
    summary: "一支带有叙事、动效和视觉隐喻的 AI 自画像 Demo。",
    description:
      "适合放在社媒或作品集里做第一眼展示：信息密度不重，视觉节奏更像一次可滚动的短篇演出。",
    tags: ["AI 叙事", "视觉实验", "单 HTML"],
    origin: "builtin",
    kind: "single-html",
    entryUrl: asset("demos/claude-intro/index.html"),
    downloadUrl: asset("downloads/claude-intro.zip"),
    sourceLabel: "内置 Demo",
    fileCount: 1,
    totalBytes: 23146,
    accent: "coral",
  },
  {
    id: "babel-library",
    title: "巴别图书馆",
    summary: "以 3D 空间和文本生成感营造的可探索图书馆。",
    description:
      "偏沉浸式、可游玩的浏览体验，适合作为 AI 互动作品或虚拟空间 demo 的样板。",
    tags: ["沉浸空间", "生成文本", "单 HTML"],
    origin: "builtin",
    kind: "single-html",
    entryUrl: asset("demos/babel-library/index.html"),
    downloadUrl: asset("downloads/babel-library.zip"),
    sourceLabel: "内置 Demo",
    fileCount: 1,
    totalBytes: 674745,
    accent: "gold",
  },
  {
    id: "mahjong-exchange",
    title: "麻将换三张",
    summary: "完整前端小工具形态的换三张麻将 Demo。",
    description:
      "包含独立 JS、样式和测试截图，是文件夹型 Demo 的标准示例：一个入口 HTML 加若干资源文件。",
    tags: ["小游戏", "规则模拟", "文件夹 Demo"],
    origin: "builtin",
    kind: "folder",
    entryUrl: asset("demos/mahjong-exchange/index.html"),
    downloadUrl: asset("downloads/mahjong-exchange.zip"),
    sourceLabel: "内置 Demo",
    fileCount: 9,
    totalBytes: 287644,
    accent: "teal",
  },
];
