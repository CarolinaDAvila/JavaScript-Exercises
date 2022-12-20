/*
Problem:
        Write two functions that each take two strings as arguments 

        Function # 1:
          - create `indexOf` function with parameters `firstString` and `secondString`
          - Match the substring in `firstString` with `secondString`
          - return the index of the character where that substring begins. 
        Function # 2:
          - create `lastIndexOf` function with parameters `firstString` and `secondString`
          - return the last instance of a substring in `firstString` tat matcfhes the string
          `secondString`
          - return the inde of the character where the substring begins

** Return -1 if `firstString` does not contain the substring specified by `secondString`

Example:

function indexOf(firstString, secondString) {
  // statements
}

function lastIndexOf(firstString, secondString) {
  // statements
}

indexOf('Some strings', 's');                      // 5
indexOf('Blue Whale', 'Whale');                    // 5
indexOf('Blue Whale', 'Blute');                    // -1
indexOf('Blue Whale', 'leB');                      // -1

lastIndexOf('Some strings', 's');                  // 11
lastIndexOf('Blue Whale, Killer Whale', 'Whale');  // 19
lastIndexOf('Blue Whale, Killer Whale', 'all');    // -1
*/

// function indexOf(firstString, secondString) {
//   let secondIndexes = []
//   for (let i in secondString) { 
//     secondIndexes.push(Number(i); 
//   }
  
//   for (let i in firstString) {
//     if (firstString[])
//   }
// }

function substrings(firstString, substring) {
  let endIndex = firstString.length - substring.length;
  let result = [];
  for (let start_idx = 0; start_idx <= endIndex; start_idx += 1) {
    let tempString = '';

    for (let idx = start_idx; idx < (start_idx + substring.length); idx += 1) {
      tempString += firstString[idx];
      if (tempString === substring) {
        result.push(start_idx);
      }
    }
  }
  return result
}

function indexOf(firstString, substring) {
  let result = substrings(firstString, substring);
  return result.length !== 0 ? result[0] : -1;
}

function lastIndexOf(firstString, substring) {
  let result = substrings(firstString, substring);
  return result.length !== 0 ? result[result.length - 1] : -1;
}

console.log(indexOf('Some strings', 's'));                      // 5
console.log(indexOf('Blue Whale', 'Whale'));                    // 5
console.log(indexOf('Blue Whale', 'Blute'));                    // -1
console.log(indexOf('Blue Whale', 'leB'));                      // -1

console.log(lastIndexOf('Some strings', 's'));                  // 11
console.log(lastIndexOf('Blue Whale, Killer Whale', 'Whale'));  // 19
console.log(lastIndexOf('Blue Whale, Killer Whale', 'all'));    // -1