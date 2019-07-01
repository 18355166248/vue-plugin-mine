const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  // 根据不同的执行环境配置不同的入口
  mode: 'development',
  entry: './src/main.js',
  devtool: '#eval-source-map',
  devServer: {
    hot: true
  }
})
