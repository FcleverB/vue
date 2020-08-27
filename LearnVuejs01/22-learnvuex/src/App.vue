<template>
  <div id="app">
    <button @click="updateInfo">修改信息</button>
    <h2>{{$store.state.info}}</h2>
    <h2>-------------APP</h2>
    <h2>{{message}}</h2>
    <h2>{{$store.state.counter}}</h2>
    <!--Vue不推荐直接对状态进行修改-->
<!--    <button @click="$store.state.counter++">+</button>-->
<!--    <button @click="$store.state.counter&#45;&#45;">-</button>-->
    <button @click="addition">+</button>
    <button @click="subtraction">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addStudent">添加学生</button>
    <h2>-------------------APP:getters</h2>
<!--    <h2>{{$store.state.counter * $store.state.counter}}</h2>-->
    <h2>{{$store.getters.powerCounter}}</h2>
    <h2>------------------APP:getter  获取年龄大于20的student</h2>
    <h2>{{$store.getters.moreTwoAge}}</h2>
    <h2>------------------APP:getter  获取年龄大于20的student的长度</h2>
    <h2>{{$store.getters.moreTwoAgeLength}}</h2>
    <h2>------------------APP:getter  获取年龄大于指定年龄的student</h2>
    <h2>{{$store.getters.moreAgeStu(19)}}</h2>


    <h2>--------------------Hello-vuex</h2>
    <!--这里  加: 才能传递变量   不加:  表示传递"counter"字符串-->
<!--    <hello-vuex :counter="$store.state.counter"></hello-vuex>-->
    <hello-vuex></hello-vuex>
  </div>
</template>

<script>
  import HelloVuex from "./components/HelloVuex";
  import {
    INCREMENT
  } from "./store/mutations-type";

  export default {
    name: 'App',
    data() {
      return {
        message: '我是APP组件',
        // counter: 0
      }
    },
    // 单个组件使用还可以,但是如果多个组件使用共享的内容,反复定义计算属性就不合适了
    // computed: {
    //   moreTwoAge() {
    //     // s 是 $store.state.students中的单个元素  遍历
    //     // return this.$store.state.students.filter(s =>{
    //     //   return s.age >= 20
    //     // })
    //     return this.$store.state.students.filter(s => s.age >= 20)
    //   }
    // },
    components: {
      HelloVuex
    },
    methods: {
      addition(){
        this.$store.commit(INCREMENT)
      },
      subtraction() {
        this.$store.commit('decrement')
      },
      addCount(count) {
        // 普通提交风格
        // this.$store.commit('incrementCount',count)
        // 特殊提交风格
        this.$store.commit({
          type: 'incrementCount',
          count
          // count: count
        })

      },
      addStudent(){
        const stu = {id: 114,name: 'why4',age: 25}
        this.$store.commit('addStudent',stu)
      },
      updateInfo() {
        // this.$store.dispatch('aUpdateInfo')
        // this.$store.dispatch('aUpdateInfo','我是payload')
        this.$store.dispatch('aUpdateInfo',{
          message: '我是传递信息',
          success: () => {
            console.log('完成了')
          }
        })
      }
    }
  }
</script>

<style>
</style>
