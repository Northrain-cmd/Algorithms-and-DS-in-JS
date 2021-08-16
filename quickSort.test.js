const [pivot, quickSort] = require('./quickSort.js');

test('Sorts an array of numbers', () => {
  expect(quickSort([5,6,3,2,4])).toEqual([2,3,4,5,6]);
})

test('Sorts another array of numbers', () => {
  expect(quickSort([20,9,80,10,20,5,70])).toEqual([5,9,10,20,20,70,80]);
  expect(quickSort([50,40,30,20,10,0,-10,-20,-30,-40,-50])).toEqual([-50,-40,-30,-20,-10,0,10,20,30,40,50]);
})

 test('Puts the pivot in the correct spot sorted arrays', () => {
   expect(pivot([5,1,3,8],0,3)).toEqual(2);
   expect(pivot([44,38,5,47,15,36,26,27,2,46,4,19,50,48],0,13)).toEqual(9);
 })