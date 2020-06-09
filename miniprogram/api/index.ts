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

// 账本列表
export async function getLedgers(): Promise<AnyObject>{
  return await http({
    url: '/v1/ledgers',
    method: 'GET'
  })
}

// 默认账本
export async function getDefaultLedger(): Promise<AnyObject>{
  return await http({
    url: '/v1/defaultLedger',
    method: 'GET'
  })
}

// 账本类型列表
export async function getBillTypes( id: number): Promise<AnyArray> {
  return await http({
    url: `/v1/ledger/${id}/bill_type`,
    method: 'GET'
  })
}

// 账户列表
export async function getAccounts( id: number): Promise<AnyArray> {
  return await http({
    url: `/v1/ledger/${id}/accounts`,
    method: 'GET'
  })
}

// OSS鉴权
export async function getOssToken(): Promise<AnyObject> {
  return await http({
    url: `/v1/oss`,
    method: 'GET'
  })
}

// 创建账单
export async function createBill(ledgerId: number, data: AnyObject): Promise<AnyObject>{
  return await http({
    url: `/v1/ledger/${ledgerId}/bill`,
    method: 'POST',
    data
  })
} 

// 账单列表
export async function getBills(ledgerId: number, query: AnyObject): Promise<AnyObject>{
  return await http({
    url: `/v1/ledger/${ledgerId}/bill`,
    method: 'GET',
    data: query
  })
}