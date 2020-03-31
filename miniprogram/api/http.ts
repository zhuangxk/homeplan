const BaseUrl = 'http://127.0.0.1:8080'


export default  (url:String, option: any) => {
  return new Promise((resolve, reject)=>{
    wx.request({
      url: BaseUrl + url,
      ...option,
      success(res){
        resolve(res)
      },
      fail(e){
        reject(e)
      }
    })   
  })

}
