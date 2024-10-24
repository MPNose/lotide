const assert = require('chai').assert;
const tail = require("../tail");
const assertEqual = require("../assertEqual");

describe('#tail', () => {
  
  it("returns a new array with first element removed", () => {
    const arr = (['yo yo', "lighthouse", "labs"]);
    assert.deepEqual(tail(arr), ["lighthouse", "labs"]);
  });

  it("returns a new first element in an array", () => {
    const result = tail(['yo yo', "lighthouse", "labs"]);
    assert.strictEqual(result[0], "lighthouse");
  });

  it("returns a new second array index", () => {
    const result = tail(['yo yo', "lighthouse", "labs"]);
    assert.strictEqual(result[1], "labs");
  });
  
  it("doesn't alter the original array", () => {
    const words = ['yo yo', "lighthouse", "labs"];
    tail(words);
    assert.deepEqual(words, ['yo yo', "lighthouse", "labs"]);
  });

});





