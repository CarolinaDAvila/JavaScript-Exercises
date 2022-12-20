/*
Problem:
        Write a function that takes a number of rows as the argument `nStars`
        And logs a square of numbers and asteristics
Example:
        generatePattern(7);

        // console output
        1******
        12*****
        123****
        1234***
        12345**
        123456*
        1234567
*/

function generatePattern(nStars) {
  for (let lineNumber = 1; lineNumber <= nStars; lineNumber += 1) {
    let string = '';

    for (let digit = 1; digit <= lineNumber; digit += 1) {
      string += String(digit);
    }

    for (let count = lineNumber + 1; count <= nStars; count += 1) {
      string += '*';
    }

    console.log(string);
  }
}