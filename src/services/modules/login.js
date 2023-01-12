import hyRequest from "..";

// 获取图片验证码
export const getCodeRequest = () => {
    return hyRequest.get({
        url: '/mate-uaa/auth/code',
    })
}

// 通过用户名登录
export const loginByUsername = (userData) => {
    console.log(userData);
    return hyRequest.post({
        url: '/mate-uaa/oauth/token',
        data: {
            grant_type: "captcha",
            scope: "all",
            ...userData
        },
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
export const loginByMobile = (userData) => {
    console.log(userData);
    return hyRequest.post({
        url: '/mate-uaa/oauth/token',
        data: {
            grant_type: "sms",
            scope: "all",
            ...userData
        },
    })
}

// 用户注册
export const registerByMobile = (userData) => {
    console.log(userData);
    return hyRequest.post({
        url: '/mate-system/user/register',
        data: {
            usertype: "consumer",
            ...userData
        }
    })
}

