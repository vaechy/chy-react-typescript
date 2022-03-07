const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
const path = require('path'); // 获取绝对路径用
module.exports = merge(commonConfig, {
  mode: 'development',
  devtool: 'eval-source-map',
  module: {
    rules: [],
  },
  plugins: [],
  devServer: {
    contentBase: path.resolve(__dirname, 'build'), // 开启服务访问的路径
    compress: true,
    port: 9000,
    // liveReload: true,
    open: true,
    hot: true, // 打开热更新
  },
  target: 'web', // 热更新仅用于web
});
