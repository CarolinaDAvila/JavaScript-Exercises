/*
Write a function that iterates over the integers from 1 to 100, inclusive. 
For multiples of three, log "Fizz" to the console. 
For multiples of five, log "Buzz". 
For numbers which are multiples of both three and five, log "FizzBuzz". 
For all other numbers, log the number.
*/

function fizzbuzz() {
  for (let number = 1; number <= 100; number += 1) {
    if (number % 3 === 0 && number % 5 === 0) {
      console.log('FizzBuzz');
    } else if (number % 3 === 0) {
      console.log('Fizz');
    } else if (number % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(number);
    }
  }
}