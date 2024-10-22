const assert = require('chai').assert;
const middle = require("../middle");
const assertArraysEqual = require("../assertArraysEqual");

describe('#middle', () => {
  
  it("should take in an array and return the middle digit", () => {
    const arr = [1, 2, 3, 4, 5];
    assert.deepEqual(middle(arr), [3]);
  });

  it("should take in and array of even numbers and return the middle two elements", () => {
    const arr = [1, 2, 3, 4, 5, 6];
    assert.deepEqual(middle(arr), [3, 4]);
  });

  it('returns strings as well', () => {
    const arr = ['oh', 'hi', 'there'];
    assert.deepEqual(middle(arr), ['hi']);
  })
});












//assertArraysEqual(middle([1, 2, 3, 5, 6, 7]), [3, 5]);