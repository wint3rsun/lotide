const findKeyByValue = function(object, value) {
  let key = undefined;

  for (const item in object) {
    if (object[item] === value) {
      key = item;
    }
  }
  return key;
};

module.exports = findKeyByValue;