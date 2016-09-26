/**
 * 页面: 首页
 * 功能描述: 首页
 * 作者: swg
 */
var helper = require('helper');
var setting = require('setting');
//var ua = require('ua');
var util = require('util');
var _ = require('underscore');
var path = require('../../../common/js/path.js');
var dateFormat = require(path.module + '/dateFormat.js');

function Biz() {
	var $body = $('body');
	//var tpl = require('../tpl/demo.tpl')({a: Date.now()});
	//var css = require('../css/demo.scss');
	//var json = require('../json/demo.json');
  dateFormat(new Date(), 'HH:mm:ss')
}
new Biz();
