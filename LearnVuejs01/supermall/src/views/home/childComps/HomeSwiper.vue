<template>
  <swiper>
    <swiper-item v-for="item in banners">
      <!--轮播图是可以点击的,可以在外部包装一个a标签,item中有一个link属性,包含了数据所在的url-->
      <a :href="item.link">
        <!--图片地址-->
        <img :src="item.image" alt="" />
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
  // 存在swiper/index.js文件后可以简便写
  // import Swiper from "components/common/swiper/Swiper";
  // import SwiperItem from "components/common/swiper/SwiperItem";
  // 简便写法
  import {Swiper,SwiperItem} from "components/common/swiper"

  export default {
    name: "HomeSwiper",
    components: {
      Swiper,
      SwiperItem
    },
    // 父组件给子组件传递数据
    props: {
      /*轮播图数据*/
      banners: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>

</style>
