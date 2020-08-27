import Vue from "vue";
import Vuex from 'vuex'
import {
  INCREMENT
} from "./mutations-type";

// 1.安装插件
Vue.use(Vuex)

// 2.创建对象
const store = new Vuex.Store({
  state: {
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
  },
  mutations: {
    // 方法
    // increment(state) {
    [INCREMENT](state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    },
    /*
    * 传递的参数称为payload   负载
    *     如果使用特殊的传参方式  那么payload接收的就是一个对象
    * */
    incrementCount(state, payload){
      // state.counter += count
      state.counter += payload.count
    },
    addStudent(state,stu) {
      state.students.push(stu)
    },
    updateInfo(state){
      state.info.name = 'fc'
    }
  },
  actions: {
    // context:上下文
    aUpdateInfo(context,payload){
      setTimeout(() => {
        context.commit('updateInfo')
        console.log(payload.message)
        payload.success()
      },1000)
    }
  },
  getters: {
    powerCounter(state){
      return state.counter * state.counter
    },
    moreTwoAge(state) {
      return state.students.filter(s => s.age >= 20)
    },
    moreTwoAgeLength(state,getters) {
      return getters.moreTwoAge.length
    },
    moreAgeStu(state){
      return function (age) {
        return state.students.filter(s => s.age >= age)
      }
    }
  },
  modules: {
    a: {
      state: {},
      mutations: {},
      actions: {},
      getters: {},
    },
    b: {
      state: {},
      mutations: {},
      actions: {},
      getters: {},
    }
  }
})

// 3.导出store对象
export default store
