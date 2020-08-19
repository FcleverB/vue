// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

const cpn = {
  template: '<div>{{message}}</div>',
  data () {
    return {
      message: '我是组件'
    }
  }
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // components: { App },
  // template: '<App/>'
  render: function (createElement) {
    // 普通用法
    // 1.createElement('标签')
    // 会使用标签替换到el挂载的内容
    // return createElement('h2')
    // 2.createElement('标签',{标签的属性})
    // 会使用标签替换到el挂载的内容并给对应标签添加属性
    // return createElement('h2',{class: 'box'})
    // 3.createElement('标签',{标签的属性},[填充在标签内的内容])
    // 会使用标签替换到el挂载的内容并给对应标签添加属性,数组中的内容
    // return createElement('h2', {class: 'box'},
    //   ['HelloWorld', createElement('button', {class: 'btn'}, ['createElement按钮'])]
    // )
    // 高级用法,传入组件
    return createElement(App)
  }
})
// runtime-compiler 步骤多
// template -> ast -> render -> virtualdom -> UI
