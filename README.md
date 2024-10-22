# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @mpnose/lotide`

**Require it:**

`const _ = require('@mpnose/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `assertArraysEqual(array1, array2)`: compares two arrays for equality
- `assertEqual(actual, expected)`: compares two items for equality
- `assertObjectsEqual(actual, expected)`: takes in two objects an compares them for equality
- `countLetters(string)`: intakes a string of letters and outputs the number of letters in the string
- `countOnly(allItems, itemsToCount)`: intakes two lists and returns the count of the requested items
- `eqArrays(arr1, arr2)`: takes in two arrays and confirms if they are equal
- `eqObjects(object1, object2)`: takes in two objects and confirms if they are equal
- `findKey(object, callback)`: takes in and object and finds the key based on value input parameters
- `findKeyByValue(object, value)`: intakes an object and value and determines the key associated with value
- `head(arr)`: takes in an array and returns the first element
- `letterPositions(sentence)`: intakes a sentence and returns the index points of each letter
- `map(array, callback)`: creates a new array of an input array, with callback parameters added
- `middle(array)`: intakes an array and returns the middle one or two elements
- `tail(array)`: intakes an array and returns all but the first elements
- `takeUntil(array, callback)`: inputs an array and a callback function outputs until callback parameters met
- `without(source, itemsToRemeve)`: returns an array with selected items filtered out 