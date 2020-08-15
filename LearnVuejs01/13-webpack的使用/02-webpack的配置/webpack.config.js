/*
* 使用node的语法来使用绝对路径
* */
const path = require('path');   //会自动在node包中查找

module.exports = {
  // 入口:可以是字符串/数组/对象,本次中入口只有一个,所以写一个字符串就行了
  entry: './src/main.js',
  // 出口:一般是一个对象,至少至少包含两个属性,path表示输出路径,filename表示输出的文件名
  output: {    //出口,打包后输出文件的位置
    //动态获取绝对路径
    // __dirname是一个全局变量,保存着当前文件所在的文件路径,继续拼接一个字符串,最终形成一个路径
    path: path.resolve(__dirname, 'dist'),   //path必须要写绝对路径,否则会报错
    filename: 'bundle.js'
  }
}