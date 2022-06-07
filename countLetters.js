const countLetters = function(string) {
  let count = {};

  for (const c of string) {
    if (c !== " ") {
      (count[c.toLowerCase()]) ? count[c.toLowerCase()]++ : count[c.toLowerCase()] = 1;
    }
  }
  console.log(count);

  return count;
};

module.exports = countLetters;