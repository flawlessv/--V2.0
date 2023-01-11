import axios from "axios";
import { BASE_URL, TIME_OUT, CODE_HEADER } from "./config";
class HYRequest {
    constructor(baseURL, timeout) {
        this.instance = axios.create({
            baseURL, timeout
        })
        this.instance.interceptors.response.use(res => {
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
                Authorization: CODE_HEADER
            }
        })
    }
    post(config) {
        console.log(config,'config');
        console.log(config.key,'configKey');
        return this.request({
            ...config, method: 'post', headers: {
                Authorization: CODE_HEADER,
                key: config.data.key,
                code: config.data.code
            }
        })
    }
}
export default new HYRequest(BASE_URL, TIME_OUT)