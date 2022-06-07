const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns an empty array when given an empty array", () => {
    const inputArray = [];
    assert.deepEqual(middle(inputArray), []);
  });

  it("returns an empty array when given an array of length 1", () => {
    const inputArray = [1];
    assert.deepEqual(middle(inputArray), []);
  });

  it("returns an empty array when given an array of length 2", () => {
    const inputArray = [1, 2];
    assert.deepEqual(middle(inputArray), []);
  });

  it("returns the middle index given an array with odd length ([1, 2, 3] => [2])", () => {
    const inputArray = [1, 2, 3];
    const expectedOutput = [2];
    assert.deepEqual(middle(inputArray), expectedOutput);
  });
  
  it("returns the middle index given an array with odd length ([1, 2, 3, 4, 5] => [3])", () => {
    const inputArray = [1, 2, 3, 4, 5];
    const expectedOutput = [3];
    assert.deepEqual(middle(inputArray), expectedOutput);
  });

  it("returns the middle 2 values if array length is even ([1, 2, 3, 4] => [2, 3])", () => {
    const inputArray = [1, 2, 3, 4];
    const expectedOutput = [2, 3];
    assert.deepEqual(middle(inputArray), expectedOutput);
  });

  it("returns the middle 2 values if array length is even ([1, 2, 3, 4, 5, 6] => [3, 4])", () => {
    const inputArray = [1, 2, 3, 4, 5, 6];
    const expectedOutput = [3, 4];
    assert.deepEqual(middle(inputArray), expectedOutput);
  });
});






