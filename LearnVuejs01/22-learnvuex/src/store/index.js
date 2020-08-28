import Vue from "vue";
import Vuex from 'vuex'
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
import moduleA from "./modules/moduleA";

// 1.安装插件
Vue.use(Vuex)

const state = {
  counter: 1000,
  students: [
    {id:110,name:'why1',age:18},
    {id:111,name:'why2',age:19},
    {id:112,name:'why3',age:20},
    {id:113,name:'why4',age:21}
  ],
  info: {
    name: 'fclever',
    age: 40,
    height: 1.78
  }
}

// 2.创建对象
const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    // 这里定义的a,b最终都会存在在state中
    //  即可以通过$store.state.a.xxx获取模块中的数据
    a: moduleA
  }
})

// 3.导出store对象
export default store


// const obj = {
//   name: 'why',
//   age: 18,
//   height: 1.88
// }
//
// const {name,height,age} = obj

