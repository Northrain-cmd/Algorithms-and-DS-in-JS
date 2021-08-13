// Write a function that calculates the factorial
// of a number n recursively

function factorial(n) {
  if(n === 1) return 1
  return n * factorial(--n);
}

// // Tests
// console.log(factorial(3)) // 6
// console.log(factorial(4)) // 24
// console.log(factorial(5)) // 120
