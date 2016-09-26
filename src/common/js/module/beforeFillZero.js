
var beforeFillZero = function(value, digit){
  value = value.toString();
  var zeroNum = digit - value.length;
  for(var i=0;i<zeroNum;i++){
    value = '0' + value;
  }
  return value;
};

module.exports = beforeFillZero;
