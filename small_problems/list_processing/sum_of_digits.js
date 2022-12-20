function sum(digits) {
  let numArr = String(digits).split('').map(str => Number(str));
  return numArr.reduce((accum, ele) => accum + ele, 0); 
}

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45