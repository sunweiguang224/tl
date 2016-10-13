/**
 * is模块，包含常用的判断方法
 */
/* 一些常用正则，待写成方法
 "*":/[\w\W]+/,
 "*6-16":/^[\w\W]{6,16}$/,
 "n":/^\d+$/,
 "n6-16":/^\d{6,16}$/,
 "s":/^[\u4E00-\u9FA5\uf900-\ufa2d\w\.\s]+$/,
 "s6-18":/^[\u4E00-\u9FA5\uf900-\ufa2d\w\.\s]{6,18}$/,
 "p":/^[0-9]{6}$/,
 "m":/^13[0-9]{9}$|14[0-9]{9}|15[0-9]{9}$|18[0-9]{9}$/,
 "e":/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
 "url":/^(\w+:\/\/)?\w+(\.\w+)+.*$/
 "chinese": /\u4E00-\u9FA5/
 */
module.exports = {
  isEmail: function(value){
    return /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(value);
  },
  isMobile: function(value){
    return /^13[0-9]{9}$|14[0-9]{9}|15[0-9]{9}$|18[0-9]{9}$/.test(value);
  },
  isQQ: function(value){
    return /^\d{5,13}$/.test(value);
  },
  // 判断中文
  isChinese: function(name){
    return (name && name.toString().match(/^[\u4E00-\u9FA5\uf900-\ufa2d]+$/)) ? true : false;
  },
  isString: function(str){
    return typeof str === "string" || str instanceof String;
  },
  isArray: function(o){
    //兼容性问题（o为undefined、null时报错）
    //return o.constructor == Array;

    //兼容性问题（o不能为跨iframe传递的数组对象）
    //return o instanceof Array;

    //兼容性最好
    /*
     ECMA-262 写道
     Object.prototype.toString( ) When the toString method is called, the following steps are taken:
     1.Get the [[Class]] property of this object.
     2.Compute a string value by concatenating the three strings “[object “, Result (1), and “]”.
     3.Return Result (2)
     上面的规范定义了Object.prototype.toString的行为：首先，取得对象的一个内部属性[[Class]]，然后依据这个属性，返回一个类似于"[object Array]"的字符串作为结果（看过ECMA标准的应该都知道，[[]]用来表示语言内部用到的、外部不可直接访问的属性，称为“内部属性”）。利用这个方法，再配合call，我们可以取得任何对象的内部属性[[Class]]，然后把类型检测转化为字符串比较，以达到我们的目的。还是先来看看在ECMA标准中Array的描述吧。
     ECMA-262 写道
     new Array([ item0[, item1 [,…]]])
     he [[Class]] property of the newly constructed object is set to “Array”.
     */
    return Object.prototype.toString.call(o) === "[object Array]";
  },
  isIE678: function(){
    var obj = {
      toString: function(){}
    };
    for(var i in obj){
      if(i == "toString"){
        return false;
      }
    }
    return true;
  },
};
