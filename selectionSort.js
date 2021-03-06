// Write a function that uses selection sort to sort an array of numbers

function selectionSort(array) {
  for(let i = 0; i < array.length - 1; i++) {
    let min = i;
    for(let j = i + 1; j < array.length; j++) {
      if(array[j] < array[min]) min = j;
    }
    if(min !== i) {
     [array[i], array[min]] = [array[min], array[i]]
    }
  }
  return array
}

module.exports = selectionSort;