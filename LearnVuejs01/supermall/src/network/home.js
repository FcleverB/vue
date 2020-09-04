/*
* 封装首页(Home)的网络请求
* */
import {request} from "./request";
// http://152.136.185.210:8000/api/z8

export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}

/*
* type表示类别  page表示页码
* */
export function getHomeGoods(type, page) {
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}

