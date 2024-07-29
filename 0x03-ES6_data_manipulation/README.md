# ES6 Data Manipulation

This project covers various aspects of data manipulation using ES6 features in JavaScript. The examples demonstrate how to efficiently work with arrays, objects, maps, sets, and other data structures introduced in ES6.

## Table of Contents
1. [Introduction](#introduction)
2. [Array Methods](#array-methods)
3. [Object Methods](#object-methods)
4. [Map and Set](#map-and-set)
5. [WeakMap and WeakSet](#weakmap-and-weakset)
6. [Conclusion](#conclusion)

## Introduction
ECMAScript 6 (ES6) introduced several new features and improvements to JavaScript, making data manipulation more efficient and expressive. This guide covers essential ES6 features for handling data structures.

## Array Methods

### `map()`
The `map()` method creates a new array populated with the results of calling a provided function on every element in the calling array.

```javascript
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // Output: [2, 4, 6, 8]
