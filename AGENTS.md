# warmup-coach-miniapp-webview

热身教练 · Web-view 微信小程序 通过 Web-view 嵌入完整 Web App 的微信小程序，保留全部语音/手势功能。 前置条件 1. `warmup-coach.html` 已部署到 HTTPS 域名（如 Vercel / Cloudflare Tunnel） 2. 已注册微信小程序账号并获取 AppID 上线步骤 1. 替换 `project.config.json` 中的 `YOUR_APPID_HERE` 2. 替换 `app.js` 中 `coachUrl` 为你的 HTTPS 地址

## 用途与 Target 判定

热身教练小程序 WebView

- 移动端：需要
- 智能硬件：可选（可搁置）

## 目标平台

| 平台 | 方式 | 产出 |
|------|------|------|
| 移动端 | 按原工程栈 | APK / IPA |
| 智能硬件 | 可选 | — |

## 命令

```bash
# 见 README；归档工程以只读/小修为主
```

## 状态

已归档。默认只做必要修复与知识库同步，不新开大范围需求。

## 助手约束

- Loop：先定可验证 Done 与停止条件；每切片过验证环；失败回灌；详见 docs/LOOP_ENGINEERING.md
- Harness：遵循根 AGENTS「Harness Engineering」；Guide=本文件，Sensor=测试/CI；同类失误二次须沉淀规则或测试（棘轮）。详见 docs/HARNESS_ENGINEERING.md
- 遵循仓库根 `/Users/skat/AGENTS.md` 与本文件的用途判定
- 可选 Target 可搁置；不适用形态不要硬加
- 改动聚焦；公共逻辑抽离复用
