'use strict';


var exports = module.exports = {};


var stringify = exports.stringify = function stringify(value) {
  var valueStr = value;
  if (typeof value !== 'string') {
    valueStr = value.toString();
    (valueStr === '[object Object]') &&
      (valueStr = JSON.stringify(value));
  }
  return valueStr;
};


var format = exports.format = function format(fmt, vars) {
  return Object.keys(vars).reduce(function(acc, key) {
    var replaceExp = new RegExp('{{' + key + '}}', 'g');
    var value = vars[key];
    return acc.replace(replaceExp, stringify(value));
  }, fmt);
};
