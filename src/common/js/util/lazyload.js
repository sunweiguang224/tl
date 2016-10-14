/**
 * 功能描述：为class带有lazy的图片提供懒加载
 */
var $ = require('../lib/jquery.js');
require('../lib/jquery.lazyload.js');

$('img.lazy').lazyload({
  threshold: 0,
  failure_limit: 0,
  event: "scroll",
  effect: "fadeIn",
  container: window,
  data_attribute: "src",
  skip_invisible: false,
  appear: null,
  load: null,
  placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
});
