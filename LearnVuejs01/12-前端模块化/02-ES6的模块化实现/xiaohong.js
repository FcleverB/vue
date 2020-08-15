import {test} from "./xiaoming.js";
//导入通过export default方式导出的内容是,不需要加{}
import add from './xiaoming.js'

let name = 'xiaohong'
let age = 11
test()
console.log('----'+add)