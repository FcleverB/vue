//通过模块化方式去写JS代码
//1.使用CommonJS贵方
const {add,mul} = require('./mathUtils.js')

console.log(add(20, 30));
console.log(mul(10, 10));
//2.使用ES6的模块化规范
import {name,age} from "./info.js";

console.log(name);
console.log(age);