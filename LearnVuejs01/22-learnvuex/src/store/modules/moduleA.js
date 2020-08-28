export default {
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
