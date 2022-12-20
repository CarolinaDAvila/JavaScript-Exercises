/*
Write a function that takes a number argument, 
and returns true if the number is prime, or false if it is not.

You may assume that the input is always a non-negative integer.
*/

function isPrime(number) {
  divisibleBy = []
  for (let divisor = 1; divisor <= number; divisor += 1){
    if (number % divisor === 0) {
      divisibleBy.push(divisor);
    }
  }
  return divisibleBy.length === 2;
}