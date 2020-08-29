import axios from 'axios'

// // 如果以后可能用到多个实例的时候,使用export function
// export function request(config,success,failure) {
//   // 1.创建axios的实例
//   const instance = axios.create({
//     baseURL: 'http://152.136.185.210:8000/api/z8/home/multidata',
//     timeout: 5000
//   })
//
//   instance(config)
//     .then(res => {
//       // 下面这种写法不是很合适,因为外部调用者调用封装的axios进行请求,
//       //  应该在执行完后,将返回值抛出,交给外部调用者来处理更好
//       // console.log(res);
//       // 回调抛出,可以
//       success(res)
//     })
//     .catch(err => {
//       // 下面这种写法不是很合适,因为外部调用者调用封装的axios进行请求,
//       //  应该在执行完后,将返回值抛出,交给外部调用者来处理更好
//       // console.log(err);
//       // 回调抛出,可以
//       failure(err)
//     })
// }
//
// export function instance2() {
//
// }

// 优化
// 如果以后可能用到多个实例的时候,使用export function
// export function request(config) {
//   // 1.创建axios的实例
//   const instance = axios.create({
//     baseURL: 'http://152.136.185.210:8000/api/z8/home/multidata',
//     timeout: 5000
//   })
//
//   instance(config.baseConfig)
//     .then(res => {
//       config.success(res)
//     })
//     .catch(err => {
//       config.failure(err)
//     })
// }
//
// export function instance2() {
//
// }

// 进一步优化
// export function request(config) {
//   return new Promise((resolve,reject) => {
//     // 1.创建axios的实例
//     const instance = axios.create({
//       baseURL: 'http://152.136.185.210:8000/api/z8/home/multidata',
//       timeout: 5000
//     })
//     instance(config)
//       .then(res => {
//         resolve(res)
//       })
//       .catch(err => {
//         reject(err)
//       })
//   })
//
// }


// 最终版
// export function request(config) {
//   // 1.创建axios的实例
//   const instance = axios.create({
//     baseURL: 'http://152.136.185.210:8000/api/z8',
//     timeout: 5000
//   })
//   // instance(config)方法本身就是返回一个Promise
//   return instance(config)
// }

// axios拦截器
export function request(config) {
  // 1.创建axios的实例
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:8000/api/z8',
    timeout: 5000
  })
  // 拦截器
  // 拦截全局
  // axios.interceptors.request
  // axios.interceptors.response
  // 拦截instance实例
  instance.interceptors.request.use(config => {
    // 请求成功进入
    console.log('请求成功')
    console.log(config)
    // 1.比如config中一些信息不符合服务器的要求

    // 2.比如每次发送网络请求,都希望在页面中显示一个加载的动态图片,在响应成功后消失

    // 3. 某些网络请求要求用户必须登录,判断用户是否有token,如果没有token则跳转到login页面

    // 4. 队请求的参数进行序列化

    // 处理结束还得返回
    return config
  },err => {
    // 请求失败进入
    console.log('请求失败');
    console.log(err)
    return err
  })
  instance.interceptors.response.use(res => {
    // 响应成功进入
    console.log('响应成功');
    console.log(res);
    return res
  },err => {
    // 响应失败进入
    console.log('响应失败');
    console.log(err);
    return err
  })
  // instance(config)方法本身就是返回一个Promise
  return instance(config)
}












