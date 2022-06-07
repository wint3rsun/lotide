# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @wint3rsun/lotide`

**Require it:**

`const _ = require('@wint3rsun/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(arr1, arr2)`: prints message whether two array arguments match or not
* `assertEqual(actual, expected)`: prints out a message whether the two values match or not
* `assertObjectsEqual(actual, expected)`: prints out a message whether two objects match or not
* `countLetters(string)`: returns a count of the number of each letter in a string argument
* `countOnly(allItems, itemsToCount)`: returns an object containing counts of everything that the input object listed
* `eqArrays(arr1, arr2)`: given two arrays, returns true or false based on a perfect match
* `eqObjects(obj1, obj2)`: given two objects, returns true or false based on a perfect match
* `findKey(object, callback)`: scans the object and returns the first key for which the callback returns a truthy value
* `findKeyByValue(object, value)`: scans the object and returns the first key which contains the given value
* `head(array)`: returns the first array element as an array
* `letterPositions(sentence)`: returns all the indices in the string where each character is found.
* `map(array, callback)`: returns a new array based on the results of the callback function.
* `middle(array)`: returns the middle-most element(s) of a given array
* `tail(array)`: returns an array of everything except for the first item of the provided array.
* `takeUnitil(array, callback)`: returns a slice of the provided array with elements taken from the beginning until the callback provided returns a truthy value
* `without(arr, values)`: returns a subset of a given array, removing unwanted elements