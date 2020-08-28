import Vue from "vue";
import Vuex from 'vuex'
import {
  INCREMENT
} from "./mutations-type";

// 1.安装插件
Vue.use(Vuex)

const moduleA = {
  state: {
    // $store.state.xxx
    name: 'fc1'
  },
  mutations: {
    // 模块中的方法名尽量不要和Store中的mutations名称相同
    // $store.commit(xxxx)
    updateName(state,payload) {
      state.name = payload
    }
  },
  actions: {
    aUpdateName(context) {
      console.log(context)
      // 模块的context.commit只会调用当前模块中的mutations
      context.commit('updateName','xiaobai')
    }
  },
  getters: {
    // $store.getters.xxxx
    fullname(state){
      return state.name + '111'
    },
    fullname2(state,getter){
      return getter.fullname + '222'
    },
    // 也可以引用大模块的数据   rootState
    fullname3(state,getter,rootState){
      return getter.fullname2 + rootState.counter
    }
  }
}
const moduleB = {
  state: {
    name: 'fc2'
  },
  mutations: {},
  actions: {},
  getters: {}
}

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
    // 这里定义的a,b最终都会存在在state中
    //  即可以通过$store.state.a.xxx获取模块中的数据
    a: moduleA,
    b: moduleB
  }
})

// 3.导出store对象
export default store


const obj = {
  name: 'why',
  age: 18,
  height: 1.88
}

const {name,height,age} = obj

