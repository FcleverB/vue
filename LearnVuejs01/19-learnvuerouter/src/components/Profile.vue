<template>
  <div>
    <span>我是profile组件</span>
    {{$route.params.id}}
    {{$route.query.name}}
  </div>
</template>

<script>
  export default {
    name: "profile"
  }
</script>

<style scoped>

</style>
