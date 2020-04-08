// index.ts
// 获取应用实例
const app = getApp<IAppOption>()

Page({
  data: {
    PageCur: 'main',
  },
  NavChange(e: any) {
    this.setData({
      PageCur: e.currentTarget.dataset.cur
    })
  },
  onShareAppMessage() {
    return {
      title: 'demo',
      imageUrl: '/images/share.jpg',
      path: '/pages/index/index'
    }
  },
  // 事件处理函数
  // bindViewTap() {
  //   wx.navigateTo({
  //     url: '../logs/logs',
  //   })
  // },
  // getUserInfo(e: any) {
  //   console.log(e)
  //   app.globalData.userInfo = e.detail.userInfo
  //   this.setData({
  //     userInfo: e.detail.userInfo,
  //     hasUserInfo: true,
  //   })
  // },
})
