import hyRequest from "..";
import { AUTHORIZATION } from '../request/config'
// 获取图片验证码
export const getCodeRequest = () => {
    return hyRequest.get({
        url: '/mate-uaa/auth/code',
    })
}

// 通过用户名登录
export const loginByUsername = ({ username, password, code, key }) => {
    return hyRequest.post({
        url: '/mate-uaa/oauth/token',
        data: {
            grant_type: "captcha",
            scope: "all",
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
//手机验证码下发
export const getMobileCode = (mobile) => {
    console.log(mobile);
    return hyRequest.get({
        url: '/mate-uaa/auth/sms-code',
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
            grant_type: "sms",
            scope: "all",
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
            usertype: "consumer",
            ...userData
        },
        headers: {
            Authorization: AUTHORIZATION
        }
    })
}

