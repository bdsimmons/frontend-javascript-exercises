module.exports.copy = function(obj) {
  var newObj = {};
  for (key in obj) {
    newObj[key] = obj[key];
  }
  return newObj;
};

module.exports.extend = function(dest, src) {
  for (key in src) {
    dest[key] = src[key];
  }
  return dest;
};

module.exports.hasElems = function(obj, arr) {
  for (var i=0, len=arr.length; i < len; i++) {
    if (!obj[arr[i]]) {
      return false;
    }
  }
  return true;
};
