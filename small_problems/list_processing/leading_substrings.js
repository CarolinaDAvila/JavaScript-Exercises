// function leadingSubstrings(string) {
//   let result = [];
//   for (let index = 1; index <= string.length; index += 1) {
//     result.push(string.slice(0, index));
//   }
//   return result;
// }

// function leadingSubstrings(string) {
//   let arr = string.split('');
//   return arr.map((ele, idx) => arr.slice(0, idx + 1).join(''))
// }

function leadingSubstrings(string) {
  let arr = string.split('');
  return arr.reduce((array, char, idx) => {
    array.push(arr.slice(0, idx + 1).join(''));
    return array;
  }, []);
}

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]