/*
Problem:
        Write a function that takes a positive integer as an argument, 
        and logs all the odd numbers from 1 to the passed in number (inclusive)
        All numbers should be loggied on separate lines
Example:
        logOddNumbers(19);

        // output on console
        1
        3
        5
        7
        9
        11
        13
        15
        17
        19
Data Structure:
        Input : positive integer
        Output: Odd integers from 1 to the input integer
Algorithm:
- Define function `logOddNumbers` with `num` as its parameter
- Declare variable `numbers` and assign it to an empty array
- Create a loop that will start at the given number `num`
  - at each iteration the num is pushed to the `numbers` array
  - Decrease the number in `num` by 2 
  - Stop iteration once `num` is less than 1
- Reverse `numbers` array
- Iterate through `numbers` array and at each iteration, log the current element
*/

// function getOddNumber(num) {
//   if (num % 2 === 0) {
//     return num - 1;
//   } else {
//     return num;
//   }
// }

// function logOddNumbers(num) {
//   num = getOddNumber(num)
  
//   for (i = 1; i <= num; i += 2) {
//     console.log(i);
//   }
// }


function logOddNumbers(number) {
  for (let currentNumber = 1; currentNumber <= number; currentNumber += 1) {
    if (currentNumber % 2 === 1) {
      console.log(currentNumber);
    }
  }
}

// Further Exploration

function logOddNumbers(number) {
  for (let currentNumber = 1; currentNumber <= number; currentNumber += 2) {
    console.log(currentNumber)
  }
}

// Further Exploration
function logOddNumbers(number) {
  for (let currentNumber = 1; currentNumber <= number; currentNumber += 1) {
    if (currentNumber % 2 === 0) {
      continue;
    } else {
      console.log(currentNumber);
    }
  }
}



























