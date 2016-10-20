var express = require('express');
var glob = require('glob');
var cookieParser = require('cookie-parser');
var artTemplate = require('art-template');

/*总路由*/
var server = express();

/*静态文件*/
server.use('/dev', express.static('dev'));
server.use('/dist', express.static('dist'));

/*解析cookie到req.cookies*/
server.use(cookieParser());

/*模板*/
// 注册一个模板引擎，如果res.render渲染文件的后缀是.html，则执行artTemplate为express提供的回调方法
server.engine('html', artTemplate.__express);
// 设置默认模板引擎
server.set('view engine', 'html');
// 设置模板的物理base路径
server.set('views', __dirname + '/dev/');
// 为artTemplate注册helper方法
require('./src/common/js/util/helper.js')(artTemplate);

/*加载每个页面的路由*/
var files = glob.sync('./src/module/*/router.js');
for (var i = 0; i < files.length; i++) {
  server.use(require('./' + files[i]));
}
console.log('路由已加载：' + files);

/*异常处理*/
server.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('服务器发生异常:\n' + err.stack);
});

/*启动监听*/
var http = server.listen(10001, function(){
  console.log('http服务已启动'+JSON.stringify(http.address()));
});
var http = server.listen(10002, function(){
  console.log('http服务已启动'+JSON.stringify(http.address()));
});
var http = server.listen(10003, function(){
  console.log('http服务已启动'+JSON.stringify(http.address()));
});
