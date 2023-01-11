import hyRequest from "..";
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
// //手机验证码下发
// export const getMobileCode = (mobile) => {
//     return hyRequest.get({
//         url: '/mate-uaa/auth/sms-code',
//         params: {
//             mobile
//         }
//     })
// }

export const getCodeRequest = () => {
    return hyRequest.get({
        url: '/mate-uaa/auth/code',
    })
}