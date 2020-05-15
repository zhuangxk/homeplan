// const BaseUrl = 'http://172.17.13.187:5000'
const BaseUrl = 'http://localhost:5000'
import Base64 from '../utils/base64'
import { login } from './index'


function getToken(noToken?: boolean): Promise<Function>{
  return new Promise((resolve, reject)=>{
    if (noToken){
      return resolve()
    }
    try {
      const token = wx.getStorageSync('token')
      let str = token.split('.')[1]
      str = Base64.decode(str)
      str = str.replace(new RegExp(String.fromCharCode(0), "g"), "")
      const j = JSON.parse(str)
      const cur = new Date().getTime()
      const exp = j.exp * 1000
      if((exp - cur) > 1000 * 60 * 10 ){
        return resolve(token)
      } else {
        login().then((t: any) => {
          return resolve(t)
        })
      }
    } catch (error) {
      console.log('token 解析失败, 自动登录')
      login().then((t: any) => {
        resolve(t)
      }).catch(reject)
    }    
  })
}

export default (option: WechatMiniprogram.RequestOption, noToken?: boolean): Promise<Function> => {
  return new Promise((resolve, reject)=>{
    getToken(noToken).then((token)=>{
      wx.request({
        ...option,
        url: BaseUrl + option.url,
        header:{
          Authorization: token
        },
        success(res){
          const data = res.data as Record<string, any>
          if(data.code == 0){
            return resolve(data.data)
          }else if(data.code == 10002){
            wx.showToast({
              title: '用户鉴权错误，请稍后再试',
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
    }).catch(reject)
 
  })

}
