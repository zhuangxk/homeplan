// miniprogram/pages/login/login.js

import { login } from '../../api/index'
const app = getApp()
Page({
  data: {

  },
  login() {
    wx.login({
      success: res => {
        login(res.code)
          .then((r: any ) => {
            wx.setStorage({
                key: "token",
                data: r.token
            })
            app.globalData.logged = true
            wx.navigateTo({
              url: "/pages/index/index"
            })
          }
        )
      },
    })

  }
})