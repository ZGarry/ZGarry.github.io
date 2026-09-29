# 永恒落日 · Voxel Sunset

用 three.js 写的 Minecraft 风格体素世界,定格在永恒的日落。**完全自包含的单文件游戏**:双击 `index.html` 即玩,无需联网、无需安装任何东西。

## 玩法

出生在高空,自动滑翔。俯瞰大海、海岸线、丘陵与树林缓缓下降;落地切步行,按 **F** 随时重新起飞。完成任务线最终"点亮永恒黄昏"即通关,之后自由建造。

| 按键 | 作用 |
| --- | --- |
| 鼠标 | 视角(滑翔时控制方向:俯冲加速、拉起爬升) |
| 长按左键 / 右键 | 挖掘(有裂纹进度,硬度因方块而异) / 放置 |
| W A S D | 移动;滑翔时 W/S 加减速 |
| 空格 | 跳跃 / 水中上浮 |
| F | 起飞,重新滑翔 |
| E | 背包与合成(原木→木板、沙子→玻璃、铁矿+煤→铁块) |
| C | 创造 / 生存模式切换 |
| Shift · 1-9 · 滚轮 | 疾跑 · 快捷栏 |

## 系统

- **生存**:生命值、摔落与撞击伤害、自动回血、死亡重生;方块掉落进背包,放置消耗
- **世界**:程序生成的海洋/海岸/丘陵/森林/离岸岛;地下有煤矿、铁矿、辉光石(会发光);花、高草;沙子和砂砾有重力
- **存档**:自动保存到浏览器 localStorage(每 5 秒 + 关闭页面时),主菜单可清档开新世界
- **画面**:自定义日落天空与海面 shader(日光反射路)、逐顶点 AO、长影、Bloom、暗角调色
- **音效**:全程序化 WebAudio(挖掘/脚步/滑翔风声/海浪/受伤/通关音)

## 工程

```
index.html      可直接游玩的最终成品(esbuild 打包内联,含 three.js)
src/            模块源码(state/blocks/world/player/render/ui/audio/main + template)
build.mjs       打包:npm i && node build.mjs → dist/index.html
test/           Puppeteer 无头浏览器全流程测试(35 项,含从出生到通关)
                npm i puppeteer-core @sparticuz/chromium && node test/playthrough.mjs
```

URL 加 `?test=1` 进入测试模式(免鼠标锁,暴露 `window.__game` 调试接口)。
