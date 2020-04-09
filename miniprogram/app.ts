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
  onLaunch() {
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              console.log(res)
              this.globalData.userInfo = res.userInfo
              this.globalData.logged = true
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            },
          })
        } else {
          console.log('没有授权')
          wx.reLaunch({
            url:"/pages/login/login",
          })
          
        }
      },
    })

    // wx.getSystemInfo({
    //   success: e => {
    //     this.globalData.StatusBar = e.statusBarHeight;
    //     const capsule = wx.getMenuButtonBoundingClientRect();
    //     if (capsule) {
    //       this.globalData.Custom = capsule;
    //       this.globalData.CustomBar = capsule.bottom + capsule.top - e.statusBarHeight;
    //     } else {
    //       this.globalData.CustomBar = e.statusBarHeight + 50;
    //     }
    //   }
    // })
    
  },
})