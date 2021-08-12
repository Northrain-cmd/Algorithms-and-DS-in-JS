// Given 2 arrays, check if the second array is the squared version of the first array, order of elements doesn't matter.

// O(n^2) solution:

// function same(arr1, arr2) {
//   if(arr1.length !== arr2.length) {
//        return false
//   }
//   for(let num1 of arr1) {
//      let index = arr2.indexOf(num1 ** 2);
//      if(index === -1) {
//        return false
//      }
//      arr2.splice(index,1);
//   }
//   return true
// }

// O(n) solution:

function same(arr1, arr2) {
  if(arr1.length !== arr2.length) {
    return false
  }
  squaresFreq = {};
  for(let num1 of arr1) {
     squaresFreq[num1 ** 2] = squaresFreq[num1 ** 2] + 1 || 1;
  }
  for(let num2 of arr2) {
    if (squaresFreq[num2]) {
      squaresFreq[num2] -= 1;
    }
  }
  for(let key in squaresFreq) {
    if(squaresFreq[key] !== 0){
      return false
    }
  }
  return true
}

//Tests

console.log(same([1,2,3],[1,4,9]))
console.log(same([1,2,3],[1,9]))
console.log(same([1,2,1],[4,4,1]))
console.log(same([1,2,3,2,5],[9,4,4,1,25]))




