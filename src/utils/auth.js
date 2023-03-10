export const ACCESS_TOKEN = 'access_token'
export const REFRESH_TOKEN = 'refresh_token'
// 获取token
export function getToken(name) {
  return localStorage.getItem(name)
}

// 设置token
export function setToken(name, token) {
  localStorage.setItem(name, token)
}

// 判断token是否存在
export function isLogined() {
  return localStorage.getItem(REFRESH_TOKEN) ? true : false
}
