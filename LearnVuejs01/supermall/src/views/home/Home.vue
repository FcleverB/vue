<template>
  <!--整个首页是唯一的,可以设置id-->
  <div id="home">
    <!--顶部导航栏-->
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
    <!--首页商品数据列表-->
<!--    <goods-list :goods="goods['pop'].list"></goods-list>-->
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
  import GoodsList from "components/content/goods/GoodsList";
  /*子组件*/
  import HomeSwiper from "./childComps/HomeSwiper"; // 轮播图
  import HomeRecommandView from "./childComps/HomeRecommandView"; // 推荐
  import HomeFeatureView from "./childComps/HomeFeatureView"; // 本周流行
  /*附加函数,数据等*/
  import {
    getHomeMultidata,
    getHomeGoods
  } from "network/home"

  export default {
    name: "Home",
    components: {
      TabControl,
      NavBar,
      HomeSwiper,
      HomeRecommandView,
      HomeFeatureView,
      GoodsList
    },
    data() {
      return {
        banners: [],  // 轮播图
        recommends: [],  //推荐数据
        goods: {
          'pop':  {page: 0,list: []},
          'new': {page: 0,list: []},
          'sell': {page: 0,list: []}
        }
      }
    },
    created() {
      // 使用生命周期函数,当组件创建完毕时,发起网络请求,获取数据
      // 1. 请求多个数据   getHomeMultidata()的返回值是一个Promise,使用then,可以获取到结果
      this.getHomeMultidata()
      // 2. 请求分类商品数据
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
    },
    methods: {
      getHomeMultidata() {
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
      },
      getHomeGoods(type){
        // 请求当前页码加一后的数据
        const page = this.goods[type].page + 1
        getHomeGoods(type,page).then(res => {
          console.log(res)
          // 下面这种语法可以将  list数组追加在goods中
          // this.goods[type].list.push([1,2,3])这种方式不可以，会直接把数组当成一个元素，而不会解析
          this.goods[type].list.push(...res.data.list)
          // 增加一页数据，页码增加
          this.goods[type].page += 1
        })
      }
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
