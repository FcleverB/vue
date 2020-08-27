import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./store";

Vue.config.productionTip = false
// 在Vue中挂载Store的时候其实和挂载router一样,都是使用了类似下面的代码
// Vue.prototype.$store = store

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
