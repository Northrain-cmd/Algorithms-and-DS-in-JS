// Implement a function which accepts a sorted array  and counts the unique values in the array
// There can be negative numbers, but it's always sorted

function countUniqueValues(array) {
  let counter = 0;
  let i = 0;
  for(let j = 1; j <= array.length; j++) {
    if(array[i] !== array[j]) {
      counter += 1;
      i = j;
    }
  }
  return counter
}

// Tests

// console.log(countUniqueValues([1,1,1,1,1,1,2])) // 2
// console.log(countUniqueValues([1,2,3,4,4,4,7,7,7,12,13,13])) // 7
// console.log(countUniqueValues([])) // 0
// console.log(countUniqueValues([-2,-1,-1,0,1])) // 4
// console.log(countUniqueValues([1,2,2,5,7,7,99])) // 5
// console.log(countUniqueValues([1,2,3,4,5,6,7])) // 7


