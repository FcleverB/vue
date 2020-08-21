import Vue from 'vue'
import App from './App'
// 如果导入的是一个目录,那么会自动找该文件夹下的index文件
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
