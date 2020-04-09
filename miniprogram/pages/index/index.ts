// index.ts
// 获取应用实例
// const app = getApp<IAppOption>()

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
  }
})

export {};
