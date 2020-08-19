import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  // render: function (h) {
  //   return h(App)
  // }
})
// runtime-only 步骤少   性能高,代码量少6KB
// render -> virtualdom -> UI
