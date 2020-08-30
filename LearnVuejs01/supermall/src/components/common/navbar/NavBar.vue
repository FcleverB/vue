<template>
  <!--这里不要使用id属性,因为多个页面中都含有导航,会显得比较重复
      而对于底部tabbar来说,整个项目内只有一个,所以没啥问题
  -->
  <div class="nav-bar">
    <!--导航栏分为三个部分,左中右,需要其进行布局,但是不能直接在slot上设置class属性
          一般可以将其包裹在一个div中
    -->
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "NavBar"
  }
</script>

<style scoped>
  .nav-bar {
    display: flex;
    line-height: 44px;
    /*单纯设置line-height的时候,如果没有内容是撑不起来效果的*/
    height: 44px;
    /*文字居中*/
    text-align: center;
    /*设置阴影效果*/
    box-shadow: 0 1px 1px rgba(100,100,100,.1);
    /*导航栏的背景颜色,不要在这里定义,因为不同页面的导航栏颜色是不同的*/
  }
  .left,.right {
    width: 60px;
  }
  .center {
    flex: 1;
  }
</style>
