// 配置路由相关信息
import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../components/Home'
// import About from '../components/About'
// import User from "../components/User";

// 1.通过Vue.use(插件),安装插件-----任何插件都有这一步
//      底层是执行了对应的   插件.install方法
Vue.use(VueRouter)

// 2.创建VueRouter对象
const routes = [
  // 设置默认显示哪个路由
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    // component: Home
    component: () => import('../components/Home'),
    meta: {
      title: '首页'
    },
    /*
    * 子路由的时候path前面不能加/  访问时会自动添加
    *     看弹幕有的人可以加,有的就不行,但是不加一定行,你明白了吧,fc
    * */
    children: [
      /*
      * 子路由也可以配置默认路径
      * */
      // {
      //   path: '/',
      //   redirect: 'news'
      // },
      {
        path: 'news',
        name: 'HomeNews',
        // component: Home
        component: () => import('../components/HomeNews')
      },
      {
        path: 'message',
        name: 'HomeMessage',
        // component: Home
        component: () => import('../components/HomeMessage')
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // component: About
    component: () => import('../components/About'),
    meta: {
      title: '关于'
    }
  },
  {
    path: '/user/:id',  // 规定语法来拼接
    name: 'User',
    // component: User
    component: () => import('../components/User'),
    meta: {
      title: '用户'
    }
  },
  {
    path: '/profile/:id',
    name: 'Profile',
    component: () => import('../components/Profile'),
    meta: {
      title: '我的'
    }
  }
]
const router = new VueRouter({
  // 配置路由和组件之间的映射关系
  routes,
  mode: 'history',
  linkActiveClass: 'active'
})
// 导航守卫
// 前置守卫   路由进入时调用
router.beforeEach((to, from, next) => {
  // from: 源路由  Route类型
  // to:   目标跳转的路由  Route类型
  // 从from跳转到to
  document.title = to.matched[0].meta.title
  // 在beforeEach中必须调用next()
  next()
})

// 后置钩子   路由离开时调用
router.afterEach((to, from) => {

})

// 3.将router对象传入到Vue实例中
export default router

// import Vue from 'vue'
// import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
//
// Vue.use(Router)
//
// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld
//     }
//   ]
// })
