// function substrings(string) {
//   let result = [];

//   for (let i = 0; i < string.length; i += 1) {
//     for (let j = 1; j <= string.length; j += 1) {
//       if (string.slice(i, j) !== '') {
//         result.push(string.slice(i, j));
//       }
//     }
//   }
//   return result;
// }
// __________________________________________________________________________
// function leadingSubstrings(string) {
//   let arr = string.split('');
//   return arr.map((_, idx) => arr.slice(0, idx + 1).join(''))
// }

// function substrings(string) {
//   let result = [];
  
//   for (let i = 0; i < string.length; i += 1) {
//     result.push(leadingSubstrings(string.slice(i)))
//   }
//   return result.flat();
// }
// __________________________________________________________________________

// function leadingSubstrings(string) {
//   let arr = string.split('');
//   return arr.map((_, idx) => arr.slice(0, idx + 1).join(''))
// }

// function substrings(string) {
//   return string.split('')
//                .flatMap((_, idx) => leadingSubstrings(string.slice([idx])))
// }

_____________________________________________________________________________

// function leadingSubstrings(string) {
//   return [...string].map((_, idx) => [...string].slice(0, idx + 1).join(''))
// }

// //console.log(leadingSubstrings('abcde'));

// function substrings(string) {
//   return [...string].flatMap((_, idx) => leadingSubstrings([...string].slice([idx])))
// }

_____________________________________________________________________________

function leadingSubstrings(string) {
  return [...string].map((_, idx) => string.slice(0, idx + 1))
}

// console.log(leadingSubstrings('abcde'));

function substrings(string) {
  return [...string].flatMap((_, idx) => leadingSubstrings(string.slice([idx])))
}

console.log(substrings('abcde'));
console.log(substrings('abcde'));

console.log(substrings('abcde'));
console.log(substrings('abcde'));

// returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]