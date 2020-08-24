

# VueJS知识量化  

## 一丶邂逅VueJS--Vue和Vuejs没有区别

### 1 简单认识VueJS

![img20200814062144](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815162230.png)

![image-20200801060631929](https://cdn.jsdelivr.net/gh/FcleverB/images@master/img20200814062207.png)

### 2 安装Vue.js

- 安装方式

&emsp;![image-20200801061633098](https://cdn.jsdelivr.net/gh/FcleverB/images@master/img20200814062209.png)

- 初学---下载并使用<script>引入

&emsp;&emsp;![image-20200801061849690](https://cdn.jsdelivr.net/gh/FcleverB/images@master/img20200814062212.png)

- 使用WebStorm开发环境进行开发

  ![image-20200801062355338](https://cdn.jsdelivr.net/gh/FcleverB/images@master/img20200814062223.png)

  ![image-20200801062601220](https://cdn.jsdelivr.net/gh/FcleverB/images@master/img20200814062233.png)

### 3 Hello Vuejs

![image-20200801070735552](https://cdn.jsdelivr.net/gh/FcleverB/images@master/img20200814062235.png)

![image-20200801065239940](https://cdn.jsdelivr.net/gh/FcleverB/images@master/img20200814062239.png)

- 分析代码运行

![image-20200801070247328](https://cdn.jsdelivr.net/gh/FcleverB/images@master/img20200814062346.png)

### 4 Vue列表显示  v-for

![image-20200801071821182](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815170751.png)

![image-20200801071925732](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815170804.png)

![image-20200801071949694](https://cdn.jsdelivr.net/gh/FcleverB/images@master/img20200814062354.png)

### 5 案例:计数器  v-on  @click

![image-20200801074352447](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815170810.png)

- 修正:methods是方法,不是函数,方法一般都是与某个实例挂钩的

![image-20200801074020160](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815170822.png)

![image-20200801074037680](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815170825.png)

![image-20200801074420265](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815171035.png)

### 6 Vue中MVVM--Model  View  ViewModel

![1](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815171040.png)

- 主要作用1:将JS中定义的数据中绑定到Dom中,而且Vue是响应式的,所以当Model数据发生改变时,页面View也会自动发生变化

- 主要作用2:当View上面有一些用户操作或者事件的时候,会回调methods中定义的指定函数,对数据进行操作

  ![1](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815171101.png)

  ![image-20200801101034635](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815171105.png)

  ![image-20200801101446122](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815171110.png)

  - 修正:methods是方法不是函数,方法一般都是与某个实例挂钩的

  ![image-20200801101510727](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815171114.png)

### 7 创建Vue实例传入的options

- 详细参考网址:https://cn.vuejs.org/v2/api/,配置的option有很多
- 常见--el,data,methods

&emsp;&emsp;![image-20200801103256661](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815171119.png)

### 8 Vue生命周期

![img](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815171202.png)

![image-20200801110108031](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815171135.png)

## 二丶Vue基础语法

### 0 规范和ES6语法

#### 0.1 规范

- 前端普遍为缩进2个空格,更规范美观
- 后面用到的Vue脚手架工具-->.editconfig配置文件中也是要求使用2个空格进行缩进
- 添加一个vue开发的模板
  - ![image-20200801115020419](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815171139.png)
  - ![image-20200801115046849](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815171208.png)
  - ![image-20200801115133502](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815171212.png)
  - 这样在html页面中直接输入vue然后点击tab即可自动生成

#### 0.1 ES6语法---let/var

- ![image-20200802152420187](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815171215.png)
- ![image-20200802152442773](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815171218.png)
- ![image-20200802152456559](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815171221.png)

#### 0.2 ES6语法---const的使用

- ![image-20200802160226517](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815171225.png)
- ![image-20200802160213904](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815171227.png)

#### 0.3 ES6语法---对象增强写法

- ES6中,对对象字面量进行了很多增强
- ![image-20200802175221740](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815171230.png)

### 1 插值操作

- 目的:将数据在DOM中进行显示
- 方式一    Mustache语法---使用{{}}形式
  - ![image-20200801125340446](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815171233.png)
- 方式二   v-once
  - 主要应对的需求为第一次获取数据的时候,将数据在界面中合适位置显示,当数据发生变化之后,页面不作响应式改变
  - ![image-20200801130246041](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815171238.png)
  - ![image-20200801131519894](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815171241.png)
- 方式三    v-html
  - 如果从后端获取到的数据是一段html代码,如果使用Mustache语法{{}}进行输出的话,会将html的标签之类的代码也一并输出,这一般都不是我们想要的结果,如果希望让前端针对html格式进行解析的话,可以使用该指令显示出对应的内容
  - ![image-20200801133120406](https://cdn.jsdelivr.net/gh/FcleverB/images@master/typoraimgs/20200815144200.png)
  - ![image-20200801133128805](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815171244.png)
- 方式四    v-text
  - 作用与Mustache相似,都是将数据显示在界面中,通常情况下,接受一个string类型数据
  - ![image-20200801133419102](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815171246.png)
  - ![image-20200801133710614](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815171249.png)
- 方式五   v-pre
  - 用于`跳过这个元素及其子元素的编译过程`,用来显示原本的Mustache语法
  - ![image-20200801134140247](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815171251.png)
  - ![image-20200801134151984](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815171254.png)
- 方式六    v-cloak  
  - cloak  斗篷的意思
  - 由于html页面的解析是从上往下解析的,我们在View中如果使用了{{}}方式来展示数据,只有当浏览器解析到JS代码中对应数据时才会进行数据绑定,但是某些情况下,JS代码可能响应比较慢的时候,可能会出现页面中先显示{{xxx}},然后JS解析完了,再显示xxx实际对应的数据,有一种"数据闪动"的错觉
  - ![image-20200801135734148](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815171256.png)

### 2 绑定`属性`

#### 2.1 v-bind介绍

- 前面学习插值操作都是将值插入到模板的内容当中
- 但是,除了内容需要动态绑定依赖,元素的一些属性经常也需要动态来绑定
  - 比如动态绑定a元素的href属性
  - 比如动态绑定img元素的src属性

- 使用v-bind可以解决这个问题

  - ![image-20200802071810710](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815171259.png)

#### 2.2 v-bind基础

- ![image-20200802073955312](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815171302.png)

#### 2.3 v-bind语法糖---指令的简写

- ![image-20200802074113506](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815171305.png)

#### 2.4 v-bind绑定class(一)--对象语法

- 绑定方式:对象语法
  - 含义为:   class中数据是一个对象
  - key可以不加单引号,value不加单引号,默认识别为变量,否则作为Boolean值(只能写Boolean值)
- 用法
  - ![image-20200802080930797](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815171307.png)
  - ![image-20200802081403116](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815171310.png)
  - ![image-20200802081653812](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815171313.png)

#### 2.5 v-bind绑定class(二)--数组语法

- 绑定方式:数组语法
  - 含义:		class中数据为一个数组
- 用法
  - ![image-20200802081218259](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815171315.png)
  - ![image-20200802082503981](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815171318.png)

- 可以使用v-bind:style绑定一些css内联样式
- 平时写css属性名的时候,如font-size,在v-bind:style后,可以使用下面两种方式
  - 可以使用驼峰式  fontSize
  - 或者短横线分割,需要`用单引号括起来`  'font-size'
- ![image-20200802095742805](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815171322.png)
- ![image-20200802095641792](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815171325.png)
- ![image-20200802095652379](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815171327.png)

#### 2.7 v-bind绑定style(二)---数组语法

- ![image-20200802102238988](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815171330.png)
- ![image-20200802102227479](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815171332.png)

### 3 计算属性
#### 3.1 计算属性基本使用
- 在插值语法中,可以在显示一些data中的数据
- 某些情况下,需要对数据进行一些转化后再显示,或者需要将多个数据结合起来显示
  - 如果有firstName和lastName两个变量,按照Mustache语法,显示完整名称的话,需要写{{firstName}}{{lastName}}
  - 如果多个地方需要用到,则需要重复写这样的代码
- 使用计算属性,可以很好解决上述类似问题,`计算属性写在computed`中
- ![image-20200802113047743](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815171334.png)
#### 3.2 计算属性复杂使用

- 计算属性中也可以进行一些复杂操作
- ![image-20200802123251808](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815171337.png)
- ![image-20200802123258767](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815171342.png)

#### 3.3 计算属性的setter和getter

- 每一个计算属性都包含一个getter和setter
  - 之前的例子中,比如写了一个计算属性,使用{{totalPrice}}获取的时候,实际上就是调用getter方法
  - 某些情况下,也可以提供一个setter方法,但是不常用
- ![image-20200802131037003](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815171344.png)
- ![image-20200802131016064](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815171412.png)

#### 3.4 计算属性的缓存---以及和methods对比

- `计算属性多次调用的时候,只会调用一次,是有缓存的,性能高,而methods每次都是一次调用,性能低`
- 获取多次fullName,并在getter方法中输出信息,看调用了几次
- ![image-20200802131845149](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815171348.png)
- ![image-20200802132013815](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815171353.png)

### 4 事件监听  v-on

#### 4.1 介绍

- 前端开发中,经常需要和用户交互
  - 经常要监听用户一些动作,比如点击,拖拽,键盘事件等等
  - 在vue中,如何监听事件呢?使用V-on命令
- ![image-20200802180414832](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815171415.png)

#### 4.2 v-on 基础

- ![image-20200802181432615](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815171400.png)
- ![image-20200802181606457](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815171403.png)

#### 4.3 v-on参数传递

- ![image-20200802191140058](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815171418.png)
- ![image-20200802191149714](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815171421.png)
- 

#### 4.4 v-on修饰符

- 某些情况下,拿到event的目的是进行一些事件的处理
- vue提供了修饰符来帮助处理一些事件
  - ![image-20200802204020264](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815171424.png)
- ![image-20200803064913490](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815171426.png)
- ![image-20200803064931697](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815171429.png)
- ![image-20200803064919124](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815171432.png)
- 键盘 keyCode值
  - ![image-20200803064410757](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815171435.png)
  - ![image-20200803064419611](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815171438.png)
  - ![image-20200803064434676](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815171441.png)

### 5 条件判断---v-if

#### 5.1 v-if  v-else  v-else if

- ![image-20200803072748037](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815171443.png)
- ![image-20200803072757653](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815171446.png)
- ![image-20200803072812268](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815171448.png)
- ![image-20200803072857702](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815171451.png)

#### 5.2 登录切换案例

- ![image-20200803073801055](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815171454.png)
- 案例中存在的问题
  - ![image-20200803073833213](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815171456.png)
  - ![image-20200803073926895](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815171459.png)

#### 5.3 v-show

- v-show和v-if作用相似,都是决定一个元素是否渲显示
- v-show与v-if的区别
  - v-if当条件为false的时候,压根不会有对应元素在dom中
  - v-show条件为false的时候,仅仅是将元素的display属性设置为none
- 开发中选择
  - 当需要在显示与隐藏直接切换频率很高的时候,选择v-show
  - 只有一次切换时,通常使用v-if,`用的更多`
- ![image-20200804060733913](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815171502.png)
- ![image-20200804060649807](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815171504.png)

### 6 循环遍历

#### 6.1 v-for遍历数组

- ![image-20200804063649812](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815171507.png)
- ![image-20200804063705894](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815171509.png)

#### 6.2 v-for遍历对象

- ![image-20200804063748409](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815171514.png)
- ![image-20200804063758630](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815171517.png)

#### 6.3 组件的key属性(暂时没有理解)

- ![image-20200804071145743](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815171520.png)
- ![image-20200804072200593](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815171522.png)

#### 6.4 检测数组更新

- ![image-20200804071850957](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815171525.png)
  - ![image-20200804075210927](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815171527.png)
  - ![image-20200804075419815](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815171736.png)
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

  ![image-20200805155407635](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815171534.png)

### 8 v-model

#### 8.1 基本使用和原理

- ![image-20200805192026804](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815171537.png)
- ![image-20200805192034863](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815171741.png)

#### 8.2 v-model结合radio

- 注意:label标签中for属性的巧妙使用--与对应元素绑定

- ![image-20200806092057526](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815171541.png)

#### 8.3 v-model结合Checkbox

- 新了解
  - checkbox可以实现单选或者多选
- ![image-20200806095154283](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815171544.png)
- ![image-20200806095229631](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815171547.png)

#### 8.4 v-model结合select

- ![image-20200806130247362](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815171549.png)
- ![image-20200806130256118](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815171552.png)
- ![image-20200806130315628](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815171554.png)

#### 8.5 值绑定

- ![image-20200806140136173](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815171557.png)

- ![image-20200806140116932](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815171600.png)

#### 8.6 v-model修饰符使用

- ![image-20200806135831860](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815171603.png)

- ![image-20200806135733494](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815171605.png)

## 三丶组件化开发

### 1 认识组件化

#### 1.1 什么是组件化

- ![image-20200806143919701](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815171608.png)

#### 1.2 vue中组件化思想

- ![image-20200806144206857](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815171611.png)

### 2 注册组件

#### 2.1 步骤

- `通过下面这种方式默认的就是全局组件,对于局部组件后续会谈到`

- ![image-20200806155531483](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815171614.png)
- ![image-20200806155618513](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815171617.png)

#### 2.2 步骤解析

- ![image-20200806155730626](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815171619.png)
- ![image-20200806155741883](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815171622.png)

### 3 全局组件和局部组件

- ![image-20200806161217780](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815171626.png)
- ![image-20200806161337973](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815171628.png)

#### 3.1 全局组件

- ![image-20200806161242905](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815171631.png)

#### 3.2 局部组件

- ![image-20200806161247410](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815171637.png)

### 4 父组件和子组件

- ![image-20200806165254329](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815171640.png)

- ![image-20200806165031036](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815171643.png)
- ![image-20200806165158658](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815171646.png)

### 5 注册组件语法糖

- ![image-20200806173047472](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815171648.png)
- ![image-20200806173140712](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815171651.png)

### 6 模板的分离写法--template写起来结构比较复杂

- ![image-20200806180117520](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815171656.png)
- ![image-20200806180148246](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815171659.png)

### 7 组件数据存放

#### 7.1 组件`不可以访问`vue实例中的数据(data中数据)

- ![image-20200807072535666](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815171702.png)
- ![image-20200810073543218](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815171705.png)
- ![image-20200810073602301](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815171707.png)

### 5 父子组件通信

- ![image-20200810073629136](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815171710.png)

### 6 父级向子级传递

- ![image-20200810073640980](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815171712.png)
- ![image-20200810073651831](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815171715.png)
- ![image-20200810073734431](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815171718.png)
- ![image-20200810073727788](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815171721.png)

### 7 父传子驼峰问题

- ![image-20200810073842392](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815171723.png)

### 8 子级向父级传递

- ![image-20200810075238448](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815171726.png)

### 9 父子组件访问方式

#### 9.1 父组件访问子组件

##### 9.1.1 $children

- 父组件中获取的$children数组的长度不是根据父组件中components属性中定义的数量决定的，而是看父组件管理的app中使用了多少次子组件
- 通过$children[3].name等索引的方式获取子组件中的数据是不可取的，因为需求在变化，可能就会出现之前指定的索引值，不能获取到对应数据（比如中间插入了新的子组件，那么索引值就需要变化）
- ![image-20200813084027676](https://cdn.jsdelivr.net/gh/FcleverB/images@master/img20200813084027.png)
- ![image-20200813083920851](https://cdn.jsdelivr.net/gh/FcleverB/images@master/img20200813083920.png)
- ![image-20200813083817970](https://cdn.jsdelivr.net/gh/FcleverB/images@master/img20200813083818.png)
- ![image-20200810183814392](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815171730.png)
- ![image-20200813084127560](https://cdn.jsdelivr.net/gh/FcleverB/images@master/img20200813084127.png)

##### 9.1.2 $refs

- 父访问子更常用的方式，绝大多数都采用这个，this.$refs是一个对象类型，默认是一个空对象
- ![image-20200813084157149](https://cdn.jsdelivr.net/gh/FcleverB/images@master/img20200813084157.png)

#### 9.2 子组件访问父组件

##### 9.2.1 $parent

- ![image-20200813085159281](https://cdn.jsdelivr.net/gh/FcleverB/images@master/img20200813085225.png)
- ![image-20200813085302321](https://cdn.jsdelivr.net/gh/FcleverB/images@master/img20200813085302.png)
- 这里的父组件本身就是一个Vue实例，因此输出的时候显示的是一个Vue对象
- ![image-20200813085052955](https://cdn.jsdelivr.net/gh/FcleverB/images@master/img20200813085230.png)
- ![image-20200813090247842](https://cdn.jsdelivr.net/gh/FcleverB/images@master/img20200813090247.png)

#### 9.3 $root访问根组件

- 作用:访问到当前组件的根组件,可以获取到根组件的数据
- 获取到的内容是对象类型

### 10 非父子组件通信---视频未讲

- ![image-20200813091354027](https://cdn.jsdelivr.net/gh/FcleverB/images@master/img20200813091354.png)

### 11 插槽slot

#### 11.1 编译作用域

#### 11.2 为什么使用slot

- slot翻译为插槽
  - 插槽的目的是让设备具备更多的扩展性
- 组件的插槽
  - 可以由使用者来决定组件内部显示什么内容,通过传参的方式
  - ![image-20200813091602316](https://cdn.jsdelivr.net/gh/FcleverB/images@master/img20200813091602.png)

#### 11.3 如何封装slot

- ![image-20200814063222861](https://cdn.jsdelivr.net/gh/FcleverB/images@master/typoraimgs/20200814074441.png)

#### 11.4 slot基本使用

- ![image-20200814065459560](https://cdn.jsdelivr.net/gh/FcleverB/images@master/typoraimgs/20200814065459.png)
- ![image-20200814064930395](https://cdn.jsdelivr.net/gh/FcleverB/images@master/img20200814065058.png)
- ![image-20200814064946277](https://cdn.jsdelivr.net/gh/FcleverB/images@master/typoraimgs/20200814065254.png)

#### 11.5 具名插槽slot

- 在组件的使用中
  - 传入的值会替换组件中template中的所有非具名插槽,具名插槽不受影响
    - 而且传入多个值的话,那么多个值也都会传递到插槽中,不会发生替换
  - 传入的值如果想要替换具名插槽,就需要在传入的值的标签内定义slot属性并指定对应slot的name属性值
    - 对同一个具名插槽指定传入值,多个值都会传入进去,不会发生覆盖
- ![image-20200814072246938](https://cdn.jsdelivr.net/gh/FcleverB/images@master/typoraimgs/20200814074431.png)
- ![image-20200814072220540](https://cdn.jsdelivr.net/gh/FcleverB/images@master/typoraimgs/20200814074425.png)

#### 11.6 编译作用域

- 父组件模板的所有东西都会在父级作用域内编译；子组件模板的所有东西都会在子级作用域内编译。
- ![image-20200814080437813](https://cdn.jsdelivr.net/gh/FcleverB/images@master/typoraimgs/20200814080437.png)
- ![image-20200814080422787](https://cdn.jsdelivr.net/gh/FcleverB/images@master/typoraimgs/20200814080422.png)

#### 11.7 作用域插槽

- 作用域插槽是一个比较难理解的点,官方文档说的不是很清晰
- `父组件替换子组件中插槽中的标签,但是内容由子组件提供`
- 需求
  - ![image-20200814083049098](https://cdn.jsdelivr.net/gh/FcleverB/images@master/typoraimgs/20200814085410.png)
- ![image-20200814085207855](https://cdn.jsdelivr.net/gh/FcleverB/images@master/typoraimgs/20200814085432.png)
- ![image-20200814085321824](https://cdn.jsdelivr.net/gh/FcleverB/images@master/typoraimgs/20200814085410.png)
- ![image-20200814085352913](https://cdn.jsdelivr.net/gh/FcleverB/images@master/typoraimgs/20200814085352.png)

## 四丶模块化开发

- 模块化---现在前端三大框架(Angular、React、Vue)---开发时都用到了模块化思想

### 1 JavaScript原始功能

- ![image-20200815123916713](https://cdn.jsdelivr.net/gh/FcleverB/images@master/typoraimgs/20200815144304.png)

### 2 匿名函数解决方案

- ![image-20200815141534307](https://cdn.jsdelivr.net/gh/FcleverB/images@master/typoraimgs/20200815144257.png)

### 3 使用模块作为出口

- ![image-20200815141655956](https://cdn.jsdelivr.net/gh/FcleverB/images@master/typoraimgs/20200815143505.png)

### 4 CommonJS

- ![image-20200815153803255](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815153803.png)

### 5 export使用

- ![image-20200815160508368](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815160508.png)

### 6 导出函数或者类

- ![image-20200815160519309](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815160519.png)

### 7 export default

- 前面讲的导出方式,你导出什么名字,别人导入时,使用的名字也是这个,不能改变
- 通过export default可以让别人使用时自定义使用什么名称来使用导入的内容
- ![image-20200815161805849](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815161805.png)
- ![image-20200815161813270](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815161813.png)

- ![image-20200815160531983](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815160532.png)

### 8 import使用

- ![image-20200815160541000](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815160541.png)

## 五丶webpack详解----卸磨杀驴

### 1 认识Webpack

### 1.1 什么是Webpack

- webpack是属于一种开发时依赖,开发过程中需要使用它对项目中一些模块进行打包,后面直接使用打包后的文件即可,在项目开发完毕后就用不到webpack了,有种"卸磨杀驴"的感觉.

- ![image-20200815174229796](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815174229.png)

### 1.2 前端模块化

- ![image-20200815174243208](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815174243.png)

### 1.3 和grunt/gulp的对比

- ![image-20200815174258328](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815174258.png)

### 1.4 webpack安装

- ![image-20200815174312281](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815174312.png)

### 2 准备工作

- ![image-20200815182806654](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815182806.png)
- ![image-20200815182817668](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815182817.png)
- ![image-20200815182828152](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815182828.png)

### 3 入口和出口

- ![image-20200815190359661](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815190359.png)
- ![image-20200815190415445](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815190415.png)
- 动态获取绝对路径的时候,我们需要借助于node的path包,但是当前项目中并没有这个包,所以需要安装一下
- 通过使用npm init来进行初始化
  - ![image-20200815185635868](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815185635.png)
  - ![image-20200815185825308](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815185825.png)
- 此时在目录中会生成一个pakage.json的文件,该文件记录了当前项目的一些信息
  - ![image-20200815185858240](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815185858.png)
  - ![image-20200815185918415](https://gitee.com/FcleverSD/Typora/raw/master/img/20200815185918.png)
- npm run xxx一些命令
  - npm run serve:
  - npm run build:打包
  - num run xxx:此时就会查找项目中的package.json文件中的scripts(脚本),比如下面这个文件内容
    - ![image-20200816080547060](https://gitee.com/FcleverSD/Typora/raw/master/img/20200816080547.png)
    - 此时执行npm run test的时候,就会执行该文件中对应于test的命令
  - 此时就可以联系一下深圳案件的前端项目中,README.md文档中写的需要安装依赖的命令了
    - ![image-20200816081203814](https://gitee.com/FcleverSD/Typora/raw/master/img/20200816081203.png)
    - 这里就可以在项目根目录下去找对应的package.json文件了,为啥非得是项目根下的,因为README.md文档里面直接直接该命令,默认打开Terminal的时候就是项目根,因此可以推测npm init的命令执行位置也是项目根目录
      - ![image-20200816081334983](https://gitee.com/FcleverSD/Typora/raw/master/img/20200816081335.png)
  - 使用这种方式的优点在于它执行的命令是优先在本地执行该命令,之前都是全局的安装了webpack,但是在实际开发中,每个项目都有本地的一个webpack的包,这个是为了更好的适用于当前项目的特点,可能项目使用的某些版本和全局的有区别.

### 4 局部安装webpack

- ![image-20200816084408891](https://gitee.com/FcleverSD/Typora/raw/master/img/20200816084408.png)
- 第一步,项目中安装局部webpack,跟教程的话,也是安装一个3.6.0的,Vue CLI3中升级到了webpack4,但是将配置文件隐藏了起来,看起来不方便(公司内网安装不行,需要换外网)
  - ![image-20200816084820264](https://gitee.com/FcleverSD/Typora/raw/master/img/20200816084820.png)
  - ![image-20200816085413861](https://gitee.com/FcleverSD/Typora/raw/master/img/20200816085413.png)
- 第二步,查看安装后的改变
  - 执行安装命令的路径也很关键,在哪里执行命令,npm下载的一些文件就会存在于当前文件目录下
  - ![image-20200816084939038](https://gitee.com/FcleverSD/Typora/raw/master/img/20200816084939.png)
  - 查看一下package.json文件,可以发现新增了一些内容,该内容为开发时依赖,与之对应的是运行时依赖,也是可以定义在package.json文件中,比如下图二(该部分不是上面命令自动生成的,而是自己写出来作为比较的)
    - ![image-20200816085459574](https://gitee.com/FcleverSD/Typora/raw/master/img/20200816085459.png)
    - ![image-20200816085724447](https://gitee.com/FcleverSD/Typora/raw/master/img/20200816085724.png)
  - node_modules文件夹是默认生成的目录,里面含有一大堆的包,里面我们可以找到webpack
    - ![image-20200816085922229](https://gitee.com/FcleverSD/Typora/raw/master/img/20200816085922.png)
    - 但是只要是在终端中输入webpack命令使用的都是全局webpack,终端包括两个win+r+cmd和IDEA的Terminal
    - 如何使用本地webpack呢?
      - 第一种:通过package.json中定义一个脚本,执行webpack命令,那么实际执行的就是本地的webpack命令
        - ![image-20200816090426829](https://gitee.com/FcleverSD/Typora/raw/master/img/20200816090426.png)
        - ![image-20200816093628124](https://gitee.com/FcleverSD/Typora/raw/master/img/20200816093628.png)
      - 第二种
        - 通过node_modules文件夹中的webpack命令
        - ![image-20200816090719822](https://gitee.com/FcleverSD/Typora/raw/master/img/20200816090719.png)
  - package-lock.json
    - ![image-20200816094719184](https://gitee.com/FcleverSD/Typora/raw/master/img/20200816094719.png)

### 5 loader

#### 5.1 介绍

- ![image-20200816100903991](https://gitee.com/FcleverSD/Typora/raw/master/img/20200816100904.png)
- ![image-20200816115842967](https://gitee.com/FcleverSD/Typora/raw/master/img/20200816115843.png)

#### 5.2 CSS文件处理

- ![image-20200816102641767](https://gitee.com/FcleverSD/Typora/raw/master/img/20200816102641.png)
- ![image-20200816102700088](https://gitee.com/FcleverSD/Typora/raw/master/img/20200816102700.png)
- 如果不清楚使用哪个loader的话,可以进入到官网中进行查看
  - ![image-20200816103931847](https://gitee.com/FcleverSD/Typora/raw/master/img/20200816103931.png)
  - 然后需要哪种loader直接点击对应的loader即可进入到详细介绍中,比如css-loader
    - 其中test是正则表达式,是用来做匹配的
    - ![image-20200816104102030](https://gitee.com/FcleverSD/Typora/raw/master/img/20200816104102.png)
- 一定要注意后续安装的各种loader都要和视频中版本匹配一致,否则会出错
- ![image-20200816111334236](https://gitee.com/FcleverSD/Typora/raw/master/img/20200816111334.png)
- ![image-20200816111344798](https://gitee.com/FcleverSD/Typora/raw/master/img/20200816111344.png)
- 再次执行npm run build进行打包,然后查看是否背景颜色发生了变化
  - ![image-20200816111433075](https://gitee.com/FcleverSD/Typora/raw/master/img/20200816111433.png)
- 安装后的loader都可以在package.json中看到配置信息
  - ![image-20200816114718716](https://gitee.com/FcleverSD/Typora/raw/master/img/20200816114718.png)

#### 5.3 less文件处理

- ![image-20200816121520614](https://gitee.com/FcleverSD/Typora/raw/master/img/20200816121520.png)
- ![image-20200816121529726](https://gitee.com/FcleverSD/Typora/raw/master/img/20200816121529.png)
- ![image-20200816121541430](https://gitee.com/FcleverSD/Typora/raw/master/img/20200816121541.png)

#### 5.4 图片文件处理

- ![](https://gitee.com/FcleverSD/Typora/raw/master/img/20200816142801.png)
- ![image-20200816142813219](https://gitee.com/FcleverSD/Typora/raw/master/img/20200816142813.png)
- ![image-20200816142821479](https://gitee.com/FcleverSD/Typora/raw/master/img/20200816142821.png)
- ![image-20200816142829122](https://gitee.com/FcleverSD/Typora/raw/master/img/20200816142829.png)
- ![image-20200816142837971](https://gitee.com/FcleverSD/Typora/raw/master/img/20200816142838.png)

#### 5.5 ES6语法处理

- ![image-20200816144522307](https://gitee.com/FcleverSD/Typora/raw/master/img/20200816144522.png)

### 6 webpack集成Vue

#### 6.1 引入vue.js

- ![image-20200817084451859](https://gitee.com/FcleverSD/Typora/raw/master/img/20200817084452.png)

#### 6.2 打包项目--错误信息

- ![](https://gitee.com/FcleverSD/Typora/raw/master/img/20200817084505.png)

#### 6.3 el和template区别

- ![image-20200817090217331](https://gitee.com/FcleverSD/Typora/raw/master/img/20200817090217.png)
- ![image-20200817090230355](https://gitee.com/FcleverSD/Typora/raw/master/img/20200817090230.png)

#### 6.4 vue组件化开发引入

- ![image-20200817142156575](https://gitee.com/FcleverSD/Typora/raw/master/img/20200817142156.png)

#### 6.5 .vue文件封装处理

- ![image-20200817142210008](https://gitee.com/FcleverSD/Typora/raw/master/img/20200817142210.png)
- ![image-20200817142218238](https://gitee.com/FcleverSD/Typora/raw/master/img/20200817142218.png)

### 7 Plugin

- ![image-20200817172524937](https://gitee.com/FcleverSD/Typora/raw/master/img/20200817172525.png)
- ![image-20200817172535484](https://gitee.com/FcleverSD/Typora/raw/master/img/20200817172535.png)
- ![image-20200817172543438](https://gitee.com/FcleverSD/Typora/raw/master/img/20200817172543.png)
- 开发阶段是不推荐对JS代码进行压缩的,因为压缩之后的代码难以阅读,而且在浏览器进行调试非常不方便,等代码测试完发布的时候再使用压缩就可以了
- ![image-20200817172553805](https://gitee.com/FcleverSD/Typora/raw/master/img/20200817172553.png)

### 8 搭建本地服务器

- ![image-20200817181136957](https://gitee.com/FcleverSD/Typora/raw/master/img/20200817181137.png)
- ![image-20200817181146563](https://gitee.com/FcleverSD/Typora/raw/master/img/20200817181146.png)
- ![image-20200817181153306](https://gitee.com/FcleverSD/Typora/raw/master/img/20200817181153.png)

### webpack配置文件的分离

- 将原本的webpack.config.js文件抽离成3个文件:base.config.js是开发和生产环境中都可以使用的,prod.config.js文件是生产环境中使用的依赖,dev.config.js文件是开发时用到的依赖

- base.config.js

  ```
  /*
  * 使用node的语法来使用绝对路径
  * */
  // require方式导入包的时候,默认从node_module下开始查找
  const path = require('path');   //会自动在node包中查找
  const VueLoaderPlugin = require('vue-loader/lib/plugin')
  const webpack = require('webpack')  //版权信息,将版权信息打印在打包后的文件中
  const HtmlWebpackPlugin = require('html-webpack-plugin')
  const uglifyjswebpackplugin = require('uglifyjs-webpack-plugin')  //js文件压缩
  
  module.exports = {
    // 入口:可以是字符串/数组/对象,本次中入口只有一个,所以写一个字符串就行了
    entry: './src/main.js',
    // 出口:一般是一个对象,至少至少包含两个属性,path表示输出路径,filename表示输出的文件名
    output: {    //出口,打包后输出文件的位置
      //动态获取绝对路径
      // __dirname是一个全局变量,保存着当前文件所在的文件路径,继续拼接一个字符串,最终形成一个路径
      path: path.resolve(__dirname, 'dist'),   //path必须要写绝对路径,否则会报错
      filename: 'bundle.js',
      // publicPath: 'dist/'   //涉及到url的内容打包之后都会到该目录下(实际是前面拼接该路径)
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          // 数组形式设置loader,从右向左加载
          use: ['style-loader', 'css-loader']
        },
        //使用对象的方式,可以针对不同的loader设置其他属性
        {
          test: /\.less$/,
          // 注意loader的顺序,加载顺序从下往上,其实也是从右往左
          use: [{
            loader: "style-loader" // creates style nodes from JS strings
          }, {
            loader: "css-loader" // translates CSS into CommonJS
          }, {
            loader: "less-loader" // compiles Less to CSS
          }]
        },
        //图片文件
        {
          test: /\.(png|jpg|gif)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                name: 'img/[name].[hash:8].[ext]',
                limit: 40960    // 40*1024=40960k
              }
            }
          ]
        },
        //配置babel
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['es2015']
            }
          }
        },
        //配置vueloader
        {
          test: /\.vue$/,
          use: ['vue-loader'],
        }
      ],
    },
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js'
      }
    },
    plugins: [
      new VueLoaderPlugin(),
      new webpack.BannerPlugin('最终版本归Fclever所有'),
      new HtmlWebpackPlugin({
        //从当前目录开始查找
        template: 'index.html'
      }),
    ],
  }
  ```

- prod.config.js

  ```
  /*
  * 生产环境
  * */
  const uglifyjswebpackplugin = require('uglifyjs-webpack-plugin')  //js文件压缩
  
  module.exports = {
    plugins: [
      new uglifyjswebpackplugin()
    ]
  }
  ```

  

- dev.config.js

  ```
  /*
  * 开发时
  * */
  module.exports = {
    devServer: {
      contentBase: './dist',
      inline: true,
      port: 9091
    }
  }
  ```

  

- 需要安装一个包  npm install webpack-merge@4.1.5 --save-dev,然后修改配置文件内容

  - ![image-20200818075907812](https://gitee.com/FcleverSD/Typora/raw/master/img/20200818075907.png)
  - ![image-20200818075915577](https://gitee.com/FcleverSD/Typora/raw/master/img/20200818075915.png)

- 这样配置完之后,就可以吧原本的webpack.config.js删除了,此时如果在06文件路径下执行一些npn命令就会报错了,因为找不到对应的配置文件

  - ![image-20200818075137061](https://gitee.com/FcleverSD/Typora/raw/master/img/20200818075137.png)

- 所以需要在package.json文件中配置对应的配置文件的位置

  - ![image-20200818075321650](https://gitee.com/FcleverSD/Typora/raw/master/img/20200818075321.png)

- 重新执行npm run build,可以发现实际打包后的文件在build/dist文件夹下面,因为base.config.js文件在build目录下,打包的输出目录也是基于该文件的路径下去存储的

  - ![image-20200818080255985](https://gitee.com/FcleverSD/Typora/raw/master/img/20200818080256.png)

## 六丶Vue CLI详解(脚手架)

### 1 什么是Vue CLI

- ![image-20200818112546722](https://gitee.com/FcleverSD/Typora/raw/master/img/20200818112546.png)

### 2 Vue CLI使用前提--Node|Webpack

- ![](https://gitee.com/FcleverSD/Typora/raw/master/img/20200818112612.png)
- ![image-20200818112626735](https://gitee.com/FcleverSD/Typora/raw/master/img/20200818112626.png)

### 3 VueCLI使用

- ![image-20200818112640153](https://gitee.com/FcleverSD/Typora/raw/master/img/20200818112640.png)
- ![image-20200818112650189](https://gitee.com/FcleverSD/Typora/raw/master/img/20200818112650.png)

### 4 VueCLI详解

- ![image-20200818112930537](https://gitee.com/FcleverSD/Typora/raw/master/img/20200818112930.png)
- ![image-20200818112939267](https://gitee.com/FcleverSD/Typora/raw/master/img/20200818112939.png)
- ![image-20200818112955978](https://gitee.com/FcleverSD/Typora/raw/master/img/20200818112956.png)

### 5 目录结构详解

- ![image-20200818112730385](https://gitee.com/FcleverSD/Typora/raw/master/img/20200818112730.png)
- ![image-20200818112741639](https://gitee.com/FcleverSD/Typora/raw/master/img/20200818112741.png)

### 6 Runtime-Compiler和Runtime-only的区别

- 新建两个项目
  - ![image-20200818134517110](https://gitee.com/FcleverSD/Typora/raw/master/img/20200818134517.png)
  - ![image-20200818134649390](https://gitee.com/FcleverSD/Typora/raw/master/img/20200818134649.png)
- 二者的区别仅仅在一个文件中--->src/main.js
  - ![image-20200819101621762](https://gitee.com/FcleverSD/Typora/raw/master/img/20200819101621.png)
  - runtime-compiler中首先在components中进行了组件注册,然后在template中进行了使用
  - runtime-only:使用了render渲染,然后使用了一个箭头函数,该箭头函数的实质是下面这样子
    - ![image-20200819102033103](https://gitee.com/FcleverSD/Typora/raw/master/img/20200819102033.png)
- 关于render中箭头函数的使用理解,先谈一下Vue程序的执行流程
  - ![image-20200819102447707](https://gitee.com/FcleverSD/Typora/raw/master/img/20200819102447.png)
  - 在创建的vue实例中,如果加入了template,那么vue会将该模板保存在vue实例下的options中,然后会将该template模板进行parse(解析)为ast(抽象语法树  abstract syntax tree),然后再将ast进行compile(编译)为一个render函数,之后会通过render函数把对应的template最终转为virtual dom(虚拟DOM),然后再把虚拟DOM渲染为真实DOM就可以在页面中显示了
- 对比
  - ![image-20200819105715224](https://gitee.com/FcleverSD/Typora/raw/master/img/20200819105715.png)
  - ![image-20200819105728241](https://gitee.com/FcleverSD/Typora/raw/master/img/20200819105728.png)
- 发现一个有趣的事情
  - 使用npm run dev的方式启动脚手架搭建的项目时,默认是8080端口,但是如果出现端口已经被占用的时候,默认启动端口会增加,直到找到一个合适端口
- 项目一些分析(以15-runtimecompiler为例)
  - 程序入口;src/main.js
    - 在main.js中,创建了一个Vue使用,并通过el挂载了一个id为app的标签
    - ![image-20200819094518461](https://gitee.com/FcleverSD/Typora/raw/master/img/20200819094518.png)
  - 在项目根路径下有一个index.html,里面含有一个id=app的div,该div就是被Vue所管理的
    - ![image-20200819094531648](https://gitee.com/FcleverSD/Typora/raw/master/img/20200819094531.png)
  - 同时还可以注意到main.js中创建的Vue实例中还包含了components和template,并且components中使用了import的App组件,而template中使用了该组件,并且template的内容会覆盖掉el挂载的div
    - ![image-20200819094846168](https://gitee.com/FcleverSD/Typora/raw/master/img/20200819094846.png)
    - ![image-20200819095222500](https://gitee.com/FcleverSD/Typora/raw/master/img/20200819095222.png)
  - 可以看到App.vue导出的template中还使用了<HelloWorld/>的标签,这个也是导入了components/HelloWorld.vue的内容
    - ![image-20200819095416271](https://gitee.com/FcleverSD/Typora/raw/master/img/20200819095416.png)
  - 查看一下HelloWorld.vue中的内容,它实际上是制作了一个页面,然后导出
    - ![image-20200819095514857](https://gitee.com/FcleverSD/Typora/raw/master/img/20200819095514.png)
  - 使用了ESLint,想要关闭该如何关闭呢?
    - 在config/index.js文件,找到useEslint,将其设置为false即可

### 7 render函数的使用

#### 7.1 createElement

- 普通用法
  - ![image-20200819115340724](https://gitee.com/FcleverSD/Typora/raw/master/img/20200819115340.png)
  - ![image-20200819111803766](https://gitee.com/FcleverSD/Typora/raw/master/img/20200819111803.png)
    - ![image-20200819111818765](https://gitee.com/FcleverSD/Typora/raw/master/img/20200819111818.png)
  - ![image-20200819115148254](https://gitee.com/FcleverSD/Typora/raw/master/img/20200819115148.png)
    - ![image-20200819115156574](https://gitee.com/FcleverSD/Typora/raw/master/img/20200819115156.png)
- 高级用法  传入组件
  - 传入自定义组件
    - ![image-20200819120232715](https://gitee.com/FcleverSD/Typora/raw/master/img/20200819120232.png)
    - ![image-20200819120359199](https://gitee.com/FcleverSD/Typora/raw/master/img/20200819120359.png)
  - 既然能够传入cpn ,那么通过import导入的组件当然也可以传递了
    - ![image-20200819120312743](https://gitee.com/FcleverSD/Typora/raw/master/img/20200819120312.png)
    - ![image-20200819120410894](https://gitee.com/FcleverSD/Typora/raw/master/img/20200819120410.png)
- 此外对于.vue文件来说,组件内的template模板最终也会被渲染为render函数,具体帮我们进行转换的工具是vue-template-compiler

### 8 npm run build

- ![image-20200819131628160](https://gitee.com/FcleverSD/Typora/raw/master/img/20200819131628.png)

### 9 npm run dev

- ![image-20200819131636585](https://gitee.com/FcleverSD/Typora/raw/master/img/20200819131636.png)

### 10 修改配置：webpack.base.conf.js起别名(用到再讲)

### 11 认识Vue CLI3

- 创建项目 vue create   xxx
  - ![image-20200819133304005](https://gitee.com/FcleverSD/Typora/raw/master/img/20200819133304.png)
  - 这里选择手动配置,方便我们了解有哪些内容需要配置
  - ![image-20200819134208142](https://gitee.com/FcleverSD/Typora/raw/master/img/20200819134208.png)
  - 选择Vue2版本,3版本还只是预览版
    - ![image-20200819134307965](https://gitee.com/FcleverSD/Typora/raw/master/img/20200819134308.png)
  - 选择你打算将Babel,ESLint等一些配置存放在哪个位置,老师推荐选择第一个<专门的配置文件>
    - ![image-20200819134612625](https://gitee.com/FcleverSD/Typora/raw/master/img/20200819134612.png)
  - 此时vue会问你是否将刚刚的几步配置保存一个历史记录,方便后续直接使用,如果保存的话,后续就会出现在please pick a preset中,这里选择yes,然后会让你给你刚刚的配置起个名字,当然是fclever,同时也会告诉你,自定义的配置保存在了哪里
    - ![image-20200819134959262](https://gitee.com/FcleverSD/Typora/raw/master/img/20200819134959.png)
    - ![image-20200819140121486](https://gitee.com/FcleverSD/Typora/raw/master/img/20200819140121.png)
  - 脚手架3中,启动项目的方式为npm run serve  
    - 回顾  脚手架2的时候为npm run dev
    - ![image-20200819141128366](https://gitee.com/FcleverSD/Typora/raw/master/img/20200819141128.png)
- 此时我们看一下main.js(程序的入口),可以看到有些不同的内容
  - 回顾VueCLI2->runtime-only中的main.js
    - ![image-20200819141804747](https://gitee.com/FcleverSD/Typora/raw/master/img/20200819141804.png)
  - vue3生成的main.js
    - ![image-20200819141818720](https://gitee.com/FcleverSD/Typora/raw/master/img/20200819141818.png)
    - 在el这一块有些形式上不同,但是源码上是没有区别的,都是挂载一个id为app的元素

### 12 Vue CLI3目录结构

- ![image-20200819140154609](https://gitee.com/FcleverSD/Typora/raw/master/img/20200819140154.png)

### 13 VueCLi的配置信息去哪了?

- 修改配置的三种方式
  - Method1:
    - 启动vue  UI可视化页面(执行路径无所谓)
    - ![image-20200819142406643](https://gitee.com/FcleverSD/Typora/raw/master/img/20200819142406.png)
    - 此时浏览器会自动打开一个页面,在该页面中就可以完成对于项目配置的操作
    - ![image-20200819142536789](https://gitee.com/FcleverSD/Typora/raw/master/img/20200819142536.png)
    - 在该页面中还可以创建项目,此外还可以导入一个项目然后适当修改其配置
    - ![image-20200819142839103](https://gitee.com/FcleverSD/Typora/raw/master/img/20200819142839.png)
    - ![image-20200819142957432](https://gitee.com/FcleverSD/Typora/raw/master/img/20200819142957.png)
    - 在这里面就可以配置或者装一些内容了,进而达到了对项目的管理功能
  - Method2:
    - 配置文件存放位置:node_modules/@vue/cli-service/webpack.config.js
    - ![image-20200819150325140](https://gitee.com/FcleverSD/Typora/raw/master/img/20200819150325.png)
    - ![image-20200819150734526](https://gitee.com/FcleverSD/Typora/raw/master/img/20200819150734.png)
    - 在这些配置文件中也都引入了一些其他的配置,总体来看,这些配置信息都被"隐藏了",符合VueCLI3以上的0配置原则
  - Method3
    - 如果对默认的配置需要修改,还可以自己定义一些配置,这需要创建一个配置文件
    - 需要在项目根目录下创建一个名称为vue.config.js
    - ![image-20200819151911677](https://gitee.com/FcleverSD/Typora/raw/master/img/20200819151911.png)

### 14 箭头函数使用和this使用

- 箭头函数
  - ![image-20200819160832855](https://gitee.com/FcleverSD/Typora/raw/master/img/20200819160832.png)
  - ![image-20200819160907520](https://gitee.com/FcleverSD/Typora/raw/master/img/20200819160907.png)
- 箭头函数中this使用
  - ![image-20200819160938726](https://gitee.com/FcleverSD/Typora/raw/master/img/20200819160938.png)

## 五丶vue-router

### 1 认识路由

#### 1.1 什么是路由

- 创建一个新项目(按老师来做,项目前先用脚手架2)
  - ![image-20200820183542254](https://gitee.com/FcleverSD/Typora/raw/master/img/20200820183542.png)
  - ![image-20200820183629332](https://gitee.com/FcleverSD/Typora/raw/master/img/20200820183629.png)
- ![image-20200820185852711](https://gitee.com/FcleverSD/Typora/raw/master/img/20200820185852.png)
- ![image-20200820190010976](https://gitee.com/FcleverSD/Typora/raw/master/img/20200820190011.png)

#### 1.2 后端路由阶段

- ![01-后端路由阶段](https://gitee.com/FcleverSD/Typora/raw/master/img/20200820194618.png)
- ![image-20200820200030304](https://gitee.com/FcleverSD/Typora/raw/master/img/20200820200030.png)

#### 1.3 前端路由阶段

- ![02-前端后端分离阶段](https://gitee.com/FcleverSD/Typora/raw/master/img/20200820194627.png)
- ![image-20200820200018181](https://gitee.com/FcleverSD/Typora/raw/master/img/20200820200018.png)
- SPA(simple page web application)-----单页面富应用
  - ![03-SPA页面页面的阶段](https://gitee.com/FcleverSD/Typora/raw/master/img/20200820200051.png)
- 前端路由中URL和组件的关系
  - ![04-前端路由中url和组件的关系](https://gitee.com/FcleverSD/Typora/raw/master/img/20200820201859.jpg)

#### 1.4 URL的hash

- ![image-20200820203755159](https://gitee.com/FcleverSD/Typora/raw/master/img/20200820203755.png)

#### 1.5 HTML5的history模式:pushState

- 类似于一个栈结构,pushState可以入栈,back()可以出栈

- ![image-20200820203804150](https://gitee.com/FcleverSD/Typora/raw/master/img/20200820203804.png)

#### 1.6 HTML5的history模式:replaceState

- 这里就不是类似栈结构了,直接进行替换的

- ![image-20200820203814168](https://gitee.com/FcleverSD/Typora/raw/master/img/20200820203814.png)

#### 1.7 HTML5的history模式:go

- 只能在pushState使用,因为got可以进行跳跳跳  go  -  往回  +  往前

- ![image-20200820203824551](https://gitee.com/FcleverSD/Typora/raw/master/img/20200820203824.png)

### 2 vue-router基本使用

#### 2.1 认识vue-router

- ![image-20200821070751163](https://gitee.com/FcleverSD/Typora/raw/master/img/20200821070751.png)

#### 2.2 安装和使用vue-router

- 搭建路由整体框架步骤
  - ![image-20200821072523676](https://gitee.com/FcleverSD/Typora/raw/master/img/20200821072523.png)
  - 创建router实例
    - ![image-20200821072558297](https://gitee.com/FcleverSD/Typora/raw/master/img/20200821072558.png)
  - 将router实例挂载在Vue对象中
    - ![image-20200821072714109](https://gitee.com/FcleverSD/Typora/raw/master/img/20200821072714.png)
- 使用vue-router步骤
  - ![image-20200821072724744](https://gitee.com/FcleverSD/Typora/raw/master/img/20200821072724.png)
  - 创建路由组件
    - ![image-20200821074826225](https://gitee.com/FcleverSD/Typora/raw/master/img/20200821074826.png)
  - 配置路由映射:组件和路径映射关系
    - ![image-20200821074908257](https://gitee.com/FcleverSD/Typora/raw/master/img/20200821074908.png)
  - 使用路由:通过<router-link>和<router-view>
    - ![image-20200821080301988](https://gitee.com/FcleverSD/Typora/raw/master/img/20200821080302.png)
    - ![image-20200821080840023](https://gitee.com/FcleverSD/Typora/raw/master/img/20200821080840.png)
    - ![image-20200821081102336](https://gitee.com/FcleverSD/Typora/raw/master/img/20200821081102.png)
    - ![image-20200821081115902](https://gitee.com/FcleverSD/Typora/raw/master/img/20200821081115.png)

#### 2.3 路由的默认路径

- ![image-20200821085807697](https://gitee.com/FcleverSD/Typora/raw/master/img/20200821085807.png)

#### 2.4 HTML5的History模式

- ![image-20200821085818258](https://gitee.com/FcleverSD/Typora/raw/master/img/20200821085818.png)

#### 2.5 <router-link>补充

- ![image-20200821085845871](https://gitee.com/FcleverSD/Typora/raw/master/img/20200821085845.png)
- ![image-20200821085854001](https://gitee.com/FcleverSD/Typora/raw/master/img/20200821085854.png)

#### 2.6 通过代码跳转路由

- ![image-20200821141604170](https://gitee.com/FcleverSD/Typora/raw/master/img/20200821141604.png)

#### 2.7 动态路由的使用

- ![image-20200821180633610](https://gitee.com/FcleverSD/Typora/raw/master/img/20200821180633.png)
- $router和$route
  - $router获取到的是创建的Router对象
    - ![image-20200821180733794](https://gitee.com/FcleverSD/Typora/raw/master/img/20200821180733.png)
  - $route获取的是当前处于活跃状态的路由,比如下图/user/:id就是活跃的路由
    - ![image-20200821180806322](https://gitee.com/FcleverSD/Typora/raw/master/img/20200821180806.png)
    - ![image-20200821180828540](https://gitee.com/FcleverSD/Typora/raw/master/img/20200821180828.png)

#### 2.8 打包文件的解析

- ![image-20200822072544656](https://gitee.com/FcleverSD/Typora/raw/master/img/20200822072544.png)

#### 2.9 认识路由的懒加载

- ![image-20200822073506990](https://gitee.com/FcleverSD/Typora/raw/master/img/20200822073507.png)
- ![image-20200822073518534](https://gitee.com/FcleverSD/Typora/raw/master/img/20200822073518.png)

#### 2.10 懒加载的使用方式

- ![image-20200822074218758](https://gitee.com/FcleverSD/Typora/raw/master/img/20200822074218.png)

### 3 vue-router嵌套使用

#### 3.1 认识嵌套路由

- ![image-20200822080907146](https://gitee.com/FcleverSD/Typora/raw/master/img/20200822080907.png)

#### 3.2 嵌套路由的实现

- ![image-20200822080920363](https://gitee.com/FcleverSD/Typora/raw/master/img/20200822080920.png)

#### 3.3 嵌套路由默认路径

- ![image-20200822080929581](https://gitee.com/FcleverSD/Typora/raw/master/img/20200822080929.png)

### 4 vue-roter参数传递

#### 4.1 准备工作

- ![image-20200822090529702](https://gitee.com/FcleverSD/Typora/raw/master/img/20200822090529.png)

#### 4.2 传递参数的方式

- ![image-20200822090540820](https://gitee.com/FcleverSD/Typora/raw/master/img/20200822090540.png)

#### 4.3 传递参数方式一:<router-link>

- ![image-20200822090550884](https://gitee.com/FcleverSD/Typora/raw/master/img/20200822090550.png)

#### 4.4 传递参数方式二:js代码

- ![](https://gitee.com/FcleverSD/Typora/raw/master/img/20200822090605.png)

#### 4.5 获取参数

- ![image-20200822090638633](https://gitee.com/FcleverSD/Typora/raw/master/img/20200822090638.png)

#### 4.6 $route和$router

- URI

  - ```
    URI = scheme:[//authority]path[?query][#fragment]
    ```

  - ![image-20200822092952043](https://gitee.com/FcleverSD/Typora/raw/master/img/20200822092952.png)

- ![image-20200822090706541](https://gitee.com/FcleverSD/Typora/raw/master/img/20200822090706.png)

- 下载vue-router的源码可以看到Router中注册的组件以及$router和$route的定义

  - ![image-20200824081520158](https://gitee.com/FcleverSD/Typora/raw/master/img/20200824081520.png)
    - 这里面的_router实际上就是main.js中创建Vue实例的时候配置的router,具体_router赋值如下
    - ![image-20200824082257280](https://gitee.com/FcleverSD/Typora/raw/master/img/20200824082257.png)
  - 通过vue-router的源码可以看到,Router中注册了两个全局组件,因此我们可以直接使用router-link,router-view
    - ![image-20200824075826437](https://gitee.com/FcleverSD/Typora/raw/master/img/20200824075826.png)

### 5 vue-router导航守卫

- 什么是导航守卫
  - vue-router提供的导航守卫主要用来`监听路由的进入和离开的`
  - vue-router提供了beforeEach和afterEach的钩子函数,它们会在路由即将改变前和改变后触发
- 需求
  - ![image-20200824090100605](https://gitee.com/FcleverSD/Typora/raw/master/img/20200824090100.png)
  - ![image-20200824090155182](https://gitee.com/FcleverSD/Typora/raw/master/img/20200824090155.png)
  - ![image-20200824090201741](https://gitee.com/FcleverSD/Typora/raw/master/img/20200824090201.png)
  - 上面这种方式并不好,可以使用导航守卫来解决
- 全局前置守卫
  - 在route/index.js中使用
    - ![image-20200824090932629](https://gitee.com/FcleverSD/Typora/raw/master/img/20200824090932.png)
    - 进入beforeEach查看源码
      - ![image-20200824091005429](https://gitee.com/FcleverSD/Typora/raw/master/img/20200824091005.png)
    - 进入NavigationGuard查看,可以看到需要向beforeEach中传递一个带三个参数的函数才可以
      - ![image-20200824091029998](https://gitee.com/FcleverSD/Typora/raw/master/img/20200824091030.png)
      - ![image-20200824091933937](https://gitee.com/FcleverSD/Typora/raw/master/img/20200824091933.png)
    - 在对应路由下添加一个meta属性(元数据),一般来讲子路由显示的标题都和父路由一致,所以只需要给父路由添加一下就行了
      - ![image-20200824092252284](https://gitee.com/FcleverSD/Typora/raw/master/img/20200824092252.png)
      - ![image-20200824092304854](https://gitee.com/FcleverSD/Typora/raw/master/img/20200824092304.png)
    - 测试时,发现首页的标题为undefined,其他的正常
      - ![image-20200824093219854](https://gitee.com/FcleverSD/Typora/raw/master/img/20200824093219.png)
      - ![image-20200824093037709](https://gitee.com/FcleverSD/Typora/raw/master/img/20200824093037.png)
    - 原因其实很明显,因为访问首页/home时,由于设置了默认显示新闻news信息,但是我们设置的meta只在/home路由上,所以访问不到,通过log输出一下to,看一下输出内容
      - ![image-20200824093005710](https://gitee.com/FcleverSD/Typora/raw/master/img/20200824093005.png)
      - 从to的输出内容可以看到matched中保存了当前活跃的路由信息,并且数组的保存顺序也是从父-->子,因此我们可以直接获取matched[0].meta中的内容作为标题即可,因为前面提到过同一页面中标题应该以父路由为准
      - ![image-20200824094416324](https://gitee.com/FcleverSD/Typora/raw/master/img/20200824094416.png)
- 全局后置钩子   afterEach()
  - ![image-20200824094646916](https://gitee.com/FcleverSD/Typora/raw/master/img/20200824094646.png)
  - 不需要调用next()方法
- 其他类型的守卫
  - ![image-20200824095324961](https://gitee.com/FcleverSD/Typora/raw/master/img/20200824095325.png)
  - 路由独享守卫
    - ![image-20200824095719868](https://gitee.com/FcleverSD/Typora/raw/master/img/20200824095719.png)

### 6 keep-alive

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

