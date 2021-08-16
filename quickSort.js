// Write a function that uses quick sort to sort an array of numbers

function quickSort(array, left = 0, right = array.length - 1) {
  if(left >= right) return array;
  let pivotPoint = pivot(array, left, right);
  quickSort(array, left, pivotPoint - 1);
  quickSort(array, pivotPoint + 1, right);
  return array
}

function pivot(array, start, end) {
  let storeIndex = start;
  let pivot = array[start];
  for(let i = start + 1; i <= end; i++) {
    if(pivot > array[i]) {
      storeIndex += 1;
      [array[i], array[storeIndex]] = [array[storeIndex], array[i]];
    }
  }
  [array[storeIndex], array[start]] = [array[start], array[storeIndex]];
  return storeIndex
}

module.exports = [pivot, quickSort];

