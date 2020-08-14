# demo



## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### 使用

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### 目录说明

- config 配置信息以及插件信息

- app 项目主目录
  - controller 接口逻辑编写，按功能分组 如首页 ，产品等等。
  - public 静态文件 比如模版引擎的静态文件放置
  - service 公共接口逻辑的一些抽取
  - view 模版引擎文件 配合插件 egg-view-ejs 一起用
  - router.js 所有接口的路由入口
