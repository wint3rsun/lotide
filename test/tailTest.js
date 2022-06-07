const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("should return ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    const inputArray = ["Hello", "Lighthouse", "Labs"];
    const expectedOutput = ["Lighthouse", "Labs"];
    assert.deepEqual(tail(inputArray), expectedOutput);
  });

  it("should not modify original array.", () => {
    const inputArray = ["Hello", "Lighthouse", "Labs"];
    assert.notDeepEqual(tail(inputArray), inputArray);
  });

  it("should return an empty array if passed an array with 1 item", () => {
    const inputArray = [1];
    assert.isEmpty(tail(inputArray));
  });

  it("should return an empty array if passed an empty array", () => {
    const inputArray = [];
    assert.isEmpty(tail(inputArray));
  });
});