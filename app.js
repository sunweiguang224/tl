var express = require('express');
var glob = require('glob');
var cookieParser = require('cookie-parser');
var template = require('art-template');

// 总路由
var app = express();

// 静态文件
app.use('/static', express.static('public'));

// 解析cookie到req.cookies
app.use(cookieParser());

// 模板
app.engine('.html', template.__express);
app.set('view engine', 'html');
app.set('views', __dirname + '/module/');
require('./util/templateHelper.js')(template);

// 模块路由
var files = glob.sync('./module/*/router.js');
for (var i = 0; i < files.length; i++) {
	app.use(require('./' + files[i]));
}

// 404页面
app.get('*', function(req, res, next){
	res.sendfile(__dirname + '/module/404/view/404.html');
});

// 异常处理
app.use(function(err, req, res, next) {
	console.error(err.stack);
	res.status(500).send('服务器发生异常:\n' + err.stack);
});

// 启动监听
var server = app.listen(20001, function(){
	console.log('http服务已启动'+JSON.stringify(server.address()));
});
