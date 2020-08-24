<template>
  <div>
    <h2>我是首页</h2>
    <p>我是首页内容</p>
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>
    <!--对于子路由,要在父路由中使用<router-view>来显示-->
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "Home",
    data() {
      return {
        path: '/home/news'
      }
    },
    created() {
      console.log('created')
    },
    destroyed() {
      console.log('destoryed')
    },
    // 当前路由处于活跃时执行
    activated() {
      this.$router.push(this.path)
    },
    // 当前路由不处于活跃的时候调用
    deactivated() {
    },
    beforeRouteLeave(to,from,next){
      this.path = this.$route.path
      next()
    }
  }
</script>

<style scoped>

</style>
