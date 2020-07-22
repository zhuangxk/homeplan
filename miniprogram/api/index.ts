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

export async function uploadUserInfo(data: WechatMiniprogram.UserInfo): Promise<WechatMiniprogram.UserInfo>{
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

// 账单类型列表
export async function getBillTypes( id: number): Promise<AnyArray> {
  return await http({
    url: `/v1/ledger/${id}/bill_type`,
    method: 'GET'
  })
}

// 账单类型添加
export async function addBillType( ledgerID: number, data: AnyObject): Promise<AnyObject> {
  return await http({
    url: `/v1/ledger/${ledgerID}/bill_type`,
    method: 'POST',
    data
  })
}

// 账单类型删除
export async function delBillType( id: number): Promise<AnyObject> {
  return await http({
    url: `/v1/bill_type/${id}`,
    method: 'DELETE'
  })
}

// 账单类型更新
export async function updateBillType( id: number, data: AnyObject): Promise<AnyObject> {
  return await http({
    url: `/v1/bill_type/${id}`,
    method: 'PUT',
    data
  })
}

// 账单类型排序
export async function sortBillType(data: AnyObject): Promise<AnyObject> {
  return await http({
    url: `/v1/bill_type/sort`,
    method: 'POST',
    data
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

// 账单删除
export async function delBill(billId: number): Promise<AnyObject>{
  return await http({
    url: `/v1/bill/${billId}`,
    method: 'DELETE',
  })
}

// 更新账单
export async function updateBill(billId: number, data: AnyObject): Promise<AnyObject>{
  return await http({
    url: `/v1/bill/${billId}`,
    method: 'PUT',
    data
  })
} 


// 添加明细
export async function addBillDeltail(billId: number, data: AnyObject): Promise<AnyObject>{
  return await http({
    url: `/v1/bill/${billId}/detail`,
    method: 'POST',
    data
  })
}
// 编辑明细
export async function updateillDeltail(Id: number, data: AnyObject): Promise<AnyObject>{
  return await http({
    url: `/v1/bill_detail/${Id}`,
    method: 'PUT',
    data
  })
}
// 删除明细
export async function delBillDeltail(Id: number): Promise<AnyObject>{
  return await http({
    url: `/v1/bill_detail/${Id}`,
    method: 'DELETE'
  })
}
// 明细列表
export async function getBillDeltails(billId: number): Promise<AnyArray>{
  return await http({
    url: `/v1/bill/${billId}/detail`,
    method: 'GET'
  })
}
