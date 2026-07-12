# 热身教练 · Web-view 微信小程序

通过 Web-view 嵌入完整 Web App 的微信小程序，保留全部语音/手势功能。

## 前置条件

1. `warmup-coach.html` 已部署到 HTTPS 域名（如 Vercel / Cloudflare Tunnel）
2. 已注册微信小程序账号并获取 AppID

## 上线步骤

1. 替换 `project.config.json` 中的 `YOUR_APPID_HERE`
2. 替换 `app.js` 中 `coachUrl` 为你的 HTTPS 地址
3. 在小程序后台「开发管理」→「服务器域名」→ `request` 合法域名加入你的域名
4. 微信开发者工具打开本目录 → 上传 → 提交审核
