import axios from 'axios'
import { getToken } from './token'
import { history } from './history'


const http = axios.create({
  baseURL: 'http://geek.itheima.net/v1_0',
  timeout: 5000
})

// 添加请求拦截器
http.interceptors.request.use(function (config) {
  // 在发送请求之前，token注入
  const token = getToken()
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
http.interceptors.response.use(function (response) {
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么
  return response.data;
}, function (error) {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  // toekn失效时，状态码是401
  // console.dir(error.request.status)
  if(error.request.status === 401){
    // 跳回到登录
    history.push('/login')
  }
});

export { http }

