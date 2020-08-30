import axios from 'axios'

export function request(config) {
  // 1.创建axios的实例
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:8000/api/z8',
    timeout: 5000
  })
  // 2.axios的拦截器
  // 2.1 请求拦截的作用
  instance.interceptors.request.use(config => {
    return config
  },err => {
    return err
  })
  // 2.2 响应拦截
  instance.interceptors.response.use(res => {
    // 返回的res中存在一些axios附加的参数,这里只需要拿到实际数据data即可
    return res.data
  },err => {
    return err
  })
  // 3.发送真实的网络请求
  return instance(config)
}












