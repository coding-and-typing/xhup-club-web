import axios from 'axios'

const baseURL = 'http://xhup.club:8000'
axios.defaults['Access-Control-Allow-Origin'] = '*'
let http = axios.create({
  timeout: 15000,
  withCredentials: true,
  baseURL
})
/**
 * 请求拦截
 */
http.interceptors.request.use(function (config) {
  return config
}, function (error) {
  return Promise.reject(error)
})

/**
 * 响应拦截
 */
http.interceptors.response.use(res => {
  if (res.status >= 200 && res.status < 300) {
    return res
  }
}, error => {
  return Promise.reject(error)
})

export default http
