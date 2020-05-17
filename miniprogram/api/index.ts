import http from './http'


// 获取token
export function login(): Promise<string>{
  return new Promise((resolve, reject)=>{
    wx.login({
      success: res => {
        http({
          url:'/auth',
          data: {code: res.code }
        }, true)
        .then(r => {
            wx.setStorageSync("token", r.token)
            resolve(r.token)
          }
        )
        .catch(reject)
      },
    })    
  })

}

export async function uploadUserInfo(data: WechatMiniprogram.UserInfo): Promise<AnyObject>{
  return await http({
    url: '/v1/user',
    method: 'POST',
    data: data
  })
}

export async function getLedgers(): Promise<AnyObject>{
  return await http({
    url: '/v1/ledgers',
    method: 'GET'
  })
}

export async function getDefaultLedger(): Promise<AnyObject>{
  return await http({
    url: '/v1/defaultLedger',
    method: 'GET'
  })
}

export async function getBillTypes( id: number): Promise<AnyArray> {
  return await http({
    url: `/v1/ledger/${id}/bill_type`,
    method: 'GET'
  })
}