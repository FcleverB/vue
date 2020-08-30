/*
* 这里可以设置一些自定义配置,最终这些配置都会和node_modules
* 中的配置合并在一起
* */
module.exports = {
  configureWebpack: {
    resolve: {
      // extensions  该属性可以配置一些默认后缀,默认配置了js,vue,json
      // 配置别名
      alias: {
        // '@': 'src'   默认已经配置了这个别名
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  }
}
