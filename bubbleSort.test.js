const bubbleSort = require('./bubbleSort.js');

test('Sorts an array of numbers', () => {
  expect(bubbleSort([5,6,3,2,4])).toEqual([2,3,4,5,6]);
})

test('Sorts another array of numbers', () => {
  expect(bubbleSort([20,9,80,10,20,5,70])).toEqual([5,9,10,20,20,70,80]);
})