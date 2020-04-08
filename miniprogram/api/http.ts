const BaseUrl = 'http://127.0.0.1:8080'

const token = wx.getStorageSync("token")

export default (option: WechatMiniprogram.RequestOption): Promise<Function> => {
  return new Promise((resolve, reject)=>{
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
        }
        if(data.code == 10002){
          wx.navigateTo({
            url:"/pages/login/login" 
          })
          return 
        }
        wx.showToast({
          title: '网络错误',
          icon: 'none',
          duration: 2000
        })
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
