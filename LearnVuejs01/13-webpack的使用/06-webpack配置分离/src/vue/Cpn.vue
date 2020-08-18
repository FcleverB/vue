<template>
  <div>
    <h2>我是cpn组件的标题</h2>
    <p>我是内容 {{message}}</p>
  </div>
</template>

<script>
  export default {
    name: "Cpn",
    data(){
      return {
        message: 'woshixiaoxiao'
      }
    }
  }
</script>

<style scoped>

</style>