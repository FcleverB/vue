/*
* 生产环境
* */
const uglifyjswebpackplugin = require('uglifyjs-webpack-plugin')  //js文件压缩
const webpackMerge = require('webpack-merge')
const baseConfig = require('./base.config')

module.exports = webpackMerge(baseConfig,{
  plugins: [
    new uglifyjswebpackplugin()
  ]
})