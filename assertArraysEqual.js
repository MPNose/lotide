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

assertArraysEqual([1, 2, 3], [1, 2, 3]);