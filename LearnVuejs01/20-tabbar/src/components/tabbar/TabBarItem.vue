<!--
  tab-bar内部单独的Item组件(包含一个图片和文本)
-->
<template>
  <div class="tab-bar-item" @click="itemClick">
    <!--图片  具名插槽   由于直接在slot中添加v-if  class等可能不生效(被真实内容直接替换)
                        因此都直接在外部添加一个slot
    -->
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <!--点击状态图片-->
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <!--文本  具名插槽   class属性判断是否为点击,但是是不生效的,因为插槽最终会被实际内容所替换
                        如果实际内容中没有class的时候,最终生成的代码也没有class
    -->
<!--    <slot :class="{active: isActive}" name="item-text"></slot>-->
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    data() {
      return {
        // isActive: false //判断是否图片为活跃状态
      }
    },
    computed: {
      isActive() {
        /*
        * /home  ->  item1(/home) = true
        * /home  ->  item2(/category) = false
        * /home  ->  item3(/car) = false
        * /home  ->  item4(/profile) = false
        * */
        // 判断当前活跃的路由的path 是否含有当前父组件传递来的path
        // indexOf  如果不存在则返回-1
        return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle() {
        return this.isActive ? {color:this.activeColor} : {}
      }
    },
    /*父传子    因为路由跳转的路径是不固定的,谁使用谁传递,然后子组件做具体跳转*/
    props: {
      path: String,
      activeColor: {
        type: String,
        default: 'red'
      }
    },
    methods: {
      itemClick() {
        /*使用push可以返回  使用replace无法返回*/
        this.$router.push(this.path)
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;/*tab-bar的高度一般都是这个*/
    font-size: 14px;
  }
  .tab-bar-item img{
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
  }
  .active{
    color: red;
  }
</style>
