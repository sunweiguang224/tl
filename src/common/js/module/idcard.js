/**
 * 校验身份证。用法：check()
 */
module.exports = {
  cityArray: {
    11: "北京",
    12: "天津",
    13: "河北",
    14: "山西",
    15: "内蒙古",
    21: "辽宁",
    22: "吉林",
    23: "黑龙江",
    31: "上海",
    32: "江苏",
    33: "浙江",
    34: "安徽",
    35: "福建",
    36: "江西",
    37: "山东",
    41: "河南",
    42: "湖北",
    43: "湖南",
    44: "广东",
    45: "广西",
    46: "海南",
    50: "重庆",
    51: "四川",
    52: "贵州",
    53: "云南",
    54: "西藏",
    61: "陕西",
    62: "甘肃",
    63: "青海",
    64: "宁夏",
    65: "新疆",
    71: "台湾",
    81: "香港",
    82: "澳门",
    91: "国外"
  },
  regExp: /^(\d{6})(\d{4})([01]\d)([0123]\d)(\d{3})(\d|x|X)?$/,
  check: function (value) {
    if (!this.regExp.test(value)) return false;
    if (!this.isValidCity(value)) return false;
    if (!this.isValidBirth(value)) return false;
    if (!this.isValidCheckDigit(value)) return false;
    return true;
  },
  isValidCity: function (value) {
    var city = value.substring(0, 2);
    return !!swg.checkIdCard.cityArray[parseInt(city)];
  },
  isValidBirth: function (value) {
    var year, month, day;
    if (value.length == 18) {
      year = value.substring(6, 10);
      month = value.substring(10, 12);
      day = value.substring(12, 14);
    } else if (value.length == 15) {
      year = "19" + value.substring(6, 8);
      month = value.substring(8, 10);
      day = value.substring(10, 12);
    } else
      return false;

    if (year < 1900)
      return false;
    if (month > 12 || month < 1)
      return false;
    if (day > 31 || day < 1)
      return false;

    try {
      var birth = new Date(year, month, day);
      var current = new Date();

      return birth.getTime() < current.getTime();
    } catch (e) {
      return false;
    }
  },
  isValidCheckDigit: function (value) {
    if (value.length == 18) {
      var weightArray = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
      var checkArray = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'];
      var sum = 0;
      for (var i = 0; i < 17; i++) {
        sum += value.substring(i, i + 1) * weightArray[i];
      }
      var checkDigit = checkArray[sum % 11];
      return checkDigit == value.substring(17, 18);
    }
  }
};
