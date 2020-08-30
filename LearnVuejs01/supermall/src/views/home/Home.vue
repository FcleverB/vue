<template>
  <!--整个首页是唯一的,可以设置id-->
  <div id="home">
    <nav-bar class="home-nav">
      <!--这里面会存放东西,插入到具名插槽里面-->
      <div slot="center">购物街</div>
    </nav-bar>
    <!--轮播图  原生代码比较多,进一步封装  将轮播图数据传递给子组件-->
    <home-swiper :banners="banners"></home-swiper>
    <!--推荐-->
    <home-recommand-view :recommends="recommends"></home-recommand-view>
    <!--本周流行-->
    <home-feature-view></home-feature-view>
    <!--首页分类  流行   新款   精选-->
    <tab-control :titles="['流行','新款','精选']"></tab-control>
    <ul>
      <li>小白</li>
      <li>小白</li>
      <li>小白</li>
      <li>小白</li>
      <li>小白</li>
      <li>小白</li>
      <li>小白</li>
      <li>小白</li>
      <li>小白</li>
      <li>小白</li>
      <li>小白</li>
      <li>小白</li>
      <li>小白</li>
      <li>小白</li>
      <li>小白</li>
      <li>小白</li>
      <li>小白</li>
      <li>小白</li>
      <li>小白</li>
      <li>小白</li>
      <li>小白</li>
      <li>小白</li>
      <li>小白</li>
      <li>小白</li>
      <li>小白</li>
      <li>小白</li>
      <li>小白</li>
      <li>小白</li>
      <li>小白</li>
      <li>小白</li>
      <li>小白</li>
      <li>小白</li>
      <li>小白</li>
      <li>小白</li>
      <li>小白</li>
      <li>小白</li>
      <li>小白</li>
      <li>小白</li>
      <li>小白</li>
      <li>小白</li>
      <li>小白</li>
      <li>小白</li>
      <li>小白</li>
      <li>小白</li>
      <li>小白</li>
      <li>小白</li>
      <li>小白</li>
      <li>小白</li>
      <li>小白</li>
      <li>小白</li>
      <li>小白</li>
      <li>小白</li>
      <li>小白</li>
      <li>小白</li>
      <li>小白</li>
      <li>小白</li>
      <li>小白</li>
      <li>小白</li>
      <li>小白</li>
      <li>小白</li>
      <li>小白</li>
      <li>小白</li>
      <li>小白</li>
      <li>小白</li>
      <li>小白</li>
      <li>小白</li>
      <li>小白</li>
      <li>小白</li>
      <li>小白</li>
      <li>小白</li>
      <li>小白</li>
      <li>小白</li>
      <li>小白</li>
      <li>小白</li>
      <li>小白</li>
      <li>小白</li>
      <li>小白</li>
      <li>小白</li>
      <li>小白</li>
      <li>小白</li>
      <li>小白</li>
      <li>小白</li>
      <li>小白</li>
      <li>小白</li>
      <li>小白</li>
      <li>小白</li>
      <li>小白</li>
      <li>小白</li>
      <li>小白</li>
      <li>小白</li>
      <li>小白</li>
      <li>小白</li>
      <li>小白</li>
      <li>小白</li>
      <li>小白</li>
      <li>小白</li>
      <li>小白</li>
      <li>小白</li>
      <li>小白</li>
      <li>小白</li>
    </ul>
  </div>
</template>

<script>
  /*公共组件*/
  import NavBar from "components/common/navbar/NavBar"  // 导航栏
  import TabControl from "components/content/tabControl/TabControl";  // 首页分类 流行  新款  精选
  /*子组件*/
  import HomeSwiper from "./childComps/HomeSwiper"; // 轮播图
  import HomeRecommandView from "./childComps/HomeRecommandView"; // 推荐
  import HomeFeatureView from "./childComps/HomeFeatureView"; // 本周流行
  /*附加函数,数据等*/
  import {getHomeMultidata} from "network/home"

  export default {
    name: "Home",
    components: {
      TabControl,
      NavBar,
      HomeSwiper,
      HomeRecommandView,
      HomeFeatureView
    },
    data() {
      return {
        banners: [],  // 轮播图
        recommends: []  //推荐数据

      }
    },
    created() {
      // 使用生命周期函数,当组件创建完毕时,发起网络请求,获取数据
      // 1. 请求多个数据   getHomeMultidata()的返回值是一个Promise,使用then,可以获取到结果
      getHomeMultidata().then(res => {
        // 注意这里的返回值已经是result.data了,因为拦截器对响应做了处理
        // 将查询到的数据进行保存
        /**
         * banner: 轮播图数据
         * dKeyword:
         * keywords:
         * recommend:
         */
        // 这里的this,指的就是当前对象
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    }
  }
</script>

<style scoped>
  /*设置顶部距离,避免被导航栏盖住*/
  #home{
    padding-top: 44px;
  }

  .home-nav {
    /*首页导航栏背景颜色*/
    background-color: rgb(255, 129, 152);
    /*字体颜色*/
    color: white;
    /*设置定位,固定位置,不随滚动而改变*/
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }
  .tab-control{
    /*没有达到top指定的位置之前,position属性默认为sticky
        达到top属性之后,自动将position属性改为fixed
    */
    position: sticky;
    top: 44px;
  }
</style>
