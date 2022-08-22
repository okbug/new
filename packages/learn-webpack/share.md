# 主题

- Webpack项目的基本使用
- Webpack是如何处理模块化的
- Webpack是如何使用各种loader的
- Loader是如何实现的
- Webpack的构建流程
- Webpack有哪些性能优化的点



## 基本使用
Webpack5是可以开箱即用的
`yarn add webpack webpack-cli -D`
不安装 webpack-dev-server 主要内容是打包相关

新建src/index.js 写入代码
直接运行 `npx webpack`
或是
`npm set-script build webpack`
如果需要开发者模式的话就需要`npx webpack dev`
在零配置的情况下可以直接打包文件

在项目的根目录下新建一个 webpack.config.js 导出一个对象
Webpack会自动将其识别为配置文件
或者可以指定文件做为配置文件:
`npx webpack --config webpack.prod.js --mode=production`

配置文件如何写
首先需要指定入口、模式、出口等。

```js
const config = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: resolve('dist'), // 入口是相对路径，出口是绝对路径
        filename: 'main.js', // 指定的文件名
    }
}

module.exports = config
```


Webpack默认是可以解析JS、JSON的(新版本支持更多内容)

如果要解析其他文件 需要使用各种loader

### loader的使用

```js
config.module = {
    rules: [
        {
            test: /\.js/$,
            use: [], // 这里可以是数组 数组里面可以是字符串 也可以是对象
        }
    ]
}
```

### Loader的执行顺序



----

### Loader的实现

> Loader其实就是一个函数
接受的参数是一个字符串，是源代码的文本
需要返回的也是字符串，loader在这中间做了许多的处理
举个例子
```js
config.module.use[0].use =  [{
    loader: path.resolve('my-first-loader')
}]


// my-first-loader.js

function loader(sourceCode) {
    return sourceCode + `;console.log("ok")`;
}

module.exports = loader;
```

### babel-loader的使用

`yarn add babel-loader @babel/core @babel/preset-env -D`


```js
loader: [{
    loader: 'babel-loader',
    options: {
        preset: ["@babel/preset-env"] // 如果要支持JSX 要安装 @babel/preset-react
    }
}]
```

## 在自己的loader中使用babel-loader

```js
// my-first-loader.js
const babel = require('@babel/core');

/**
 * 使用普通函数 可以使用this
 * 因为该函数在Webpack中调用
 * 如果使用箭头函数 this就是这个模块
 */
function loader(source) {
  // options 就是在config中的options
  const options = this.getOptions();
  const { code } = babel.transformSync(source, options);

  return code;
}
module.exports = loader;
```


## 自定义babel
上面是直接使用了babel的preset-env
如何写一个babel的plugin 并且支持代码的处理呢？

使用 @babel/core 就可以实现该效果

### 示例代码
使用babel插件将ES6中的Class转为ES5的方法
```js
const core = require("@babel/core");
const class2function = require("@babel/plugin-transform-classes");

function loader(source) {
    const { code } = core.transform(source, {
        plugins: [class2function],
    });

    return code;
}

module.exports = loader
```