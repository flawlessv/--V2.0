// 获取token
export function getAccessToken() {
  return localStorage.getItem('accessToken')
}
export function getRefreshToken() {
  return localStorage.getItem('refreshToken')
}

// 设置token
export function setToken(name, token) {
  localStorage.setItem(name, token)
}

// 判断token是否存在
export function isLogined() {
  if (
    localStorage.getItem('refreshToken') ||
    localStorage.getItem('accessToken')
  ) {
    return true
  } else {
    return false
  }
}
