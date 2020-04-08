import http from './http'

export function login(code: string): Promise<Function>{
  return http({
    url:'/auth',
    data: {code}
  })
}

export function uploadUserInfo(data: WechatMiniprogram.UserInfo): Promise<Function>{
  return http( {
    url: '/v1/user',
    method: 'POST',
    data: data
  })
}