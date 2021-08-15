const [mergeSort, merge] = require('./mergeSort.js');

xtest('Sorts an array of numbers', () => {
  expect(mergeSort([5,6,3,2,4])).toEqual([2,3,4,5,6]);
})

xtest('Sorts another array of numbers', () => {
  expect(mergeSort([20,9,80,10,20,5,70])).toEqual([5,9,10,20,20,70,80]);
})

test('Merges sorted arrays', () => {
  expect(merge([3,8],[5,7])).toEqual([3,5,7,8]);;
  expect(merge([8],[5])).toEqual([5,8]);;
  expect(merge([8,12,15],[5,13,18])).toEqual([5,8,12,13,15,18]);
})