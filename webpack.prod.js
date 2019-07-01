const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = merge(common, {
  // 根据不同的执行环境配置不同的入口
  mode: 'production',
  entry: './src/index.js',
  devtool: '#source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css'
    }),
    new CleanWebpackPlugin()
  ],
  // optimization: {
  //   runtimeChunk: 'single',
  //   splitChunks: {
  //     chunks: 'all', // 这表示将选择哪些块进行优化。当提供一个字符串，有效值为all，
  //     // async和initial。提供all可以特别强大，因为这意味着即使在异步和非异步块之间也可以共享块。
  //     minSize: 30000, // 要生成的块的最小大小（以字节为单位）
  //     maxSize: 0,
  //     minChunks: 1, // 分割前必须共享模块的最小块数
  //     maxAsyncRequests: 5, // 按需加载时的最大并行请求数
  //     maxInitialRequests: 3, // 入口点处的最大并行请求数
  //     automaticNameDelimiter: '~', // 允许您指定用于生成的名称的分隔符
  //     name: true, // 拆分块的名称。提供true将根据块和缓存组密钥自动生成名称。
  //     cacheGroups: {
  //       // 缓存组可以继承和/或覆盖任何选项splitChunks
  //       // default: {
  //       //   chunks: 'initial',
  //       //   minChunks: 2
  //       // },
  //       vendor: {
  //         test: /[\\/]node_modules[\\/]/,
  //         chunks: 'all',
  //         name: 'vendors',
  //         // filename: '[name].bundle.js',  // 写死文件名
  //         priority: 10,
  //         enforce: true // 讲述的WebPack忽略splitChunks.minSize，splitChunks.minChunks，
  //         // splitChunks.maxAsyncRequests和splitChunks.maxInitialRequests选项，只为这个高速缓存组创建块。
  //       }
  //     }
  //   }
  // }
})
