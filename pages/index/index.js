// 热身教练 · WebView 小程序
const app = getApp();

Page({
  data: { coachUrl: "" },
  onLoad() {
    this.setData({ coachUrl: app.globalData.coachUrl });
    wx.setKeepScreenOn({ keepScreenOn: true });
  },
  onUnload() {
    wx.setKeepScreenOn({ keepScreenOn: false });
  },
  onWebviewLoad() { /* WebView 加载成功 */ },
  onWebviewError(e) {
    wx.showToast({ title: "加载失败，请检查网络", icon: "none", duration: 3000 });
    console.error("webview error:", e.detail);
  }
});
