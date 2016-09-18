/**
 * Created by weiguangsun on 2016/6/12.
 */
var newUrl = location.href;
//newUrl = newUrl.replace('localhost', '10.0.69.136');
if(newUrl.indexOf('/src') !== -1){
  newUrl = newUrl.replace('/src', '/dev');
  location.href = newUrl;
}
