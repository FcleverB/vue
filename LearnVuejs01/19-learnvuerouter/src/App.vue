<template>
  <div id="app">
<!--    <router-link to="/home" tag="button" replace active-class="active">首页</router-link>-->
<!--    <router-link to="/about" tag="button" replace active-class="active">关于</router-link>-->

    <router-link to="/home" tag="button" replace>首页</router-link>
    <router-link to="/about" tag="button" replace>关于</router-link>
<!--    <router-link to="/user/10086" tag="button" replace>用户</router-link>-->
    <router-link v-bind:to="'/user/'+userid" tag="button" replace>用户</router-link>
<!--    <router-link :to="{-->
<!--      path: '/profile/'+userid,-->
<!--      query: {name: 'why',age: 18}-->
<!--    }" tag="button">我的</router-link>-->
<!--    <router-view></router-view>-->
    <button @click="toProfile">我的</button>
    <!--
      <router-link>
        该标签是一个vue-router中已经内置的组件,它会被渲染成一个<a>标签
      <router-view>
        该标签会根据当前的路径,动态渲染出不同的组件
      网页中的其他标签,比如顶部的标题/导航,或者底部的一些版权信息等会和<router-view>
        处于同一个登记
      在路由切换时,切换的是<router-view>挂载的组件,其他内容不会发生改变
    -->
<!--    <button @click="homeClick">首页</button>-->
<!--    <button @click="aboutClick">关于</button>-->
<!--    <button @click="userClick">用户</button>-->
    <keep-alive>
        <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      userid: '152'
    }
  },
  methods: {
    // homeClick () {
    //   // 通过代码方式修改路径
    //   // push  -->  pushState   可前进后退 这种方式同一个路由点击两次控制台会报错
    //   // NavigationDuplicated: Avoided redundant navigation to current location: "/home".
    //   // $router 实际就是获取了创建的router对象
    //   this.$router.push("/home")
    //   // replace --> replaceState   不可后退
    //   // this.$router.replace("/home")
    // },
    // aboutClick () {
    //   this.$router.push("/about")
    //   // replace --> replaceState
    //   // this.$router.replace("/about")
    // },
    // userClick () {
    //   this.$router.push("/user")
    //   // replace --> replaceState
    //   // this.$router.replace("/user")
    // }
    toProfile() {
      this.$router.push({
        path: '/profile/'+this.userid,
        query: {name: 'why',age: 18}
      })
    }
  }
}
</script>

<style>
  /*给router-link  点击时自动添加的样式绑定class*/
  /*.router-link-active{*/
  /*  color: red;*/
  /*}*/
  .active{
    color: blue;
  }
</style>
