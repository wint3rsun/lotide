const without = function(arr, values) {
  let filteredArr = [];

  for (let item of arr) {
    let canPush = true;

    if (values.length > 0) {
      for (let val of values) {
        if (val === item) {
          canPush = false;
          break;
        }
      }
    }

    if (canPush) {
      filteredArr.push(item);
    }
  }
  return filteredArr;
};

module.exports = without;