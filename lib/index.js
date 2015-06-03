'use strict';


var exports = module.exports = {};


var stringify = exports.stringify = function stringify(value) {
  if (typeof value === 'undefined' || value === null) {
    return "";
  }

  var valueStr = value;
  if (typeof value !== 'string') {
    valueStr = value.toString && value.toString();
    (valueStr === '[object Object]') &&
      (valueStr = JSON.stringify(value));
  }
  return valueStr;
};

var getNested = exports.getNested = function getNested(key, obj) {
  var keyParts = key.split('.');
  return keyParts.reduce(function(acc, part) {
    if (typeof acc === 'undefined') {
      return;
    }

    return acc[part];
  }, obj);
};

var format = exports.format = function format(fmt, vars) {
  return Object.keys(vars).reduce(function(acc, key) {
    var replaceExp = new RegExp('{{' + key + '}}', 'g');
    var value = getNested(key, vars);
    return acc.replace(replaceExp, stringify(value));
  }, fmt);
};
