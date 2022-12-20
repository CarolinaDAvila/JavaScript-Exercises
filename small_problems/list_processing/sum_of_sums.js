function getSubArrays(array) {
  let result = [];
  for (let i = 1; i <= array.length; i += 1) {
    result.push(array.slice(0, i));
  }
  return result;
}

function sumOfSums(array) {
  let subarrays = getSubArrays(array);
  let sums = subarrays.map(arr => arr.reduce((accum, num) => accum + num, 0));
  return sums.reduce((accum, num) => accum + num, 0);
}

console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35