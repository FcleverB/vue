let name = 'xiaoming'
let age = 21
let flag = true

function sum(num1,num2) {
  return num1 + num2
}
if (flag){
  console.log(sum(10, 20));
}
//1. 导出方式一
export {
  flag,sum
}
//2.导出方式二
export let num1 = 100;
export let height = 2;

//3.导出函数和类
export function test() {
  console.log('sdfsdf')
}
export class Person {
  run() {
    console.log('彭怕')
  }
}
//4.export default
const address = 'beijing'
//export default在每个文件中只能有一个
export default address

//5.统一全部导出
