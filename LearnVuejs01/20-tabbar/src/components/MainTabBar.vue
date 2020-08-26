<template>
  <tab-bar>
    <!--父传子   如果单纯只是传递数据,不需要加:path
                  当需要把父组件中的数据传递到子组件  :path="父组件中属性变量名"
    -->
    <!--如果要修改字体颜色,则使用activeColor属性传递到子组件中-->
    <!--      <tab-bar-item path="/home" activeColor="blue">-->
    <tab-bar-item path="/home">
      <!--一开始就要把被点击状态和未点击状态的图片都插入
            然后由代码决定显示哪一张图片
      -->
      <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/home_active.svg" alt="">
      <div slot="item-text">
        首页
      </div>
    </tab-bar-item>
    <!--      <tab-bar-item path="/category" activeColor="blue">-->
    <tab-bar-item path="/category">
      <img slot="item-icon" src="~assets/img/tabbar/category.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/category_active.svg" alt="">
      <div slot="item-text">
        分类
      </div>
    </tab-bar-item>
    <!--      <tab-bar-item path="/cart" activeColor="blue">-->
    <tab-bar-item path="/cart">
      <img slot="item-icon" src="~assets/img/tabbar/shopcart.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/shopcart_active.svg" alt="">
      <div slot="item-text">
        购物车
      </div>
    </tab-bar-item>
    <!--      <tab-bar-item path="/profile" activeColor="blue">-->
    <tab-bar-item path="/profile">
      <img slot="item-icon" src="~assets/img/tabbar/profile.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/profile_active.svg" alt="">
      <div slot="item-text">
        我的
      </div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from "components/tabbar/TabBar";
  import TabBarItem from "components/tabbar/TabBarItem";

  export default {
    name: "MainTabBar",
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>

</style>
