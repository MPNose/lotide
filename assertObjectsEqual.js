const eqObjects = function (object1, object2) {
  let length1 = Object.keys(object1);
  let length2 = Object.keys(object2);
  if (length1.length !== length2.length) {
    return false;
  }
  for (const keys1 in object1) {
    if (Array.isArray(object1[keys1]) && Array.isArray(object2[keys1])) {
      if (!eqArrays(object1[keys1], object2[keys1])) {
        return false;
      }
    } else if (object1[keys1] !== object2[keys1]) {
      return false;
    }
  }
  return true;
};
const assertObjectsEqual = function(actual, expected) {
  const inspect = require("util").inspect;
  let check = eqObjects(actual, expected);
    if (check === true) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`)
  }
};







const one = {
  this: 'that',
};
const two = {
  this: 'not',
};
assertObjectsEqual(one,two);