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

# usemin配置说明

![usemin注入css配置](https://git.oschina.net/uploads/images/2017/0720/172610_e972659e_57092.png "屏幕截图.png")

build后面跟着的是gulpfile中usemin配置的key， 路径就是生成的相对路径

![usemin配置](https://git.oschina.net/uploads/images/2017/0720/174149_dc0b4710_57092.png "屏幕截图.png")



