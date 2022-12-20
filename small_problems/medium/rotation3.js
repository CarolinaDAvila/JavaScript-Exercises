/*
- Create `maxRotation` with `digits` as its parameter
- take `digits` and rotate it by one digit to the left
  - take the first digit and move it to the end
- Keep the first digit in place and rotate the remaining digits like above
- Keep the first two digits in place and same as above


- Write a function that takes an integer as an argument
- return the maximum rotation of that integer


maxRotation(735291);          // 321579
            352917   move to end and keep 1
            329175   keep 2
            321759   keep 3
            321597   keep 4
            321579   keep 5 

maxRotation(3);               // 3
maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
            051
            015
maxRotation(8703529146);      // 7321609845
            7035291468
            7352914680
            7329146805
            7321468059
            7321680594
            7321605948
            7321609485
            7321609854
            7321609845
*/

function rotateDigits(array) {
  return array.slice(1).concat(array[0]);
}

function maxRotation(digits) {
  let arr = String(digits).split('');
  let firstRotation = rotateDigits(arr);
  let length = firstRotation.length;
  let result = [];

  for (let times = 1; times < (length); times += 1) {
    result.push(firstRotation[0]);
    firstRotation.shift(1);
    firstRotation = rotateDigits(firstRotation);
  }
  return Number(result.concat(firstRotation).join(''));
}

console.log(maxRotation(735291)     === 321579);
console.log(maxRotation(3)          === 3);
console.log(maxRotation(35)         === 53);
console.log(maxRotation(105)        === 15);
console.log(maxRotation(8703529146) === 7321609845);


console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845