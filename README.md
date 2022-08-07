# chy-react-typescript

基于 Webpack5 搭建的 React + Typescript 基础项目开发模板

[![node](https://img.shields.io/badge/node%40lts-v16-%2343853d)](https://github.com/nodejs/node/blob/master/doc/changelogs/CHANGELOG_V16.md#16.14.0)
[![webpack](https://img.shields.io/badge/webpack-v5-%231a6bac)](https://github.com/webpack/webpack/releases/tag/v5.70.0)
[![react](https://img.shields.io/badge/react-v17-%231a6bac)](https://github.com/facebook/react/releases/tag/v17.0.2)
[![typescript](https://img.shields.io/badge/typescript-v4.6.2-%231a6bac)](https://reactrouter.com/docs/en/v6)
[![react-router-dom](https://img.shields.io/badge/react--router--dom-v6-%231a6bac)](https://reactrouter.com/docs/en/v6)

支持

- Hot Module Replacement
- Code splitting
- Bundle Analysis
- ESlint/Pretter
- Typescript/tsx
- SCSS/Stylus/Less
- Commitlint/Husky

## 目录结构

```tree
|-- .vscode                         //vscod配置文件夹
|   `-- settings.json
|-- config                          //webpack配置文件夹
|   |-- webpack.prod.js             //生产配置
|   |-- webpack.dev.js              //开发配置
|   `-- webpack.common.js           //公共配置
|-- public                          //静态文件
|   |-- index.html
|   `-- favicon.ico
|-- src-----项目入口
|   |-- components                  //公共组件
|   |   `-- header
|   |       |-- index.tsx
|   |       `-- index.scss
|   |-- assets                      //静态资源
|   |   `-- index.ts
|   |-- api                         //存放请求api
|   |   `-- home.ts
|   |-- utils                       //工具库文件夹
|   |   `-- request.ts
|   |-- style                       //存放mixin公共样式文件夹
|   |   |-- stylus
|   |   |   `-- mixins.styl          //全局mxins文件
|   |   |-- scss
|   |   |   `-- mixins.scss
|   |   `-- less
|   |       `-- mixins.less
|   |-- store                       //全局状态
|   |   `-- index.ts
|   |-- router                      //路由配置
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
|   |-- App.css                     //App样式文件
|   `-- App.tsx                     //App组件
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
