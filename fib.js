// Recursive memoized version
function fib(n, memo = {}) {
  if(memo[n]) return memo[n]
  if(n <= 2) return 1
  const res = fib(n - 1, memo) + fib(n - 2, memo);
  memo[n] = res;
  return res
}

// Iterative tabultation version
function fib1(n) {
  if(n <= 2) return 1
  const sequence = [0, 1, 1];
  for(let i = 3; i <=  n; i++) {
    const next = sequence[i - 1] + sequence[i - 2];
    sequence.push(next);
  }
  return sequence[n]
}

// Tests
console.log(fib(200))
console.log(fib1(200))