import axios from "axios";
import { BASE_URL, TIME_OUT, AUTHORIZATION } from "./config";
import { getToken, isLogined } from '@/utils/auth'
class HYRequest {
    constructor(baseURL, timeout) {
        this.instance = axios.create({
            baseURL, timeout
        })

        this.instance.interceptors.request.use(config => {
            if (isLogined()) {
                console.log('isLogined');
                config.headers.Authorization = getToken()
                console.log(config, 'request');
            }
            return config
        }, err => err)

        this.instance.interceptors.response.use(res => {
            console.log(res);
            return res.data
        }, err => err)
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
        console.log(config, 'config');
        return this.request({
            ...config, method: 'post',
        })
    }
}
export default new HYRequest(BASE_URL, TIME_OUT)