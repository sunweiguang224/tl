/**
 * 页面: 
 * 功能描述: 
 * 作者: swg
 */
var lazyload = require('lazyload');
var $ = require('jquery');
var path = require('path');
var helper = require('helper');
var uuid = require('uuid');

function Biz() {
	var $body = $('body');
	//var tpl = require('../tpl/demo.tpl')({a: Date.now()});
	//var css = require('../css/demo.scss');
	//var json = require('../json/demoon');

}
new Biz();


var param = require('param');

//console.info(param.get('wef'))
console.info(param.toObj())
console.info(param.toStr(param.toObj()));

console.info(uuid.create());
