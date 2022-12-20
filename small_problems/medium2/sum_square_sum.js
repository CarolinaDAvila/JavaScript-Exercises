function getArray(number){
  let result = [];

  for (let i = 1; i <= number; i += 1) {
    result.push(i);
  }

  return result;
}

function getSumSquared(array) {
  return array.reduce((accum, char) => accum + char, 0)**2;
}

function getSquaredSum(array) {
  array.map(num => num ** 2).reduce((accum, char) => accum + char, 0);
}

function sumSquareDifference(number) {
  let array = getArray(number);
  let sumSquared = getSumSquared(array);
  let squaredSum = getSquaredSum(array);
  return sumSquared - squaredSum;
}


console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150