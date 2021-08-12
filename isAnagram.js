// Given two strings, write a function to determine if the second string is an an anagram of the first
// Example: cinema => iceman

// O(n) solution:

function isAnagram(str1, str2) {
  if(str1.length != str2.length) {
    return false
  }
  const frequency = {};
  for(let char of str1) {
    frequency[char] = frequency[char] + 1 || 1
  }
  for(let char of str2) {
    if(!(frequency[char])) {
      return false
    }
    frequency[char] -= 1;
  }
  return true
}

//Tests

// console.log(isAnagram('cinema', 'iceman'))
// console.log(isAnagram('elbow', 'below'))
// console.log(isAnagram('night', 'thing'))
// console.log(isAnagram('night', 'thing'))
// console.log(isAnagram('', ''))
// console.log(isAnagram('cat', 'car'))
// console.log(isAnagram('aaz', 'zza'))

