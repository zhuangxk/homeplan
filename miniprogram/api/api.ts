import http from './http'

export function login(code: String){
  return http('/v1/login', {
    data: {code}
  })
}