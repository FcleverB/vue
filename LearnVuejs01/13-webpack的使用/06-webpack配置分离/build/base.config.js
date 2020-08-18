/*
* 使用node的语法来使用绝对路径
* */
// require方式导入包的时候,默认从node_module下开始查找
const path = require('path');   //会自动在node包中查找
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const webpack = require('webpack')  //版权信息,将版权信息打印在打包后的文件中
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // 入口:可以是字符串/数组/对象,本次中入口只有一个,所以写一个字符串就行了
  entry: './src/main.js',
  // 出口:一般是一个对象,至少至少包含两个属性,path表示输出路径,filename表示输出的文件名
  output: {    //出口,打包后输出文件的位置
    //动态获取绝对路径
    // __dirname是一个全局变量,保存着当前文件所在的文件路径,继续拼接一个字符串,最终形成一个路径
    path: path.resolve(__dirname, '../dist'),   //path必须要写绝对路径,否则会报错
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