module.exports.stream = function(conditionalFn, actionFn) {
  while(conditionalFn()) {
    actionFn();
  }
};

module.exports.sumNumbers = function(arr) {
  var sum = 0;
  while(arr.length > 0) {
    sum += arr.pop();
  }
  return sum;
};

