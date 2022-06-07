const letterPositions = function(sentence) {
  const results = {};
  let index = 0;

  for (const c of sentence) {
    if (c !== " ") {
      (results[c]) ? results[c].push(index) : results[c] = [index];
    }
    index++;
  }

  return results;
};

module.exports = letterPositions;