const [mergeSort, merge] = require('./mergeSort.js');

test('Sorts an array of numbers', () => {
  expect(mergeSort([5,6,3,2,4])).toEqual([2,3,4,5,6]);
})

test('Sorts another array of numbers', () => {
  expect(mergeSort([20,9,80,10,20,5,70])).toEqual([5,9,10,20,20,70,80]);
  expect(mergeSort([50,40,30,20,10,0,-10,-20,-30,-40,-50])).toEqual([-50,-40,-30,-20,-10,0,10,20,30,40,50]);
})

test('Merges sorted arrays', () => {
  expect(merge([3,8],[5,7])).toEqual([3,5,7,8]);
  expect(merge([8],[5])).toEqual([5,8]);
  expect(merge([8,12,15],[5,13,18])).toEqual([5,8,12,13,15,18]);
  expect(merge([8,15],[1,7,15])).toEqual([1,7,8,15,15]);
})