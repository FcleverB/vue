<!--首页商品数据整体组件-->
<template>
  <div class="goods">
    <goods-list-item v-for="item in goods" :goods-item="item"></goods-list-item>
  </div>
</template>

<script>
  import GoodsListItem from "./GoodsListItem";

  export default {
    name: "GoodsList",
    components: {
      GoodsListItem
    },
    props: {
      goods: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>
<style scoped>
  .goods {
    display: flex;
    flex-wrap: wrap;
    padding: 2px;
    justify-content: space-around;
  }
</style>
