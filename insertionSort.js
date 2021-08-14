// Write a function that uses insertion sort to sort an array of numbers

function insertionSort(array) {
  for(let i = 1; i < array.length; i++) {
    let curVal = array[i];
    let j = i -1;
    while(j >= 0 && curVal < array[j]) {
      array[j + 1] = array[j];
      j -= 1
    }
    array[j + 1] = curVal;
  }
  return array
}

module.exports = insertionSort;