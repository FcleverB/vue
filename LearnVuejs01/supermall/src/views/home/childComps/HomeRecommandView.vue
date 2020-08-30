<!--
  推荐栏目
      轮播图下面的部分
-->
<template>
  <div class="recommend">
    <div v-for="item in recommends" class="recommend-item">
        <a :href="item.link">
          <img :src="item.image" alt="">
          <div>
            {{item.title}}
          </div>
        </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeRecommandView",
    props: {
      recommends: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .recommend {
    display: flex;
    margin-top: 10px;
    font-size: 14px;
    padding-bottom: 30px;
    border-bottom: 10px solid #eee;
  }

  .recommend-item {
    flex: 1;  /*均等分*/
    text-align: center; /*居中*/
  }

  .recommend img {
    width: 80px;
    height: 80px;
    margin-bottom: 10px;
  }
</style>
