import Vue from 'vue'
import App from './App.vue'

// 是否显示提示信息(一般在构建的时候用得到)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')