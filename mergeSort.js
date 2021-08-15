// Write a function that uses merge sort to sort an array of numbers

function mergeSort(array) {
  return array
}

function merge(arr1, arr2) {
  result = [];
  let [right, left] = [0, 0];
  while(arr1[left] && arr2[right]) {
    // console.log(arr1[left], arr2[right])
    if(arr1[left] > arr2[right]) {
      result.push(arr2[right]);
      right += 1;
    } else if(arr1[left] < arr2[right]) {
      result.push(arr1[left]);
      left += 1;
    }
  }
  //console.log(arr1[left], arr2[right])
  result.push(arr1[left] || arr2[right]);
  return result
}

module.exports = [mergeSort, merge];
console.log(merge([3],[5]))