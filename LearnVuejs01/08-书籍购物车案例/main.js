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
      // let sum=0;
      // for(let i=0;i<this.books.length;i++){
      //   sum += this.books[i].price * this.books[i].count;
      // }
      // let sum=0;
      for(let book of this.books){
        sum += book.price * book.count;
      }
      return sum;
    }
  }
})
//编程范式：命令式编程/声明式编程
//编程范式：面向对象编程（对象）/函数式编程（函数）
/**
 * 三个高阶函数
 *    filter/map/reduce
 */
const nums = [10,20,111,222,444,40,50];
//1.需求：取出所有小于100的数字
// let newNums = []
// for(let n of nums){
//   if(n < 100){
//     newNums.push(n)
//   }
// }
/**
 * 1.filter
 *    filter中的回调函数有一个要求，必须返回一个Boolean值
 *    true：当返回为true时，函数内部会自动将这次回调的n加入到新的数组中
 *    false：当返回为false的时候，函数内部会过滤掉这次的n
 */
// let newNums = nums.filter(function (n) {
//   return n<100;
// })

//2.需求：将鄋小于100的数字进行转换，乘以2
// let new2Num = []
// for(let n of newNums){
//   new2Num.push(n * 2)
// }
/**
 * 2.map
 *    遍历数组，并对每个值在回调函数中进行处理，处理结果保存在一个新的数组中
 */
// let new2Nums = newNums.map(function (n) {
//     return n * 2;
// })

//3.需求：将所有new2Num数字相加，得到最终和
// let total = 0
// for(let n of new2Nums){
//   total += n
// }
// console.log(total);
/**
 * 3.reduce
 *    作用：对数组中的全部内容进行汇总，如相加，乘法
 *    reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue: T): T;
 *    reduce方法有两个函数
 *        第一个参数：传入的是一个回调函数
 *          previousValue：前一个值
 *          currentValue： 当前值
 *          currentIndex：  当前索引值
 *          array
 *        第二个参数：初始值
 */
//此时new2Nums = 【20,40,80,100】
// let total = new2Nums.reduce(function (preValues,currentValue) {
//   return preValues+currentValue;
// },0)
/**
 * 第一次：preValue=初始化值=0，currentValue=20
 * 第二次：preValue=20，currentValue=40
 * 第三次：preValue=60，currentValue=80
 * 第四次：preValue=140，currentValue=100
 * 最终返回值240
 */
// let total = nums.filter(function (n) {
//   return n<100;
// }).map(function (n) {
//   return n * 2;
// }).reduce(function (preValues,currentValue) {
//   return preValues + currentValue;
// },0)

let total = nums.filter(n => n<100).map(n => n * 2).reduce((pre,n) => pre+n)


























