module.exports.sumNumbers = function(arr) {
  var sum = 0;
  for (var i=0, len=arr.length; i < len; i++) {
    sum += arr[i];
  }
  return sum;
};

module.exports.splitAndLowerCaseString = function(inputString) {
  var arr = inputString.split(",");
  var returnArr = [];
  for (var i=0, len=arr.length; i < len; i++) {
    returnArr.push(arr[i].toLowerCase());
  }
  return returnArr;
};

module.exports.addIndex = function(arr) {
  var returnArr = [];
  for (var i=0, len=arr.length; i < len; i++) {
    returnArr.push(i + " is " + arr[i]);
  }
  return returnArr;
};
