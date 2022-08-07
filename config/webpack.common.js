/** 公共的webpack配置文件 **/
const path = require('path'); // 获取绝对路径用
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 动态生成html插件
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // css 代码分割插件
const devMode = process.env.NODE_ENV !== 'production';
const CopyPlugin = require('copy-webpack-plugin');
module.exports = {
  entry: [
    './src/index.tsx', // 项目入口
  ],
  output: {
    path: path.resolve(__dirname, '../dist'), // 将打包好的文件放在此路径下，dev模式中，只会在内存中存在，不会真正的打包到此路径
    // publicPath: PUBLIC_PATH, // 文件解析路径，index.html中引用的路径会被设置为相对于此路径
    filename: 'js/[name].bundle.js', // 编译后的文件名字
    // chunkFilename: "js/[name]_chunk.js",
    environment: {
      arrowFunction: false, // webpack5 打包后是箭头函数,ie浏览器无法识别,babel无法转换,需要关闭配置
    },
  },
  module: {
    rules: [
      // babel编译
      {
        test: /\.(js|tsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      // .css 解析
      {
        test: /\.css$/,
        use: [devMode ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
      // .less 解析
      {
        test: /\.less$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          {
            loader: 'less-loader',
            options: {
              additionalData: `@import "${path.resolve(__dirname, '../src/style/less/mixins.less"')};`,
              lessOptions: {
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
      // .scss 解析
      {
        test: /\.scss$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
          },
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              //导入全局mixins
              additionalData: '@import "src/style/scss/mixins.scss";',
              sassOptions: {
                // 禁止解析 utf-8 以外的文件
                charse: false,
              },
            },
          },
        ],
      },
      // .styl 解析
      {
        test: /\.styl$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          {
            loader: 'stylus-loader',
            options: {
              // additionalData: '@import "src/style/stylus/mixins.scss";',
              stylusOptions: {
                // 引入全局mixin
                import: [path.resolve(__dirname, '../src/style/stylus/mixins.styl')],
              },
            },
          },
        ],
      },
      // 文件解析
      {
        test: /\.(eot|woff|otf|svg|ttf|woff2|appcache|mp3|mp4|pdf)(\?|$)/,
        include: path.resolve(__dirname, 'src'),
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/[name].[hash:4].[ext]', // 打包的路径和名字
            },
          },
        ],
      },
      // 图片解析
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        include: path.resolve(__dirname, 'src'),
        use: [
          {
            loader: 'url-loader', // 必须依赖file-loader
            options: {
              limit: 8192, // 小于8192字节使用base64编码打包
              name: 'assets/[name].[hash:4].[ext]', // 打包图片的名字
            },
          },
        ],
      },
      // wasm文件解析
      {
        test: /\.wasm$/,
        include: path.resolve(__dirname, 'src'),
        type: 'webassembly/experimental',
      },
      // xml文件解析
      {
        test: /\.xml$/,
        include: path.resolve(__dirname, 'src'),
        use: ['xml-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      // filename: "index.html", //生成的html存放路径，相对于 output.path
      // favicon: './favicon.ico', // 自动把根目录下的favicon.ico图片加入html
      template: './public/index.html', // html模板路径
    }),
    new CopyPlugin({
      patterns: [
        {
          context: 'public',
          from: '*',
          to: '../dist',
          toType: 'dir',
          globOptions: {
            dot: true,
            gitignore: true,
            ignore: ['**/index.html'],
          },
        },
      ],
    }),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', 'jsx', 'css', '.styl', '.scss', '.less', '.json'], // 后缀名自动补全
    alias: {
      '@': path.resolve(__dirname, '../src'), // 设置别名
    },
  },
};
