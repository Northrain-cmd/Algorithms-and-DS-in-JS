// Write a function which accepts a sorted array of integers.
// The function should find the first pair where the sum is 0
// Return an array that includes both values that sum to zero or undefined if a pair does not exist

// O(n^2) solution:

// function sumZero(array) {
//   if(array.length < 2) {
//     return false
//   }
//   for(let i = 0; i < array.length; i++) {
//     for(let j = i + 1; j < array.length; j++) {
//       if(array[i] + array[j] === 0) {
//         return [array[i], array[j]]
//       }
//     }
//   }
// }

// O(n) solution:

function sumZero(array) {
  let i = 0;
  let j = array.length - 1;
  let first = array[i];
  let second = array[j];
  while(i < j) {
    if(array[i] + array[j] === 0) {
      return [array[i], array[j]]
    } else if(array[i] + array[j] < 1) {
      i += 1
    } else {
      j -= 1
    }
  }
}

// Tests

// console.log(sumZero([-3,-2,-1,0,1,2,3])); // [-3,3]
// console.log(sumZero([-2,-1,0,1,3])); // undefined
// console.log(sumZero([1,2,3])); // undefined
// console.log(sumZero([-4,-3,-2,-1,0,1,2,3])); // [-3,3]
// console.log(sumZero([-4,4])); // [-4,4]



