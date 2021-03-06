











## 用postman 测接口

```js
http://localhost:3000/geo/getPosition
http://localhost:3000/geo/menu
http://localhost:3000/geo/province
http://localhost:3000/search/top?input=火锅&city=天津&sign=a3c9fe0782107295ee9f1709edd15218
http://localhost:3000/search/hotPlace?city=天津&sign=a3c9fe0782107295ee9f1709edd15218
http://localhost:3000/category/crumbs?city=北京
http://localhost:3000/search/resultsByKeywords?city=广州&keyword=广州流溪河国家森林公园
```



----------------------

# meituan

> My superb Nuxt.js project

## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).

跑环境 package.json, 执行命令 npm install or yarn install

```json
{
  "name": "app",
  "version": "1.0.0",
  "description": "My phenomenal Nuxt.js project",
  "author": "haiyang",
  "private": true,
  "scripts": {
    "dev": "cross-env NODE_ENV=development nodemon server/index.js --watch server --exec babel-node",
    "build": "nuxt build",
    "start": "cross-env NODE_ENV=production node server/index.js --exec babel-node",
    "generate": "nuxt generate",
    "lint": "eslint --ext .js,.vue --ignore-path .gitignore .",
    "precommit": "npm run lint"
  },
  "dependencies": {
    "@nuxtjs/axios": "5.0.0",
    "axios": "0.18.0",
    "babel-preset-es2015": "6.24.1",
    "cross-env": "5.2.0",
    "crypto-js": "3.1.9-1",
    "element-ui": "2.4.6",
    "js-pinyin": "0.1.9",
    "koa": "2.5.2",
    "koa-bodyparser": "4.2.1",
    "koa-generic-session": "2.0.1",
    "koa-json": "2.0.2",
    "koa-passport": "4.1.1",
    "koa-redis": "3.1.2",
    "koa-router": "7.4.0",
    "lodash": "4.17.11",
    "mongoose": "5.3.0",
    "node-sass": "4.9.3",
    "nodemailer": "4.6.8",
    "nuxt": "2.0.0",
    "passport-local": "1.0.0",
    "sass-loader": "7.1.0"
  },
  "devDependencies": {
    "babel-eslint": "8.2.1",
    "eslint": "3.19.0",
    "eslint-loader": "2.0.0",
    "eslint-plugin-vue": "4.0.0",
    "nodemon": "1.11.0"
  }
}

```



# 一

## 初始化项目

```bash
npx create-nuxt-app meituan

? Project name meituan
? Project description My stupendous Nuxt.js project
? Use a custom server framework koa
? Choose features to install axios
? Use a custom UI framework element-ui
? Use a custom test framework none
? Choose rendering mode Universal
? Author name wudiufo
? Choose a package manager npm
```

```bash
To get started:

        cd meituan
        npm run dev

  To build & start for production:

        cd meituan
        npm run build
        npm start
```

#### 兼容es6语法，配置

```js
在package.json中，在dev和start后加 `--exec babel-node`
如下：
"scripts": {
    "dev": "cross-env NODE_ENV=development nodemon server/index.js --watch server --exec babel-node",
    "build": "nuxt build",
    "start": "cross-env NODE_ENV=production node server/index.js --exec babel-node",
    "generate": "nuxt generate"
  },
```

执行命令，安装 `npm install babel-preset-es2015 babel-cli babel-core`

创建 `.babelrc`  文件

```json
{
  "presets": ["es2015"]
}
```

支持 sass 编译，安装 

```bash
npm i sass-loader node-sass
```

配置 nuxt.config.js

```js
/*
   ** Global CSS
   */
  css: [
    'element-ui/lib/theme-chalk/reset.css',
    'element-ui/lib/theme-chalk/index.css',
    '~assets/css/main.css'
  ],
      
   /*
   ** Build configuration
   */
  build: {
    transpile: [/^element-ui/],

    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
    cache: true   //开启缓存 
```

# 二

## 首页开发

#### 首页需求分析（模板设计）

![](./imgs/360截图20190323230901440.jpg)





#### 首页需求分析（数据结构设计）

![](./imgs/360截图20190325191810183.jpg)

![](./imgs/360截图20190325192150573.jpg)

### 腾讯邮箱服务设置，用于通过邮箱接收邮箱验证码

![](./imgs/360截图20190325192240550.jpg)

### 服务端接口设计（用户类接口） `server/interface/users.js`

![](./imgs/360截图20190325192638189.jpg)



```bash
操作数据库
npm i mongoose
操作接口
npm i koa-router koa-redis nodemailer
npm i koa-bodyparser koa-generic-session koa-json axios koa-passport passport-local
加密
npm i crypto-js
```

连接redis数据库

```bash
redis-server
```

### 城市服务类接口  `server/interface/geo.js`

![](./imgs/360截图20190326165856164.jpg)

### 查询类接口  `server/interface/search.js`

![](./imgs/360截图20190326170044530.jpg)

## 导入数据到 mongodb

```bash
//进入到 db 目录，把准备好的数据导入到数据库
cd db 
mongoimport -d student -c areas areas.dat
mongoimport -d student -c category category.dat
mongoimport -d student -c cities cities.dat
mongoimport -d student -c maps maps.dat
mongoimport -d student -c menus menus.dat
mongoimport -d student -c pois pois.dat
mongoimport -d student -c provinces provinces.dat
mongoimport -d student -c regions regions.dat
mongoimport -d student -c topsearches topsearches.dat
mongoimport -d student -c position position.dat
mongoimport -d student -c resultsbykeywords resultsbykeywords.dat
mongoimport -d student -c products products.dat

```



![](./imgs/360截图20190326170147242.jpg)

![](./imgs/360截图20190326173542095.jpg)

### 线上接口

![](./imgs/360截图20190326180530720.jpg)



http://cp-tools.cn/sign

```bash
npm i lodash
npm i js-pinyin
```

### 详情页开发需求分析    `pages/detail.vue`  ,`components/detail` 

![](./imgs/360截图20190329195111426.jpg)

![](./imgs/360截图20190329202141815.jpg)

### 购物车页面需求分析     `pages/cart.vue`  ,`components/cart`

![](./imgs/360截图20190330204014768.jpg)

### 订单页面需求分析  `pages/order.vue`, `components/order`

![](./imgs/360截图20190330204253430.jpg)

![](./imgs/360截图20190330204451939.jpg)

![](./imgs/360截图20190330204641731.jpg)

-----------------------------------------------

# 完成运行效果图

![](./imgs/首页.png)

![](./imgs/register.png)

![](./imgs/login.png)

![](./imgs/products.png)

![](./imgs/detail.png)

![](./imgs/cart.png)

![](./imgs/order.png)

![](./imgs/changecity.png)

