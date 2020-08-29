import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // router,
  render: h => h(App)
})

// axios(config)
// http://152.136.185.210:8000/api/z8/home/multidata
// axios 支持Promise(异步处理)
// axios({
//   url: 'http://152.136.185.210:8000/api/z8/home/multidata',
//   method: 'get'   // 指定请求
// }).then((data) => {
//   console.log(data);
// })
//
// axios({
//   // url: 'http://152.136.185.210:8000/api/z8/home/data?type=sell&page=3',
//   url: 'http://152.136.185.210:8000/api/z8/home/data',
//   // 专门针对get请求的参数拼接(这都是以老师的接口为例)
//   params: {
//     type: 'pop',
//     page: 1
//   }
// }).then((data) => {
//   console.log(data);
// })

// 2. axios发送并发请求
//    如果是发送多个请求,就可以传递一个数组,里面写多个请求即可
// axios.all([axios({
//   url: 'http://152.136.185.210:8000/api/z8/home/multidata'
// }),axios({
//   url: 'http://152.136.185.210:8000/api/z8/home/data',
//   params: {
//     type: 'sell',
//     page: 4
//   }
// })]).then(result => {
//     //两个网络请求都完成后执行then
//   // console.log(result);
//   console.log(result[0]);
//   console.log(result[1]);
// })

// axios.spread
//  axios提供的发送并发请求的方式
// axios.all([axios({
//   url: 'http://152.136.185.210:8000/api/z8/home/multidata'
// }),axios({
//   url: 'http://152.136.185.210:8000/api/z8/home/data',
//   params: {
//     type: 'sell',
//     page: 4
//   }
// })]).then(axios.spread((result1,result2) => {
//   //两个网络请求都完成后执行then
//   // console.log(result);
//   console.log(result1);
//   console.log(result2);
// }))
// 全局配置
// axios.defaults.baseURL = 'http://152.136.185.210:8000/api/z8'
// axios.defaults.timeout = 5000 // 单位毫秒
//
// axios.all([axios({
//   // baseURI: 'http://152.136.185.210:8000/api/z8',
//   // timeout: 5000,
//   url: '/home/multidata'
// }),axios({
//   // baseURI: 'http://152.136.185.210:8000/api/z8',
//   url: '/home/data',
//   // timeout: 5000,
//   params: {
//     type: 'sell',
//     page: 4
//   }
// })]).then(axios.spread((result1,result2) => {
//   //两个网络请求都完成后执行then
//   // console.log(result);
//   console.log(result1);
//   console.log(result2);
// }))

// 4. 创建对应的axios的实例
// 这里创建了一个Axios实例,可以配置该实例的一些全局配置
// 如果存在向多个服务器中发送请求(地址一般不同),这时候可以创建多个Axios实例
// const axiosInstance = axios.create({
//   baseURL: 'http://152.136.185.210:8000/api/z8',
//   timeout: 5000
// })
//
// axiosInstance({
//   url: '/home/multidata'
// }).then(res => {
//   console.log(res)
// })
//
// axiosInstance({
//   url: '/home/data',
//   params: {
//     type: 'pop',
//     page: 1
//   }
// }).then(res => {
//   console.log(res)
// })
// // 新的实例
// const axiosInstance2 = axios.create({
//   baseURL: 'http://111.222.333.444:8000/api/z8',
//   timeout: 20000,
//   headers: {
//
//   }
// })

//5. 封装一个request模块
// import {request} from './network/request'
//
// request({
//   url: 'http://152.136.185.210:8000/api/z8/home/multidata'
// },res => {
//   console.log(res)
// },err => {
//   console.log(err)
// })

// 封装优化
// import {request} from './network/request'
//
// request({
//   baseConfig: {
//
//   },
//   success: function (res) {
//     console.log(res);
//   },
//   failure: function (err) {
//     console.log(err);
//   }
// })

// 进一步优化
// import {request} from "./network/request";
//
// request({
//   url: '/home/multidata'
// }).then(res => {
//   console.log(res);
// }).catch(err => {
//   console.log(err);
// })

// 最终
import {request} from "./network/request";

request({
  url: '/home/multidata'
}).then(res => {
  console.log('实际调用成功');
  console.log(res);
}).catch(err => {
  console.log('实际调用失败');
  console.log(err);
})



















