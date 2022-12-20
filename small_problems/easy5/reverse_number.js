function reverseNumber(number) {
  let result = '';
  let strArray = String(number).split('').reverse();
  for (let str of strArray) {
    if (str === '0') {
      continue;
    } else {
      result += str;
    }
  }
  return Number(result);
}

console.log(reverseNumber(12345));    // 54321
console.log(reverseNumber(12213));    // 31221
console.log(reverseNumber(456));      // 654
console.log(reverseNumber(12000));    // 21 -- Note that zeros get dropped!
console.log(reverseNumber(1));        // 1