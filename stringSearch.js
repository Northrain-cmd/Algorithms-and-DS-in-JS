// Write a function that searches a string for substrings and counts them 

function stringSearch(string, substr) {
  let matches = 0;
  for(let i = 0; i < string.length; i++) {
    for(let j = 0; j < substr.length; j++) {
      if(string[i + j] !== substr[j]) break;
      if(j === substr.length - 1) matches += 1;
    }
  }
  return matches
}

// Tests

// console.log(stringSearch("ha hahaHarold said haha ha","haha")) // 2
// console.log(stringSearch("Lorie loled","lol")) // 1
