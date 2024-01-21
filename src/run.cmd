REM 推送至腾讯云（后续可将此也转入到github上）
@echo off

REM 切换到 .vuepress 目录
cd /d "%~dp0\.vuepress"

REM 执行 cos-sdk.py 文件
python cos-sdk.py

REM 返回到原来的目录
cd /d "%~dp0"

REM 暂停命令行窗口，以便查看输出信息
pause
