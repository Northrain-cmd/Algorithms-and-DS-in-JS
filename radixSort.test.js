const radixSort = require('./radixSort.js');

test('Sorts an array of numbers', () => {
  expect(radixSort([5,6,3,2,4])).toEqual([2,3,4,5,6]);
})

test('Sorts another array of numbers', () => {
  expect(radixSort([20,9,80,10,20,5,70])).toEqual([5,9,10,20,20,70,80]);
  expect(radixSort([1,2,45,123,85644,3,4])).toEqual([1,2,3,4,45,123,85644]);
})
