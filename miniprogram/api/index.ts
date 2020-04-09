import http from './http'
const app = getApp()
export function login(){
  wx.login({
    success: res => {
      http({
        url:'/auth',
        data: {code: res.code }
      })
      .then((r: any ) => {
          wx.setStorage({
              key: "token",
              data: r.token
          })
          app.globalData.logged = true
        }
      )
    },
  })
}

export function uploadUserInfo(data: WechatMiniprogram.UserInfo): Promise<Function>{
  return http( {
    url: '/v1/user',
    method: 'POST',
    data: data
  })
}