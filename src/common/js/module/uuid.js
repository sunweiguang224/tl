var dateFormat = require('./dateFormat.js');

module.exports = {
  create: function(){
    var time = dateFormat(new Date(), 'yyyy-MM-dd_HH:mm:ss_SSS_');
    // 10位随机数
    var random = Math.floor(Math.random() * Math.pow(10, 10));
    return time + random;
  }
};
