// miniprogram/pages/login/login.js

const app = getApp() as IAppOption
Page({
  data: {

  },
  login(e: any) {
    if(e.detail.errMsg == 'getUserInfo:ok'){
      app.globalData.userInfo = e.detail.userInfo
      app.globalData.logged = true
      app.userInfoReadyCallback(e.detail)
      wx.redirectTo({
        url: '/pages/index/index'
      })
    }
  }
})
export { }

