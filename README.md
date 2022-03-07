# chy-react-typescript

基于 Webpack5 搭建的 React + Typescript 基础项目开发模板

[![node](https://img.shields.io/badge/node%40lts-v16-%2343853d)](https://github.com/nodejs/node/blob/master/doc/changelogs/CHANGELOG_V16.md#16.14.0)
[![webpack](https://img.shields.io/badge/webpack-v5-%231a6bac)](https://github.com/webpack/webpack/releases/tag/v5.70.0)
[![react](https://img.shields.io/badge/react-v17-%231a6bac)](https://github.com/facebook/react/releases/tag/v17.0.2)

支持

- Hot Module Replacement
- Code splitting
- Bundle Analysis
- ESlint/Pretter
- Typescript/TSX
- SCSS/Stylus/Less

## 目录结构

```tree
|-- .vscode                         //vscod配置文件夹
|   `-- settings.json
|-- config                          //webpack配置文件夹
|   |-- webpack.prod.js
|   |-- webpack.dev.js
|   `-- webpack.common.js
|-- public                          //公共静态文件
|   |-- index.html
|   `-- favicon.ico
|-- src-----项目入口
|   |-- components                  //组件
|   |   `-- header
|   |       |-- index.tsx
|   |       `-- index.scss
|   |-- assets                      //静态资源
|   |   `-- index.ts
|   |-- api                         //存放请求api
|   |   `-- home.ts
|   |-- utils                       //封装工具文件夹
|   |   `-- request.ts
|   |-- style                       //样式文件
|   |   |-- stylus                  //stylus文件夹
|   |   |   |-- mixins              //全局mxins文件
|   |   |   |   `-- index.styl
|   |   |   `-- index.styl
|   |   |-- scss
|   |   |   `-- app.scss
|   |   `-- less
|   |       `-- index.less
|   |-- store                       //全局状态
|   |   `-- index.ts
|   |-- router                      //路由相关
|   |   `-- index.ts
|   |-- pages                       //页面
|   |   |-- home
|   |   |   |-- index.tsx
|   |   |   `-- index.styl
|   |   `-- about
|   |       |-- index.tsx
|   |       `-- index.styl
|   |-- index.tsx
|   |-- env.d.ts                    //全局声明文件
|   `-- App.tsx
|-- postcss.config.js               //postcss配置文件
|-- .prettierrc                     //prettier配置文件
|-- .prettierignore                 //prettier排除文件
|-- .gitignore                      //Git排除文件
|-- .eslintrc.js                    //ESLint配置文件
|-- .eslintignore                   //ESlint排除文件
|-- .babelrc                        //babel配置文件
|-- tsconfig.json                   //ts配置文件
|-- package.json
|-- package-lock.json
|-- LICENSE                         //开源协议文件
|-- README.md
```
