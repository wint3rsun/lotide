const tail = function(array) {
  return (array.length > 1) ? array.slice(1) : [];
};

module.exports = tail;

