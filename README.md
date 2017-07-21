# Getting Started

$ npm install 

# 生成新的活动

./actinit -n (活动名字) -m (single/multi)

其中：single 表示单页模式/ multi表示多个html
# 启动服务

打开gulpfile.babel.js文件，找到config配置，把actName改成要部署的活动名，然后在命令行输入npm run dev

# 发布

npm run build


# 合并雪碧图

在gulpfile.babel.js文件，
![合成雪碧图task](https://git.oschina.net/uploads/images/2017/0720/171427_323db51b_57092.png "屏幕截图.png")
修改路径，改成要合成雪碧图的文件
然后在命令行输入 npm run gulp sprite
task执行后，会在images下生成对应的雪碧图，以及在sass下生成对应的scss文件

# useref配置说明

把要在页面中的需要注入的依赖进行配置

![页面css依赖配置](https://git.oschina.net/uploads/images/2017/0721/171641_cc5cdae4_57092.png "屏幕截图.png")

所有的css都需要进行配置，都需要经过压缩和md5命名

![页面js依赖配置](https://git.oschina.net/uploads/images/2017/0721/171826_2da1204d_57092.png "屏幕截图.png")

需要压缩混淆的js模块：fastclick-jquery
业务js模块，index.js

建议在js下的关于业务逻辑的js不要压缩混淆，否则整合的后台会看不懂