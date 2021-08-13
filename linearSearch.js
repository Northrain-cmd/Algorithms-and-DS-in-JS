// Write a function which accepts an array of numbers and a value
// Return the index of this value in the array or -1

function linearSearch(array, element) {
  for(let [index,value] of array.entries()) {
    if(value === element) return index
  }
  return -1
}

// Tests
// console.log(linearSearch([1,5,6,7,8,23], 7)) // 3
// console.log(linearSearch([1,5,6,7,8,23], 23)) // 5
// console.log(linearSearch([1,5,6,7,8,23], 55)) // -1
