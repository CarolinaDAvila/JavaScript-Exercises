/* Question 1:
Problem:  Write a function named `push` that accepts two arguments
            1. an array
            2. and any other value
          The function should append the second argument to the end of the array
          and return the new length of the ARRAY
Examples:

let count = [0, 1, 2];
push(count, 3);         // 4
count;                  // [ 0, 1, 2, 3 ]


*/

function push(array, element) {
  array[array.length] = element;
  return array.length;
}

/* Question 2:
Problem: Write a function named `pop` that accepts one argument: an Array. 
         The function should REMOVE the last element from the array and return it. 
*/

function pop(array) {
  let LastElement = array[array.length -1];
  array.length = array.length - 1;
  return LastElement;
}

/* Question 3
Problem:  Write a function named `unshift` that accepts two arguments
          1. an Array
          2. a Value
          The function should insert the value at the beginning of 
          the Array. 
          Return the new `length` of the Array. 
          You will need a loop for this problem.
*/
// Not quite what it should be
function unshift(array, element) {
  let newArray = [element];
  for (let index = 0; index < array.length; index += 1) {
    newArray.push(array[index]);
  }
  array = newArray;
  return array.length;
} 

// LS solution using a function

function unshift(array, value) {
  for (let index = array.length; index > 0; index -= 1) {
    array[index] = array[index - 1];
  }

  array[0] = value;
  return array.length;
}

/* Question 4
Problem:  Write a function named `shift` that accepts one argument: An array
          The function should remove the first value from the beginning of the Array
          and return it.
*/

function shift(array) {
  let firstValue = array[0];
  let maxIdx = array.length - 1;

  for (let index = 0; index < array.length; index += 1) {
    array[index] = array[index + 1];
  }
  array.length = maxIdx
  return firstValue;
}


























