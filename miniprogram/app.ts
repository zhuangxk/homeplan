// app.ts

import { uploadUserInfo } from './api/index'
App<IAppOption>({
  globalData: { 
    logged: false
  },
  userInfoReadyCallback(data: WechatMiniprogram.GetUserInfoSuccessCallbackResult){
    uploadUserInfo(data.userInfo).then(
      (res)=>{
        console.log(res)
      }
    )      
  },
  getUserInfo(){
    return new Promise((resolve, reject) => {
      wx.getSetting({
        success: res => {
          if (res.authSetting['scope.userInfo']) {
            wx.getUserInfo({
              success: res => {
                this.globalData.userInfo = res.userInfo
                return resolve(res)
              },
            })
          } else {
            reject()
            wx.reLaunch({
              url: "/pages/login/login",
            })
          }
        },
        fail: reject
      })
    })
  },
  onLaunch() {
      // 获取用户信息
    this.getUserInfo().then((res: any)=>{
      this.userInfoReadyCallback(res)
    })
    wx.getSystemInfo({
      success: e => {
        this.globalData.StatusBar = e.statusBarHeight;
        const capsule = wx.getMenuButtonBoundingClientRect();
        if (capsule) {
          this.globalData.Custom = capsule;
          this.globalData.CustomBar = capsule.bottom + capsule.top - e.statusBarHeight;
        } else {
          this.globalData.CustomBar = e.statusBarHeight + 50;
        }
      }
    })
    
  },
})