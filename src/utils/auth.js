// 获取token
export function getToken() {
    return localStorage.getItem('token')
}

// 设置token
export function setToken(token) {
    localStorage.setItem('token', token);
}

// 判断token是否存在
export function isLogined() {
    if (localStorage.getItem('token')) {
        return true
    } else {
        return false
    }
}