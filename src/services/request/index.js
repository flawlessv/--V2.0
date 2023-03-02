import axios from 'axios'
import { BASE_URL, TIME_OUT, AUTHORIZATION } from './config'
import { getAccessToken, getRefreshToken, isLogined } from '@/utils/auth'
class HYRequest {
  constructor(baseURL, timeout) {
    this.instance = axios.create({
      baseURL,
      timeout
    })

    this.instance.interceptors.request.use(
      (config) => {
        if (isLogined()) {
          config.headers.Authorization = getAccessToken()
        }
        return config
      },
      (err) => err
    )

    this.instance.interceptors.response.use(
      (res) => {
        return res.data
      },
      (err) => err
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
    // console.log(config, 'config');
    return this.request({
      ...config,
      method: 'post'
    })
  }
  put(config) {
    // console.log(config, 'config');
    return this.request({
      ...config,
      method: 'put'
    })
  }
  delete(config) {
    // console.log(config, 'config');
    return this.request({
      ...config,
      method: 'delete'
    })
  }
}
export default new HYRequest(BASE_URL, TIME_OUT)
