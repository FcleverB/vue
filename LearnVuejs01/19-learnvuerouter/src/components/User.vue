<template>
  <div>
    <h2>我是用户界面</h2>
    <p>用户相关信息</p>
<!--    {{userId}}-->
    {{$route.params.id}}
  </div>
</template>

<script>
  export default {
    name: "User",
    computed: {
      userId() {
        // $route获取的是当前活跃的路由对象
        //   就是routes中的某个对象
        //   该id  必须 和路由中的一致  path: '/user/:id'
        return this.$route.params.id
      }
    }
  }
</script>

<style scoped>

</style>
