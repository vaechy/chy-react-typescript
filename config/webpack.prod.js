const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // css 代码分割插件
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin; // 打包分析
module.exports = merge(commonConfig, {
  mode: 'production',
  optimization: {
    runtimeChunk: {
      name: 'manifest',
    },
    // usedExports:true,
    splitChunks: {
      chunks: 'all',
      minSize: 10,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true,
        },
        default: {
          test: 'sss',
          minChunks: 1,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
  module: {
    rules: [],
  },
  plugins: [
    new BundleAnalyzerPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name]-[contenthash].css',
      chunkFilename: 'css/[contenthash]-chunk.css',
    }),
    new CleanWebpackPlugin(), // 打包前先清空打包路径
  ],
});
