//通过模块化方式去写JS代码
//1.使用CommonJS贵方
const {add,mul} = require('./js/mathUtils.js')

console.log(add(20, 30));
console.log(mul(10, 10));
//2.使用ES6的模块化规范
import {name,age} from "./js/info.js";

console.log(name);
console.log(age);

//3. 依赖css文件,后面对main.js打包的时候也会将依赖的css文件打包
require('./css/normal.css')

//4. less
require('./css/special.less')
