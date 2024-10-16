const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++){
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true
};
const assertArraysEqual = function(array1, array2) {
  let check = eqArrays(array1, array2);
    if (check === true) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`)
  }
};
const without = function(source, itemsToRemove) {
  const copyArray = [];
  for (const items of source) {
    if (!itemsToRemove.includes(items)) {
      copyArray.push(items)
    }
  }
return copyArray;
};
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);