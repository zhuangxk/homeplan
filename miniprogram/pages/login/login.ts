// miniprogram/pages/login/login.js

import { login } from '../../api/api'
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad () {

  },
  login() {
    console.log(12)
    wx.login({
      success: res => {
        console.log(res.code)
        login(res.code)
        .then( r =>{
          console.log('sss')

          console.log(r)
        })
        .catch(err=>{
          console.log('eee')
          console.log(err)
        })
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      },
    })

  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom () {

  },

  /**
   * 用户点击右上角分享
   */
  // onShareAppMessage () {
     
  // } 
})