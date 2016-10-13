/**
 * 页面: 
 * 功能描述: 
 * 作者: swg
 */
var lazyload = require('lazyload.js');
var $ = require('jquery.js');
var path = require('path.js');
var helper = require('helper.js');

function Biz() {
	var $body = $('body');
	//var tpl = require('../tpl/demo.tpl')({a: Date.now()});
	//var css = require('../css/demo.scss');
	//var json = require('../json/demo.json');

}
new Biz();


var param = require('param.js');

//console.info(param.get('wef'))
console.info(param.toObj())
console.info(param.toStr(param.toObj()))
