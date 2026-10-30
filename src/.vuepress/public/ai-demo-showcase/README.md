# aha demos

线上地址：https://zgarry.github.io/ai-demo-showcase/

同一类题目，隔一代模型再做一次，看能力到底涨了多少。这个目录是纯静态文件，VuePress 构建时原样复制到站点，不参与博客的页面生成。

## 目录

```
index.html            总览首页（单文件，无需构建）
demos/<名称>/          可玩的 demo，路径与 2026-06 旧版展示站一致，旧链接继续有效
prompts/<名称>.md      提示词原文或推测，文件开头注明来源状态
prompts/common-suffix.md  2026-06 那一轮共用的后缀
downloads/<名称>.zip   打包下载
demo-sw.js            旧版展示站的 Service Worker 的注销脚本，保留这个文件名即可
```

## 已收录

| 名称 | 模型 | 时间 | 提示词状态 |
|---|---|---|---|
| `ink-kung-fu` 水墨功夫（第一期） | 未核实 | 2026-09 | 原始提示词未找到 |
| `kung-fu-salute` 抱拳礼（第二期） | 未核实 | 2026-09 | 原始提示词未找到 |
| `trinity-map` 三位一体能力图 | Claude Opus 5.5 原作；后续内容更新 | 2026-09 / 2026-10 | 原文，含追加需求 |
| `programmer-day` 程序员的一天 | Claude Opus 5.5 | 2026-09 | 原文 |
| `babel-library` 巴别图书馆 | Claude Fable 5 | 2026-06 | 原文 |
| `voxel-sunset` 永恒落日 · 我的世界 | Claude Fable 5 | 2026-06 | 前半句推测，后缀原文 |
| `counter-strike` 真人 CS | Claude Fable 5 | 2026-06 | 前半句重建，后缀原文 |
| `claude-intro` Claude 介绍自己 | Claude Fable 5 | 2026-06 | 推测 |
| `mahjong-exchange` 麻将换三张 | 未知 | 2026-06 | 未找到 |

2026-06 的五个 demo 于 2026-09 从本仓库提交 `4e53cab`（删除前最后一版）原样恢复。已经找不回来的：我的世界的模块源码与 35 项通关测试、巴别图书馆的游玩指南、做这些 demo 的原始对话。

## 新增一轮

1. 把成品放进 `demos/<名称>/`，入口必须是 `index.html`，并注明外部资源依赖；三位一体能力图保留原作的 Google Fonts 引用，字体不可用时使用系统字体。
2. 提示词写进 `prompts/<名称>.md`，第一行用 HTML 注释写明状态（原文 / 推测 / 重建）。
3. 打包 `downloads/<名称>.zip`（可以带源码）。
4. 在 `index.html` 里复制一张卡片，填上标题、说明、标签和三个链接；新一代模型单独开一个 `<section>`。
5. 推送到 `master`，GitHub Actions 会自动发布。

## 2026-10-23 三位一体内容更新

保留三个战场与五大核心能力，移除数据分析地基和版本升级对照；新增连接器与蒸馏的八条学习认识、四条网页访问路线，以及数据、功能、工作流的交互示例。同步更新总览卡片和下载包，保留旧地址。

## 武侠 · 水墨功夫

两期采用 `aha-demos/武侠/episodes/` 的完整 HTML 播放版，不能使用缺少 HTML 外壳的 `dist/` Artifact 版替代。保留 Google Fonts 与系统字体回退；下载包包含对应的 `index.html`。原始提示词和模型未核实，单列系列，不参与模型对比。

## 2026-10-30 三位一体最佳实践

首页新增独立“最佳实践”栏目，入口 `practices/cloud-business/index.html`；原能力图末尾与首页能力图卡片同步增加阅读入口。保留原有 9 个 demo 的数量和模型归属，实践文章不计入模型对比。

新增内容围绕“三位一体 × 五大核心能力”，提炼 AI-coder 的通用机制，展开自媒体、量化、电商建设方案、验收标准、授权边界和复盘方式。已有实践参照与未来方案分别说明，不宣称未经验证的经营效果。来源见 `prompts/cloud-business.md`。
