var moduleA = (function () {
  // 导出的对象
  var obj = {}
  // 小明
  var name = '小明'
  var age = 22
  function sum(num1, num2) {
    return num1 + num2
  }
  var flag = true
  if (flag) {
    console.log(sum(10, 20));
  }
  obj.flag = flag;
  obj.sum = sum;
  return obj
})()

// 小明
// var name = '小明'
// var age = 22
//
// function sum(num1, num2) {
//   return num1 + num2
// }
//
// var flag = true
//
// if (flag) {
//   console.log(sum(10, 20));
// }
//  Common JS语法
/*
* 目前这种语法是没法进行解析的,因为它需要一些底层的支撑来解析这种语法
* 后面学webpack的时候,会使用node来帮助解析
* */
// module.exports = {
//   flag: flag,
//   sum: sum
// }


