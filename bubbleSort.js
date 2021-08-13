// Write a function that uses bubble sort to sort an array of numbers

function bubbleSort(array) {
    let swapped;
    let lastUnsorted = array.length - 1;
    do {
      swapped = false;
      for(let i = 0; i < lastUnsorted; i++) {
        if(array[i] > array[i + 1]) {
          [array[i], array[i + 1]] = [array[i + 1], array[i]]
          swapped = true;
        }
      }
      lastUnsorted -= 1;
    } while(swapped)
  return array
}

module.exports = bubbleSort;