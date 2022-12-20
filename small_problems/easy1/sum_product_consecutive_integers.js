let integer = Number(prompt('Please enter an integer greater than 0:'));
let operation = prompt('Enter "s" to compute the sum, or "p" to compute the product.')

function sumNumbers(number) {
  let sum = 0;
  
  for (let num = 1; num <= number; num += 1) {
    sum += num;
  }
  
  return sum;
}

function multiplyNumbers(number) {
  let product = 1;
  
  for (let num = 1; num <= number; num += 1) {
    product *= num;
  }
  
  return product;
}


if (operation === 's') {
  let result = sumNumbers(integer);
  console.log(`The sum of the integers between 1 and ${integer} is ${result}.`)
} else {
  let result = multiplyNumbers(integer);
  console.log(`The product of the integers between 1 and ${integer} is ${result}.`)
}

