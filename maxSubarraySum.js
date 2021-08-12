// Write a function which accepts an array of integers
// and a number called n. This function should calculate
// the meximum sum of n consecutive elements in the array

function maxSubarraySum(array, n) {
  let maxSum = 0;
  let right = n;
  for(let i = 0; i < n; i++) {
    maxSum += array[i]
  }  
  let localSum = maxSum;
  for(let left = 1; left <= array.length - n; left++) {
    localSum = localSum - array[left - 1] + array[right]
    if(localSum > maxSum) {
      maxSum = localSum
    }
    right += 1;
  }
  return maxSum || null
}

// Tests

// console.log(maxSubarraySum([1,2,5,2,8,1,5],3)) // 15
// console.log(maxSubarraySum([1,2,5,2,8,1,5],2)) // 10
// console.log(maxSubarraySum([1,2,5,2,8,1,5],4)) // 17
// console.log(maxSubarraySum([4,2,1,6],1)) // 6
// console.log(maxSubarraySum([4,2,1,6,2],4)) // 13
// console.log(maxSubarraySum([],4)) // null


