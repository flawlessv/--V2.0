import axios from 'axios'
import { BASE_URL, TIME_OUT, AUTHORIZATION } from './config'
import { isLogined, setToken, getToken, ACCESS_TOKEN } from '@/utils/auth'
import { refreshToken } from '..'
import { REFRESH_TOKEN } from '../../utils/auth'
class HYRequest {
  constructor(baseURL, timeout) {
    this.instance = axios.create({
      baseURL,
      timeout
    })
    //请求拦截器
    this.instance.interceptors.request.use(
      (config) => {
        //使用ACCESS_TOKEN判断用户是否登录
        if (isLogined()) {
          config.headers['Mate-Auth'] = getToken(ACCESS_TOKEN)
        }
        return config
      },
      (err) => {
        return err
      }
    )
    // 响应拦截器
    let isRefreshing = false // 标记是否正在刷新 token
    this.instance.interceptors.response.use(
      (res) => {
        return res.data
      },
      (err) => {
        console.log(err, 'response err')
        //如果ACCESS_TOKEN过期的话，使用，REFRESH_TOKEN获取新的ACCESS_TOKEN
        if (err.response.status === 401) {
          //判断是否正在进行token刷新
          if (!isRefreshing && err.response.config.url === '/mate-uaa/auth/get/user') {
            isRefreshing = true
            const { config } = err
            return refreshToken()
              .then((res) => {
                const { access_token, refresh_token } = res.data
                console.log(res.data, 'res.datares.data')
                //设置新的token
                setToken(ACCESS_TOKEN, access_token)
                setToken(REFRESH_TOKEN, refresh_token)
                config.headers['Mate-Auth'] = access_token
                return this.instance(config)
              })
              .catch((err) => {
                console.log('登录失效，请重新登陆！')
                localStorage.clear()
                return Promise.reject(err)
              })
              .finally(() => {
                isRefreshing = false
              })
          }
        }
        return err
      }
    )
  }
  request(config) {
    return this.instance.request(config)
  }
  get(config) {
    return this.request({
      ...config,
      method: 'get',
      headers: {
        Authorization: AUTHORIZATION
      }
    })
  }
  post(config) {
    return this.request({
      ...config,
      method: 'post'
    })
  }
  put(config) {
    return this.request({
      ...config,
      method: 'put'
    })
  }
  delete(config) {
    return this.request({
      ...config,
      method: 'delete'
    })
  }
}
export default new HYRequest(BASE_URL, TIME_OUT)
