react项目脚手架 
===============

使用 webpack2.2.1 + react + redux + es6 的组件化前端项目
--------------------------------------------------------


> 开发时的环境

- [x] win10
- [x] Node v6.9.5
- [x] NPM v3.10.10

> 快速开始

```
git clone git@github.com:wyyew/show.git
cd show
$ npm install
$ npm start
```

> windows 兼容性问题

* 因为使用了 node-sass ，需要先安装 [Microsoft Windows SDK for Windows 7 and .NET Framework 4
](https://www.microsoft.com/en-us/download/details.aspx?id=8279)

> 项目结构规划

* 每个模块相关的 css、img、js 文件都放在一起，比较直观，删除模块时也会方便许多。测试文件也同样放在一起，哪些模块有没有写测试，哪些测试应该一起随模块删除，一目了然。

> build
>
> > webpack.config.js                # 公共配置
>
> > webpack.dev.js                   # 开发配置
>
> > webpack.release.js              # 发布配置
>
> docs                                # 项目文档
>
> node_modules  
>
> src                                 # 项目源码
>
> > conf                            # 配置文件
>
> > modules                           # 页面目录
>
> > > page1  
>
> > > > index.js                # 页面逻辑
>
> > > > index.scss              # 页面样式
>
> > > > img                     # 页面图片
>
> > > > > xx.png          
>
> > > __tests__               # 测试文件
>
> > > > xx.js
>
> > > app.html                    # 入口页
>
> > > app.js                      # 入口JS  在pages目录下请不要起与这个文件同名的文件夹名（app)
>
> > components                      # 组件目录
>
> > > loading
>
> > > > index.js
>
> > > > index.scss
>
> > > > __tests__   
>
> > > > > xx.js
>
> > static                           # 静态文件夹 
>
> > > js
>
> > > > actions
>
> > > > >   index.js
>
> > > > >   __tests__   
>
> > > > > >  xx.js
>
> > > > reducers 
>
> > > > > index.js
>
> > > > >  __tests__ 
>
> > > > > > xx.js
>
> > > > xx.js   
>
> > > css                             # 公共CSS目录
>
> > > > common.scss
>
> > > img                             # 公共图片目录
>
> > > > xx.png
>
> tests                               # 其他测试文件
>
> package.json                        
>

> 要完成的功能

* 编译 jsx、es6、scss 等资源
* 多页面支持
* 自动引入静态资源到相应 html 页面
* 实时编译和刷新浏览器
* 按指定模块化规范自动包装模块
* 自动给 css 添加浏览器内核前缀
* 按需打包合并 js、css
* 压缩 js、css、html
* 图片路径处理、压缩、CssSprite
* 对文件使用 hash 命名，做强缓存
* 语法检查
* 全局替换指定字符串
* 本地接口模拟服务
* 发布到远端机

* 添加对antd的引用并对其做按需加载的配置
