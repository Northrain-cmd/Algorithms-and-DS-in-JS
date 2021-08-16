// Write a function that uses merge sort to sort an array of numbers

function mergeSort(array) {
  if(array.length <= 1) {
    return array
  } 
  let middle = Math.floor((array.length / 2));
  let left = array.slice(0, middle);
  let right = array.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(arr1, arr2) {
  result = [];
  let [right, left] = [0, 0];
  while(left < arr1.length && right < arr2.length) {
    if(arr1[left] > arr2[right]) {
      result.push(arr2[right]);
      right += 1;
    } else {
      result.push(arr1[left]);
      left += 1;
    }
  }
  while(left < arr1.length) {
    result.push(arr1[left])
    left += 1
  }
  while(right < arr2.length) {
    result.push(arr2[right])
    right += 1
  }
  return result
}

module.exports = [mergeSort, merge];