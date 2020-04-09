const BaseUrl = 'http://127.0.0.1:8080'
import {login} from './index'

export default (option: WechatMiniprogram.RequestOption): Promise<Function> => {
  return new Promise((resolve, reject)=>{
    const token = wx.getStorageSync("token")
    wx.request({
      ...option,
      url: BaseUrl + option.url,
      header:{
        Authorization: token
      },
      success(res){
        console.log(res)
        const data = res.data as Record<string, any>
        if(data.code == 0){
          return resolve(data.data)
        }else if(data.code == 10002){
          wx.showToast({
            title: '用户鉴权错误，正在重新换取，，请稍后再试',
            icon: 'none',
            duration: 3000
          })
          login()
          return 
        }else{
          wx.showToast({
            title: '网络错误',
            icon: 'none',
            duration: 2000
          })          
        }


      },
      fail(e){
        wx.showToast({
          title: '网络错误',
          icon: 'none',
          duration: 2000
        })
        reject(e)
      }
    })   
  })

}
