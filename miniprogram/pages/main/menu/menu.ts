// const app = getApp<IAppOption>();
Page({
  data: {
    iconList: [{
      icon: 'cardboardfill',
      color: 'red',
      badge: 1,
      name: '登录',
      handler: 'login'
    }, {
      icon: 'recordfill',
      color: 'orange',
      badge: 1,
      name: '账本',
      handler: 'ledger'
    }, {
      icon: 'picfill',
      color: 'yellow',
      badge: 0,
      name: '账单',
      handler: 'bill'
    }]
  },
  login(){
    wx.getUserInfo({
      complete(data) {
        console.log(data)
      }
    })
    // wx.login({
    //   success (res) {
    //     if (res.code) {
    //       //发起网络请求
    //       console.log(res.code)
          
    //     } else {
    //       console.log('登录失败！' + res.errMsg)
    //     }
    //   }
    // })
  },
  ledger(){
    console.log('ledger')
  },
  bill(){
    console.log('bill')
  },
  bindGetUserInfo(e: any){
    console.log(e.detail.userInfo)
  }

})