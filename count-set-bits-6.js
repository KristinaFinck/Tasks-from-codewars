/*
Count Set Bits

Write a function that takes a non-negative integer and returns 
the number of bits equal to 1 in its binary representation.

Example:
1234 → 10011010010 → 5
*/
var countBits = function(n) {
  
let binary = n.toString(2);
  
  let result = 0;
  
  for (let el of binary) {
    // for...of iterates over characters of the string
    if (el === '1') result++;
  }
  
  return result
};

//short solution
var countBits2 = function(n) {
return n.toString(2).split('').filter(el => el === "1").length}

// toString(2) → convert number to binary string
// split('') → create array of characters
// filter() → keep only "1"


/*
Concepts:

- Binary representation
- Number.toString(2)
- for...of loop
- Array methods (split, filter)
*/


/*
Complexity:

Time Complexity: O(n)
Space Complexity: O(n)

n = number of bits
*/