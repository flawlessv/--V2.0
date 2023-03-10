import hyRequest from '..'
import { AUTHORIZATION } from '../request/config'
import { getToken, ACCESS_TOKEN, REFRESH_TOKEN } from '../../utils/auth'
// 获取图片验证码
export const getCodeRequest = () => {
  return hyRequest.get({
    url: '/mate-uaa/auth/code'
  })
}

// 通过用户名登录
export const loginByUsername = ({ username, password, code, key }) => {
  return hyRequest.post({
    url: '/mate-uaa/oauth/token',
    data: {
      grant_type: 'captcha',
      scope: 'all',
      username,
      password
    },
    headers: {
      code,
      key,
      Authorization: AUTHORIZATION
    }
  })
}
//获取用户信息
export const getUserInfo = () => {
  return hyRequest.get({
    url: '/mate-uaa/auth/get/user'
  })
}
//手机验证码下发
export const getMobileCode = (mobile) => {
  return hyRequest.get({
    url: '/mate-message-producer/send/sms',
    params: {
      mobile
    }
  })
}
//通过手机号登录
export const loginByMobile = (userData) => {
  return hyRequest.post({
    url: '/mate-uaa/oauth/token',
    data: {
      grant_type: 'sms',
      scope: 'all',
      ...userData
    },
    headers: {
      Authorization: AUTHORIZATION
    }
  })
}

// 用户注册
export const registerByMobile = (userData) => {
  return hyRequest.post({
    url: '/mate-system/user/register',
    data: {
      usertype: 'consumer',
      ...userData
    },
    headers: {
      Authorization: AUTHORIZATION
    }
  })
}
// 退出登录
export const logOut = () => {
  return hyRequest.post({
    url: '/mate-uaa/auth/logout',
    headers: {
      'Mate-Auth': getToken(ACCESS_TOKEN)
    }
  })
}
// 刷新 access_token 的接口
export const refreshToken = () => {
  console.log(getToken(REFRESH_TOKEN));
  return hyRequest.post({
    url: '/mate-uaa/oauth/token',
    data: {
      grant_type: 'refresh_token',
      scope: 'all',
      refresh_token: getToken(REFRESH_TOKEN)
    }
  })
}
