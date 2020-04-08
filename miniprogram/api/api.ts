import http from './http'

export function login(code: String){
  return http('/auth', {
    data: {code}
  })
}