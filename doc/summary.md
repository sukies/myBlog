## 一、安装
### 1.安装vue-cli


```
全局安装vue-cli
$ npm install --global vue-cli
# 创建一个基于 webpack 模板的新项目
$ vue init webpack my-project
# 进入项目
$ cd my-project
# 安装依赖
$ npm install
# 启动项目
$ npm run dev
```
### 2.安装less
```
$ npm install --save-dev less less-loader
```
使用方式
```
<style lang="less">
  @import "./assets/common.less";
</style>
```
```
<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
```
webstorm编辑器，页面中的less文件会提示错误,添加rel="stylesheet/less"属性

```
<style scoped lang="less" rel="stylesheet/less"></style>
```
### 4.安装axios
>文档地址：https://github.com/axios/axios
```
npm install --save-dev axios
```
```
axios.get('/user', {
    params: {
      ID: 12345
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
```
### 3.修改缩进方式
根目录.editorconfig文件
```
indent_size = 4
```
webpack.base.conf.js文件设置，把下面这段注释掉就好了
```
const createLintingRule = () => ({
  // test: /\.(js|vue)$/,
  // loader: 'eslint-loader',
  // enforce: 'pre',
  // include: [resolve('src'), resolve('test')],
  // options: {
  //   formatter: require('eslint-friendly-formatter'),
  //   emitWarning: !config.dev.showEslintErrorsInOverlay
  // }
})
```
## 二、新建路由
### 1.目录主要介绍
```
buile//webpack配置信息
src//开发环境内容
--components//vue组件
--router
  --index.js//路由配置信息
--App.vue//入口html页面
--main.js//入口页面
static//打包后内容
```
### 2.新建页面
在components文件夹下新建Index.vue,页面内容如下
```
<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <h2>Essential Links</h2>
    </div>
</template>
<script>
    export default {
        name: 'Index',//需要与路由配置的name统一
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>
<style scoped lang="less" rel="stylesheet/less">
</style>

```

### 3.添加路由
在router/index.js页面添加如下内容

```
import Index from '@/components/Index'
```
```
        {
            path: '/',
            name: 'Index',
            component: Index
        },
```


