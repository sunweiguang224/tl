/**
 * 功能描述：为artTemplate提供工具方法
 */
var template = require('tmodjs-loader/runtime');
var dateFormat = require('../module/dateFormat.js');

/**
 * 日期格式化
 * 用法：{{时间戳 | dateFormat:'yyyy-MM-dd hh:mm:ss SSS'}}
 */
template.helper('dateFormat', function (timestamp, pattern) {
  return dateFormat(timestamp, pattern);
});

module.exports = template;
