// Write a function which accepts a sorted array of numbers and a value
// Return the index of this value in the array or -1

function binarySearch(array, element) {
    let left = 0;
    let right = array.length - 1;
    while(left <= right) {
      let middle = Math.floor((left + right) / 2)
      if(array[middle] < element) {
        left = middle + 1
      } else if(array[middle] > element) {
        right = middle - 1
      } else {
      return middle
      }
    }
    return -1  
}

// Tests
// console.log(binarySearch([1,5,6,7,8,23], 7)) // 3
// console.log(binarySearch([1,5,6,7,8,23], 23)) // 5
// console.log(binarySearch([1,5,6,7,8,23], 55)) // -1
// console.log(binarySearch([2,5,6,9,13,15,28,30], 50)) // -1
// console.log(binarySearch([2,5,6,9,13,15,28,30], 5)) // 1

