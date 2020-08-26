import Vue from 'vue'
import Router from 'vue-router'
//1.安装插件
Vue.use(Router)

//2.创建路由对象
// 映射关系对象   方便管理
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('../views/home/Home')
  },
  {
    path: '/category',
    component: () => import('../views/category/Category')
  },
  {
    path: '/cart',
    component: () => import('../views/cart/Cart')
  },
  {
    path: '/profile',
    component: () => import('../views/profile/Profile')
  },
]

const router = new Router({
  mode: 'history', // 避免地址栏出现#,默认是hash模式
  routes
})
// 3. 导出路由对象
export default router
