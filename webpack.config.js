/**
 * Created by weiguangsun on 2016/4/20.
 */
import Path from './path.js';
import fs from 'fs';
import webpack from 'webpack';
import glob from 'glob';
import path from 'path';

module.exports = {
//export default {
	resolve: {
    // 为src/common/js/*/*.js文件提供别名
		alias: (function(){
      var alias = {};
      var filePaths = glob.sync(Path.srcRoot + '/common/js/*/*.js');
      for(var i in filePaths) {
        var filePath = filePaths[i];
        alias[path.basename(filePath)] = __dirname+'/'+filePath;
      }
      console.log(alias);
      return alias;
    })()
	},
  // 业务js
	entry: function(path) {
		var entry = {
			//commons: ['helper', 'setting', 'util']		// 此处指定的公共模块会被打包到common.js
		};
		var filePaths = glob.sync(path);
		for (var i in filePaths) {
			var filePath = filePaths[i];		// 读取文件路径
			var moduleName = filePath.replace(Path.srcRoot+'/', '').replace('.js', '');	// 文件编译后路径
			entry[moduleName] = './' + filePath;
		}
    console.log(entry);
		return entry;
	}(Path.src.js.module),
  // 插件
  plugins: [
    // 将公共代码抽离出来合并为一个文件
    new webpack.optimize.CommonsChunkPlugin({
      name: "commons",
      filename: 'common/js/common.bundle.js',
      minChunks: 2
    }),
    /*
    * 提供全局的变量，在模块(entry指定的)中使用无需用require引入
    * 此处把jQuery变量提供给jquery-lazyload（因jquery-lazyload内部没有require('jquery')）
    */
    //new webpack.ProvidePlugin({
    //  jQuery: "jquery.js",
    //  $: "jquery.js"
    //}),
  ],
	output: {
		filename: "[name].bundle.js"
	},
	module: {
		loaders: [
			{test: /\.css$/, loaders: ['style', 'css']},	// style-loader,css-loader共同作用于.css文件。 前者将 css 文件以 <style></style> 标签插入 <head> 头部，后者负责解读、加载 CSS 文件。
			{test: /\.scss$/, loader: 'style!css!sass'},	// sass-loader 加载sass文件。等价于上面数组写法。
			{test: /\.tpl$/, loader: "tmodjs"},	// artTemplate的webpack版
			{test: /\.json$/, loader: "json"},	// json-loader，.json一般用于放假数据
			//{test: /\.png$/, loader: "url-loader?limit=102400" }	//引起gulp-uglify报错，原因不详// require100KB以下的图片将得到base64编码
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
		]
	},
};
