Getting Started

$ npm install 

$ npm link

＃生成新的活动

actinit -n (活动名字) -m (single/multi)

其中：single 表示单页模式/ multi表示多个html

＃启动服务

打开gulpfile.babel.js文件，找到config配置，把actName改成要部署的活动名，然后在命令行输入npm run gulp serve

#发布
npm run gulp build


