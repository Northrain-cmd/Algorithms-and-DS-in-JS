// Write a function that uses radix sort to sort an array of numbers

function radixSort(array) {
  let maxDigits = mostDigits(array);
  let buckets = [];
  for(let i = 0; i < maxDigits; i++) {
    buckets = Array.from({length: 10}, () => []);
    for(let j = 0; j < array.length; j++) {
      buckets[getDigit(array[j], i)].push(array[j]);
    }
    array = buckets.flat();
  }
  return array
}

function getDigit(number, place) {
  num = (Math.abs(number)).toString();
  return +num[num.length - place - 1] || 0
}

function digitCount(number) {
  return (Math.abs(number)).toString().length;
}

function mostDigits(array) {
  maxDigits = 0;
  for(let number of array) {
    maxDigits = Math.max(maxDigits, digitCount(number))
  }
  return maxDigits
}

module.exports = radixSort;

