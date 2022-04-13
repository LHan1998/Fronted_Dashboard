import axios from "axios";

const service = axios.create({
    baseURL: 'http://10.99.12.103:55582/',
    timeout: 5000, // 请求超时时间
    withCredentials: true
})


export default service