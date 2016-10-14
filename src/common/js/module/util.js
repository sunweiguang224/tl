module.exports = {
  // 生成随机小数
  randomFloat: function(min, max) {
    return Math.random() * (max - min) + min;
  },
  // 生成随机整数
  randomInt: function(min, max) {
    return Math.floor(swg.randomFloat(min, max));
  },
};
