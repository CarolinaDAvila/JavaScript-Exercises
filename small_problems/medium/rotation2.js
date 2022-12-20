/*
Problem:
        Write a function that rotates the last `n` digits of a `number`. 
        For the rotation, rotate by one digit to the left, moving the first digit
        to the end. 

Understanding the Problem:
        - Write function `rotateRightmostDigits` with `digits` and `n` as its parameters
        - Move the `n`th number to the END
Data Structures:
          Input: integer, integer
          Output: integer

          Array:
          Example: [7, 3, 5, 2, 9, 1]    
                   [1, 9, 2, 5, 3, 7] -- reverse it for INDICE USE
                   [1, 2, 5, 3, 7]    -- take out 9 and put it in FRONT
                   [9, 1, 2, 5, 3, 7]
                   [7, 3, 5, 2, 1, 9] -- reverse it and return it 

                   [7, 3, 5, 2, 9, 1]
                   [1, 9, 2, 5, 3, 7] -- reverse it
                   [1, 9, 5, 3, 7]    -- take out the third element (index 2) 2
                   [2, 1, 9, 5, 3, 7] -- put 2 in front
                   [7, 3, 5, 9, 1, 2] -- reverse it and return it
 
Examples:

rotateRightmostDigits(735291, 1);      
                   // 735291
- if `n` is 1, then return the number 'as is'

rotateRightmostDigits(735291, 2);      
                   // 735219
- the second to LAST number is moved to the end

rotateRightmostDigits(735291, 3);      
                   // 735912
- the third to LAST number is moved to the right

rotateRightmostDigits(735291, 4);      
                   // 732915
- the fourth to LAST number is moved to the right

rotateRightmostDigits(735291, 5);      
                   // 752913
- THe fifth to LAST number is moved to the right

rotateRightmostDigits(735291, 6);      
                   // 352917
- The sixth to LAST number is moved to the right 

Algorithm:

- helper function to convert a digit to an array, reverse it
  - create helper function `digitsToArray` with `digits` as its parameter
  - convert the input digit to a string
  - convert the string to an array of strings and return an array of strings

- helper function to convert an array to a digit? maybe
  - create helper function `arrayToDigits` with `array` as its parameter 
  - once the actual function has modified the return value of `digitsToArray`:
      - convert the array of strings to one string and convert that to a Number
      - return it.

- actual function to take out the nth element from the array and put it in front.
  - Create `rotateRightmostDigits`with `digits` and `n` as its parameter
  - declare local variable `index` and assign it to `n` - 1
  - declare `arr` and assign it to the return value of `digitsToArray`
  - declare `result` and assign it to:
    - place the `index` of `arr` to the FRONT of `arr`
  - return the return value of the function `arrayToDigits`
*/

function digitsToArray(digits) {
  return String(digits).slice().split('').reverse();
}

function rotateRightmostDigits(digits, n) {
  let index = n - 1;
  let arr = digitsToArray(digits); 
  let lastNum = arr.splice(index, 1);
  arr.unshift(lastNum[0]);
  return Number(arr.reverse().join(''));
}

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917









































