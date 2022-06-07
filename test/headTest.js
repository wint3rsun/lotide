const { assert } = require("chai");
const head = require("../head");

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5');
  });

  it("returns undefined for [undefined, 6, 7]", () => {
    assert.strictEqual(head[undefined, 6, 7], undefined);
  });

  it("returns 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });

  it("returns '' for ['', 'Lighthouse', 'Labs]", () => {
    assert.strictEqual(head(["", "Lighthouse", "Labs"]), "");
  });

  it("returns false for [false, true, true]", () => {
    assert.strictEqual(head([false, true, true]), false);
  });
  
  it("returns 'Abi' for ['Abi']", () => {
    assert.strictEqual(head(["Abi"]), "Abi");
  });
  
  it("returns 13 for [13]", () => {
    assert.strictEqual(head([13]), 13);
  });
  
  it("returns true for [true]", () => {
    assert.strictEqual(head([true]), true);
  });

  it("returns undefined for []", () => {
    assert.strictEqual(head([]), undefined);
  });
});