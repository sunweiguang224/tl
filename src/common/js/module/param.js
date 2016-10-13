/**
 * url参数处理模块
 */
module.exports = {
  toObj: function(searchStr){
    var obj = {};
    searchStr = searchStr || location.search.split('?')[1];
    if(searchStr){
      var paramMapArr = searchStr.split("&");
      for(var i in paramMapArr){
        var paramMap = paramMapArr[i].split("=");
        obj[paramMap[0]] = paramMap[1] || '';
      }
    }
    return obj;
  },
  toStr: function(searchObj){
    var str = '';
    if(searchObj){
      for(var i in searchObj){
        str += '&'+i+'='+searchObj[i];
      }
    }
    return str.substr(1);
  },
  getAll: function(url){
    url = url || location.href;
    var searchStr = url.split("?")[1];
    return this.toObj(searchStr);
  },
  get: function(name, url){
    if(name){
      return this.getAll(url)[name];
    }else{
      throw new Error('name参数不能为空');
    }
  }
};
