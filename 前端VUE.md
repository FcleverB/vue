# VueJS知识量化  

## 一丶邂逅VueJS--Vue和Vuejs没有区别

### 1 简单认识VueJS

![image-20200801060435463](前端VUE.assets/image-20200801060435463.png)

![image-20200801060631929](前端VUE.assets/image-20200801060631929.png)

### 2 安装Vue.js

- 安装方式

&emsp;![image-20200801061633098](前端VUE.assets/image-20200801061633098-1596236425982.png)

- 初学---下载并使用<script>引入

&emsp;&emsp;![image-20200801061849690](前端VUE.assets/image-20200801061849690.png)

- 使用WebStorm开发环境进行开发

  ![image-20200801062355338](前端VUE.assets/image-20200801062355338.png)

  ![image-20200801062601220](前端VUE.assets/image-20200801062601220.png)

### 3 Hello Vuejs

![image-20200801070735552](前端VUE.assets/image-20200801070735552.png)

![image-20200801065239940](前端VUE.assets/image-20200801065239940.png)

- 分析代码运行

![image-20200801070247328](前端VUE.assets/image-20200801070247328.png)

### 4 Vue列表显示  v-for

![image-20200801071821182](前端VUE.assets/image-20200801071821182.png)

![image-20200801071925732](前端VUE.assets/image-20200801071925732.png)

![image-20200801071949694](前端VUE.assets/image-20200801071949694.png)

### 5 案例:计数器  v-on  @click

![image-20200801074352447](前端VUE.assets/image-20200801074352447.png)

- 修正:methods是方法,不是函数,方法一般都是与某个实例挂钩的

![image-20200801074020160](前端VUE.assets/image-20200801074020160.png)

![image-20200801074037680](前端VUE.assets/image-20200801074037680.png)

![image-20200801074420265](前端VUE.assets/image-20200801074420265.png)

### 6 Vue中MVVM--Model  View  ViewModel

![image-20200801095919050](前端VUE.assets/image-20200801095919050.png)

- 主要作用1:将JS中定义的数据中绑定到Dom中,而且Vue是响应式的,所以当Model数据发生改变时,页面View也会自动发生变化

- 主要作用2:当View上面有一些用户操作或者事件的时候,会回调methods中定义的指定函数,对数据进行操作

  ![image-20200801100428696](前端VUE.assets/image-20200801100428696.png)

  ![image-20200801101034635](前端VUE.assets/image-20200801101034635.png)

  ![image-20200801101446122](前端VUE.assets/image-20200801101446122.png)

  - 修正:methods是方法不是函数,方法一般都是与某个实例挂钩的

  ![image-20200801101510727](前端VUE.assets/image-20200801101510727.png)

### 7 创建Vue实例传入的options

- 详细参考网址:https://cn.vuejs.org/v2/api/,配置的option有很多
- 常见--el,data,methods

&emsp;&emsp;![image-20200801103256661](前端VUE.assets/image-20200801103256661.png)

### 8 Vue生命周期

![img](前端VUE.assets/1422175-20190125154237190-1916558490.png)

![image-20200801110108031](前端VUE.assets/image-20200801110108031.png)

## 二丶Vue基础语法

### 0 规范和ES6语法

#### 0.1 规范

- 前端普遍为缩进2个空格,更规范美观
- 后面用到的Vue脚手架工具-->.editconfig配置文件中也是要求使用2个空格进行缩进
- 添加一个vue开发的模板
  - ![image-20200801115020419](前端VUE.assets/image-20200801115020419.png)
  - ![image-20200801115046849](前端VUE.assets/image-20200801115046849.png)
  - ![image-20200801115133502](前端VUE.assets/image-20200801115133502.png)
  - 这样在html页面中直接输入vue然后点击tab即可自动生成

#### 0.1 ES6语法---let/var

- ![image-20200802152420187](前端VUE.assets/image-20200802152420187.png)
- ![image-20200802152442773](前端VUE.assets/image-20200802152442773.png)
- ![image-20200802152456559](前端VUE.assets/image-20200802152456559.png)

#### 0.2 ES6语法---const的使用

- ![image-20200802160226517](前端VUE.assets/image-20200802160226517.png)
- ![image-20200802160213904](前端VUE.assets/image-20200802160213904.png)

#### 0.3 ES6语法---对象增强写法

- ES6中,对对象字面量进行了很多增强
- ![image-20200802175221740](前端VUE.assets/image-20200802175221740.png)

### 1 插值操作

- 目的:将数据在DOM中进行显示
- 方式一    Mustache语法---使用{{}}形式
  - ![image-20200801125340446](前端VUE.assets/image-20200801125340446.png)
- 方式二   v-once
  - 主要应对的需求为第一次获取数据的时候,将数据在界面中合适位置显示,当数据发生变化之后,页面不作响应式改变
  - ![image-20200801130246041](前端VUE.assets/image-20200801130246041.png)
  - ![image-20200801131519894](前端VUE.assets/image-20200801131519894.png)
- 方式三    v-html
  - 如果从后端获取到的数据是一段html代码,如果使用Mustache语法{{}}进行输出的话,会将html的标签之类的代码也一并输出,这一般都不是我们想要的结果,如果希望让前端针对html格式进行解析的话,可以使用该指令显示出对应的内容
  - ![image-20200801133120406](前端VUE.assets/image-20200801133120406.png)
  - ![image-20200801133128805](前端VUE.assets/image-20200801133128805.png)
- 方式四    v-text
  - 作用与Mustache相似,都是将数据显示在界面中,通常情况下,接受一个string类型数据
  - ![image-20200801133419102](前端VUE.assets/image-20200801133419102.png)
  - ![image-20200801133710614](前端VUE.assets/image-20200801133710614.png)
- 方式五   v-pre
  - 用于`跳过这个元素及其子元素的编译过程`,用来显示原本的Mustache语法
  - ![image-20200801134140247](前端VUE.assets/image-20200801134140247.png)
  - ![image-20200801134151984](前端VUE.assets/image-20200801134151984.png)
- 方式六    v-cloak  
  - cloak  斗篷的意思
  - 由于html页面的解析是从上往下解析的,我们在View中如果使用了{{}}方式来展示数据,只有当浏览器解析到JS代码中对应数据时才会进行数据绑定,但是某些情况下,JS代码可能响应比较慢的时候,可能会出现页面中先显示{{xxx}},然后JS解析完了,再显示xxx实际对应的数据,有一种"数据闪动"的错觉
  - ![image-20200801135734148](前端VUE.assets/image-20200801135734148.png)

### 2 绑定`属性`

#### 2.1 v-bind介绍

- 前面学习插值操作都是将值插入到模板的内容当中
- 但是,除了内容需要动态绑定依赖,元素的一些属性经常也需要动态来绑定
  - 比如动态绑定a元素的href属性
  - 比如动态绑定img元素的src属性

- 使用v-bind可以解决这个问题

  - ![image-20200802071810710](前端VUE.assets/image-20200802071810710.png)

#### 2.2 v-bind基础

- ![image-20200802073955312](前端VUE.assets/image-20200802073955312.png)

#### 2.3 v-bind语法糖---指令的简写

- ![image-20200802074113506](前端VUE.assets/image-20200802074113506.png)

#### 2.4 v-bind绑定class(一)--对象语法

- 绑定方式:对象语法
  - 含义为:   class中数据是一个对象
  - key可以不加单引号,value不加单引号,默认识别为变量,否则作为Boolean值(只能写Boolean值)
- 用法
  - ![image-20200802080930797](前端VUE.assets/image-20200802080930797.png)
  - ![image-20200802081403116](前端VUE.assets/image-20200802081403116.png)
  - ![image-20200802081653812](前端VUE.assets/image-20200802081653812.png)

#### 2.5 v-bind绑定class(二)--数组语法

- 绑定方式:数组语法
  - 含义:		class中数据为一个数组
- 用法
  - ![image-20200802081218259](前端VUE.assets/image-20200802081218259.png)
  - ![image-20200802082503981](前端VUE.assets/image-20200802082503981.png)

- 可以使用v-bind:style绑定一些css内联样式
- 平时写css属性名的时候,如font-size,在v-bind:style后,可以使用下面两种方式
  - 可以使用驼峰式  fontSize
  - 或者短横线分割,需要`用单引号括起来`  'font-size'
- ![image-20200802095742805](前端VUE.assets/image-20200802095742805.png)
- ![image-20200802095641792](前端VUE.assets/image-20200802095641792.png)
- ![image-20200802095652379](前端VUE.assets/image-20200802095652379.png)

#### 2.7 v-bind绑定style(二)---数组语法

- ![image-20200802102238988](前端VUE.assets/image-20200802102238988.png)
- ![image-20200802102227479](前端VUE.assets/image-20200802102227479.png)

### 3 计算属性
#### 3.1 计算属性基本使用
- 在插值语法中,可以在显示一些data中的数据
- 某些情况下,需要对数据进行一些转化后再显示,或者需要将多个数据结合起来显示
  - 如果有firstName和lastName两个变量,按照Mustache语法,显示完整名称的话,需要写{{firstName}}{{lastName}}
  - 如果多个地方需要用到,则需要重复写这样的代码
- 使用计算属性,可以很好解决上述类似问题,`计算属性写在computed`中
- ![image-20200802113047743](前端VUE.assets/image-20200802113047743.png)
#### 3.2 计算属性复杂使用

- 计算属性中也可以进行一些复杂操作
- ![image-20200802123251808](前端VUE.assets/image-20200802123251808.png)
- ![image-20200802123258767](前端VUE.assets/image-20200802123258767.png)

#### 3.3 计算属性的setter和getter

- 每一个计算属性都包含一个getter和setter
  - 之前的例子中,比如写了一个计算属性,使用{{totalPrice}}获取的时候,实际上就是调用getter方法
  - 某些情况下,也可以提供一个setter方法,但是不常用
- ![image-20200802131037003](前端VUE.assets/image-20200802131037003.png)
- ![image-20200802131016064](前端VUE.assets/image-20200802131016064.png)

#### 3.4 计算属性的缓存---以及和methods对比

- `计算属性多次调用的时候,只会调用一次,是有缓存的,性能高,而methods每次都是一次调用,性能低`
- 获取多次fullName,并在getter方法中输出信息,看调用了几次
- ![image-20200802131845149](前端VUE.assets/image-20200802131845149.png)
- ![image-20200802132013815](前端VUE.assets/image-20200802132013815.png)

### 4 事件监听  v-on

#### 4.1 介绍

- 前端开发中,经常需要和用户交互
  - 经常要监听用户一些动作,比如点击,拖拽,键盘事件等等
  - 在vue中,如何监听事件呢?使用V-on命令
- ![image-20200802180414832](前端VUE.assets/image-20200802180414832.png)

#### 4.2 v-on 基础

- ![image-20200802181432615](前端VUE.assets/image-20200802181432615.png)
- ![image-20200802181606457](前端VUE.assets/image-20200802181606457.png)

#### 4.3 v-on参数传递

- ![image-20200802191140058](前端VUE.assets/image-20200802191140058.png)
- ![image-20200802191149714](前端VUE.assets/image-20200802191149714.png)
- 

#### 4.4 v-on修饰符

- 某些情况下,拿到event的目的是进行一些事件的处理
- vue提供了修饰符来帮助处理一些事件
  - ![image-20200802204020264](前端VUE.assets/image-20200802204020264.png)
- ![image-20200803064913490](前端VUE.assets/image-20200803064913490.png)
- ![image-20200803064931697](前端VUE.assets/image-20200803064931697.png)
- ![image-20200803064919124](前端VUE.assets/image-20200803064919124.png)
- 键盘 keyCode值
  - ![image-20200803064410757](前端VUE.assets/image-20200803064410757.png)
  - ![image-20200803064419611](前端VUE.assets/image-20200803064419611.png)
  - ![image-20200803064434676](前端VUE.assets/image-20200803064434676.png)

### 5 条件判断---v-if

#### 5.1 v-if  v-else  v-else if

- ![image-20200803072748037](前端VUE.assets/image-20200803072748037.png)
- ![image-20200803072757653](前端VUE.assets/image-20200803072757653.png)
- ![image-20200803072812268](前端VUE.assets/image-20200803072812268.png)
- ![image-20200803072857702](前端VUE.assets/image-20200803072857702.png)

#### 5.2 登录切换案例

- ![image-20200803073801055](前端VUE.assets/image-20200803073801055.png)
- 案例中存在的问题
  - ![image-20200803073833213](前端VUE.assets/image-20200803073833213.png)
  - ![image-20200803073926895](前端VUE.assets/image-20200803073926895.png)

#### 5.3 v-show

- v-show和v-if作用相似,都是决定一个元素是否渲显示
- v-show与v-if的区别
  - v-if当条件为false的时候,压根不会有对应元素在dom中
  - v-show条件为false的时候,仅仅是将元素的display属性设置为none
- 开发中选择
  - 当需要在显示与隐藏直接切换频率很高的时候,选择v-show
  - 只有一次切换时,通常使用v-if,`用的更多`
- ![image-20200804060733913](前端VUE.assets/image-20200804060733913.png)
- ![image-20200804060649807](前端VUE.assets/image-20200804060649807.png)

### 6 循环遍历

#### 6.1 v-for遍历数组

- ![image-20200804063649812](前端VUE.assets/image-20200804063649812.png)
- ![image-20200804063705894](前端VUE.assets/image-20200804063705894.png)

#### 6.2 v-for遍历对象

- ![image-20200804063748409](前端VUE.assets/image-20200804063748409.png)
- ![image-20200804063758630](前端VUE.assets/image-20200804063758630.png)

#### 6.3 组件的key属性(暂时没有理解)

- ![image-20200804071145743](前端VUE.assets/image-20200804071145743.png)
- ![image-20200804072200593](前端VUE.assets/image-20200804072200593.png)

#### 6.4 检测数组更新

- ![image-20200804071850957](前端VUE.assets/image-20200804071850957.png)
  - ![image-20200804075210927](前端VUE.assets/image-20200804075210927.png)
  - ![image-20200804075419815](前端VUE.assets/image-20200804075419815.png)
  - push()--并且返回插入的位置,可以一次添加多个元素
  - pop()--删除最后一个元素,返回移除的元素内容
  - shiift()---删除第一个元素,返回移除的元素内容
  - unshift()--在数组最前面添加元素,返回插入元素是第几个被插入的,可以一次添加多个元素
  - splice()--插入/删除/替换
  - sort()---排序
  - reverse()---反转

### 7 购物车案例

- HTML

  ```HTML
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Title</title>
    <!--引入CSS样式-->
    <link href="style.css" rel="stylesheet" type="text/css">
  </head>
  <body>
  <div id="app">
    <div v-if="books.length">
      <table>
        <thead>
        <tr>
          <th></th>
          <th>书籍名称</th>
          <th>出版日期</th>
          <th>价格</th>
          <th>购买数量</th>
          <th>操作</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(item,index) in books">
          <td>{{index+1}}</td>
          <td>{{item.name}}</td>
          <td>{{item.date}}</td>
          <!--保留两位小数-->
          <!--方式一：方法形式-->
          <!--      <td>{{ getFinalPrice(item.price)}}</td>-->
          <!--方式二：过滤器    参数  |  过滤器-->
          <td>{{item.price | showPrice}}</td>
          <!--      <td>{{item.price}}</td>-->
          <td>
            <button :disabled="item.count <=1" @click="decrement(item)">-</button>
            {{item.count}}
            <button @click="increment(item)">+</button>
          </td>
          <td>
            <button @click="removeBook(index)">移除</button>
          </td>
        </tr>
        </tbody>
      </table>
      <h2>总价格:{{totalPrice | showPrice}}</h2>
    </div>
    <h2 v-else>购物车为空</h2>
  </div>
  
  <!-- 二者顺序不能乱  因为main.js里面要用到vue-->
  <script src="../js/vue.js"></script>
  <script src="main.js"></script>
  <script>
  
  </script>
  </body>
  </html>
  ```

- css

  ```HTML
  table {
    border: 1px solid #e9e9e9;
    border-collapse: collapse;
    border-spacing: 0;
  }
  
  th, td {
    padding: 8px 16px;
    border: 1px solid #e9e9e9;
    text-align: left;
  }
  
  th {
    background-color: #f7f7f7;
    color: #5c6b77;
    font-weight: 600;
  }
  ```

- js

  ```HTML
  const app = new Vue({
    el: '#app',
    data: {
      disable: false,
      books: [
        {
          id: 1,
          name: '《算法导论》',
          date: '2006-9',
          price: 85.00,
          count: 1
        },
        {
          id: 2,
          name: '《UNIX编程艺术》',
          date: '2006-2',
          price: 59.00,
          count: 1
        },
        {
          id: 3,
          name: '《编程珠玑》',
          date: '2008-10',
          price: 39.00,
          count: 1
        },
        {
          id: 4,
          name: '《代码大全》',
          date: '2006-3',
          price: 128.00,
          count: 1
        },
      ]
    },
    methods: {
      decrement(item){
        if (item.count != 1){
          item.count--;
        }
        this.disable = true;
      },
      increment(item){
        item.count++
      },
      removeBook(index){
        this.books.splice(index,1);
      },
      // getFinalPrice(price){
      //   return '￥'+price.toFixed(2);
      // }
    },
    filters: {
      //会自动传入参数
      showPrice(price){
        return '￥'+price.toFixed(2);
      }
    },
    computed: {
      totalPrice(){
        let sum=0;
        // for(let i=0;i<this.books.length;i++){
        //   sum += this.books[i].price * this.books[i].count;
        // }
        for(let book of this.books){
          sum += book.price * book.count;
        }
        return sum;
      }
    }
  })
  ```

- 效果

  ![image-20200805155407635](前端VUE.assets/image-20200805155407635.png)

### 8 v-model

#### 8.1 基本使用和原理

- ![image-20200805192026804](前端VUE.assets/image-20200805192026804.png)
- ![image-20200805192034863](前端VUE.assets/image-20200805192034863.png)

#### 8.2 v-model结合radio

- 注意:label标签中for属性的巧妙使用--与对应元素绑定

- ![image-20200806092057526](前端VUE.assets/image-20200806092057526.png)

#### 8.3 v-model结合Checkbox

- 新了解
  - checkbox可以实现单选或者多选
- ![image-20200806095154283](前端VUE.assets/image-20200806095154283.png)
- ![image-20200806095229631](前端VUE.assets/image-20200806095229631.png)

#### 8.4 v-model结合select

- ![image-20200806130247362](前端VUE.assets/image-20200806130247362.png)
- ![image-20200806130256118](前端VUE.assets/image-20200806130256118.png)
- ![image-20200806130315628](前端VUE.assets/image-20200806130315628.png)

#### 8.5 值绑定

- ![image-20200806140136173](前端VUE.assets/image-20200806140136173.png)

- ![image-20200806140116932](前端VUE.assets/image-20200806140116932.png)

#### 8.6 v-model修饰符使用

- ![image-20200806135831860](前端VUE.assets/image-20200806135831860.png)

- ![image-20200806135733494](前端VUE.assets/image-20200806135733494.png)

## 三丶组件化开发

### 1 认识组件化

#### 1.1 什么是组件化

- ![image-20200806143919701](前端VUE.assets/image-20200806143919701.png)

#### 1.2 vue中组件化思想

- ![image-20200806144206857](前端VUE.assets/image-20200806144206857.png)

### 2 注册组件

#### 2.1 步骤

- `通过下面这种方式默认的就是全局组件,对于局部组件后续会谈到`

- ![image-20200806155531483](前端VUE.assets/image-20200806155531483.png)
- ![image-20200806155618513](前端VUE.assets/image-20200806155618513.png)

#### 2.2 步骤解析

- ![image-20200806155730626](前端VUE.assets/image-20200806155730626.png)
- ![image-20200806155741883](前端VUE.assets/image-20200806155741883.png)

### 3 全局组件和局部组件

- ![image-20200806161217780](前端VUE.assets/image-20200806161217780.png)
- ![image-20200806161337973](前端VUE.assets/image-20200806161337973.png)

#### 3.1 全局组件

- ![image-20200806161242905](前端VUE.assets/image-20200806161242905.png)

#### 3.2 局部组件

- ![image-20200806161247410](前端VUE.assets/image-20200806161247410.png)

### 4 父组件和子组件

- ![image-20200806165254329](前端VUE.assets/image-20200806165254329.png)

- ![image-20200806165031036](前端VUE.assets/image-20200806165031036.png)
- ![image-20200806165158658](前端VUE.assets/image-20200806165158658.png)

### 5 注册组件语法糖

- ![image-20200806173047472](前端VUE.assets/image-20200806173047472.png)
- ![image-20200806173140712](前端VUE.assets/image-20200806173140712.png)

### 6 模板的分离写法--template写起来结构比较复杂

- ![image-20200806180117520](前端VUE.assets/image-20200806180117520.png)
- ![image-20200806180148246](前端VUE.assets/image-20200806180148246.png)

### 7 组件数据存放

#### 7.1 组件`不可以访问`vue实例中的数据(data中数据)

- ![image-20200807072535666](前端VUE.assets/image-20200807072535666.png)
- ![image-20200807072713931](前端VUE.assets/image-20200807072713931.png)
- 从上面测试中可以看到,是无法访问的,就算可以访问,所有的数据都保存在vue实例中,这显然也不可以,此时data中数据将变得非常臃肿
- 结论:`Vue组件有自己保存数据的地方`

#### 7.2 组件中数据的存放位置

- ![image-20200807073933606](前端VUE.assets/image-20200807073933606.png)
- ![image-20200807074052640](前端VUE.assets/image-20200807074052640.png)

#### 7.3 为啥组件中的data属性必须是函数

- ![image-20200807084121990](前端VUE.assets/image-20200807084121990.png)
- ![image-20200807084909384](前端VUE.assets/image-20200807084909384.png)

### 5 父子组件通信

- ![image-20200807142957214](前端VUE.assets/image-20200807142957214.png)

### 6 父级向子级传递

- props的基本用法
  - ![image-20200807143130156](前端VUE.assets/image-20200807143130156.png)
- props使用字符串数组传递的案例
  - ![image-20200807143441946](前端VUE.assets/image-20200807143441946.png)
- props使用对象进行传递的案例
  - ![image-20200807143854673](前端VUE.assets/image-20200807143854673.png)
  - ![image-20200807143930529](前端VUE.assets/image-20200807143930529.png)
  - ![image-20200807143944697](前端VUE.assets/image-20200807143944697.png)
- 驼峰书写子组件中props(传递对象)中的属性名称注意点
  - ![image-20200807165802916](前端VUE.assets/image-20200807165802916.png)

### 7 子级向父级传递

#### 7.1 介绍

#### 7.2 自定义事件

- ![image-20200807174437796](前端VUE.assets/image-20200807174437796.png)
- ![image-20200807174748837](前端VUE.assets/image-20200807174748837.png)

#### 7.3 $children

#### 7.4 $refs

#### 7.5 $parent

#### 7.6 非父子组件通信

### 8 插槽slot

### 9 

### 10 

## 四丶Vue CU详解

### 1 

### 2 

### 3 

### 4 

### 5 

### 6 

### 7 

### 8 

### 9 

### 10 

## 五丶vue-router

### 1 

### 2 

### 3 

### 4 

### 5 

### 6 

### 7 

### 8 

### 9 

### 10 

## 六丶Vuex详解

### 1 

### 2 

### 3 

### 4 

### 5 

### 6 

### 7 

### 8 

### 9 

### 10 

## 七丶网络封装 

### 1 

### 2 

### 3 

### 4 

### 5 

### 6 

### 7 

### 8 

### 9 

### 10 

## 八丶项目实战

### 1 

### 2 

### 3 

### 4 

### 5 

### 6 

### 7 

### 8 

### 9 

### 10 

## 九丶项目部署

### 1 

### 2 

### 3 

### 4 

### 5 

### 6 

### 7 

### 8 

### 9 

### 10 

## 十丶VueJS原理

### 1 

### 2 

### 3 

### 4 

### 5 

### 6 

### 7 

### 8 

### 9 

### 10 

