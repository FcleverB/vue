<template>
  <div class="tab-control">
    <!--如果单纯仅仅是文字不相同的时候,一般不使用插槽-->
    <div v-for="(item,index) in titles" class="tab-control-item"
      :class="{active: currentIndex === index}"
      @click="tabClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    props: {
      // 只有文字不同直接通过传递解决
      titles: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        currentIndex: 0
      }
    },
    methods: {
      // 监听首页商品分类栏目的点击事件
      tabClick(index) {
        this.currentIndex = index
        /*因为点击不同分类会更新对应分类的信息，因此需要向父组件传递点击分类栏目的信息*/
        /*将所选分类栏目的index传递给父组件*/
        this.$emit('tabClick',index)
      }
    }
  }
</script>

<style scoped>
  .tab-control {
    display: flex;
    text-align: center;
    height: 40px;
    line-height: 40px;
    font-size: 15px;
    background-color: #fff;
  }
  .tab-control-item {
    flex: 1;
  }
  .tab-control-item span{
    padding: 5px;
  }
  .active{
    color: var(--color-high-text);
  }
  .active span{
    border-bottom: 3px solid var(--color-tint);
  }
</style>
