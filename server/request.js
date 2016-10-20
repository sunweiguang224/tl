/*
 发送http请求模块
 */
var http = require('http');
var url = require('url');
var qs = require('querystring');

/*
 调用示例：
 request.get({
   url: 'http://api.k.sohu.com/api/search/v6/hotwords.go',
   param: {
   a: 1,
   b: '二'
   },
   success: function (data) {
   console.log('返回数据：' + data);
   }
 });
 */
module.exports = {
  // get方法
  get: function (options) {
    var location = url.parse(options.url);
    // 设置请求
    var req = http.request({
      method: "get",
      host: location.hostname,
      port: location.port,
      path: function () {
        // param参数添加到url中
        var path = location.path;
        path += path.indexOf('?') === -1 ? '?' : '&';
        path += qs.stringify(options.param);
        return path;
      }()
    }, function (res) {
      res.setEncoding('utf8');
      res.on('data', function (data) {
        options.success(JSON.parse(data));
      })
    });
    req.on('error', function (err) {
      console.error('get请求出错:' + err.message);
    });
    req.end();
  },
  // post方法
  post: function (options) {
    var location = url.parse(options.url);
    // qustring与param合并，生成body数据
    var queryObj = qs.parse(location.query);
    for (var i in queryObj) {
      options.param[i] = queryObj[i];
    }
    var bodyData = JSON.stringify(options.param);
    // 设置请求
    var req = http.request({
      method: "post",
      host: location.hostname,
      port: location.port,
      path: location.pathname,
      headers: {
        'Content-Type': 'application/json',	// 如果content格式为a=1&b=2，则应设置"Content-Type": 'application/json'
        'Content-Length': bodyData.length
      }
    }, function (res) {
      res.setEncoding('utf8');
      res.on('data', function (data) {
        options.success(JSON.parse(data));
      })
    });
    req.on('error', function (err) {
      console.error('get请求出错:' + err.message);
    });
    req.write(bodyData + '\n');
    req.end();
  }
};
