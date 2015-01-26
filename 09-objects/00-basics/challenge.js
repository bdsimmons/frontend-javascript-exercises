module.exports.createCourse = function(title, duration, students) {
  return {title: title, duration: duration, students: students};
};

module.exports.addProperty = function(obj, newProp, newValue) {
  if (!obj[newProp]) {
    obj[newProp] = newValue;
  }
  return obj;
};

module.exports.formLetter = function(letter) {
  return "Hello " + letter.recipient + ",\n\n" + letter.msg + "\n\nSincerely,\n" + letter.sender;
};

module.exports.canIGet = function(item, money) {
  var list = {"MacBook Air": 999, "MacBook Pro": 1299, "Mac Pro": 2499, "Apple Sticker": 1};
  return money >= list[item];
};
