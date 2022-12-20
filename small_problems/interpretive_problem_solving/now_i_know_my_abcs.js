/*
A collection of spelling blocks has two letters per block, as shown in this list:

B:O   X:K   D:Q   C:P   N:A
G:T   R:E   F:S   J:W   H:U
V:I   L:Y   Z:M

This limits the words you can spell with the blocks to only those words that do not use both letters 
from any given block. You can also only use each block once.

Problem:
Write a function `isBlockWord` that takes a `word` string as an argument, 
returns true if:
  - the word can be spelled using the set of blocks
returns false if:
  - the word needs two letters from the same block

Rules:
      - Case Insensitive

Data Structure:
        Input : String
        Output: Boolean

Spelling blocks : nested array where each array has two characters


Examples:
isBlockWord('BATCH');      // true
isBlockWord('BUTCH');      // false
isBlockWord('jest');       // true

Algorithm:
- a
- declare `result` and assign it to an empty hash
- iterate through the given string and at each iteration 


*/

// function isBlockWord(word) {
//   const BLOCKS = {
//     BO: [],
//     XK: [],
//     DQ: [],
//     CP: [],
//     NA: [],
//     GT: [],
//     RE: [],
//     FS: [],
//     JW: [],
//     HU: [],
//     VI: [],
//     LY: [],
//     ZM: [],
//   }
  
//   let keys = Object.keys(BLOCKS);
  
//   keys.forEach(function(key) {
//     for (let char of word.toUpperCase()) {
//       if (key.includes(char)) {
//         BLOCKS[key].push(1);
//       };
//     }
//   });
//   return keys.every(function(key) {
//     return BLOCKS[key].length <= 1;
//   });
// }

function isBlockWord(word){
  let blocks = ['BObo', 'XKxk', 'DQdq', 'CPcp', 'NAna', 'GTgt', 'REre', 'FSfs',                 'JWjw', 'HUhu', 'VIvi', 'LYly', 'ZMzm']
  
  const letters = word.split('');
  
  for (let i = 0; i < letters.length; i += 1) {
    let matchingBlock = blocks.filter(block => block.includes(letters[i]))[0];
    
    console.log(matchingBlock);
    if (matchingBlock === undefined) {
      return false;
    } else {
      blocks.splice(blocks.indexOf(matchingBlock), 1);
    }
  }
  
  return true;
}



console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
// console.log(isBlockWord('jest'));       // true
// console.log(isBlockWord('floW'));       // true
// console.log(isBlockWord('APPLE'));      // false
// console.log(isBlockWord('apple'));      // false
// console.log(isBlockWord('apPLE'));      // false
// console.log(isBlockWord('Box'));        // false

 