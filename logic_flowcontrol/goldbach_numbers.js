// function returns true if the input number is a prime number
function isPrime(number) {
  divisibleBy = []
  for (let divisor = 1; divisor <= number; divisor += 1){
    if (number % divisor === 0) {
      divisibleBy.push(divisor);
    }
  }
  return divisibleBy.length === 2;
}

function getPrimes(number) {
  let primesArray = [];
  for (let num = 2; num < number; num += 1) {
    if (isPrime(num)) {
      primesArray.push(num);
    }
  }
  return primesArray;
}

function createArrayIndexes(array) {
  indexes = []
  for (let index in array) {
    indexes.push(Number(index));
  }
  return indexes;
}

function getCombinations(array) {
  let combinations = []
  let indexes = createArrayIndexes(array);
  indexes.forEach(function(num1) {
    indexes.forEach(function(num2) {
      combinations.push([array[num1], array[num2]]);
    });
  });
  return combinations;
}

function checkGoldbach(expectedSum) {
  if (expectedSum % 2 === 1 || expectedSum < 4) {
    return console.log('null')
  }

  let primesArray = getPrimes(expectedSum);
  let combinations = getCombinations(primesArray);
  combinations.forEach(function(subarr) {
    if (subarr.reduce((accum, ele) => accum + ele, 0) === expectedSum) {
      console.log(`${subarr[0]} ${subarr[1]}`);
    }
  });
}

checkGoldbach(3);
checkGoldbach(4);
checkGoldbach(12);
checkGoldbach(100);



















