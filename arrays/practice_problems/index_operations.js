/* Question 1
Problem:  Write a function `indexOf` that accepts two arugments:
          An array and a value.
          The function returns the first index at which the value can be found
          , or `-1` if the value is NOT present.

*/

function indexOf(array, value) {
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === value) {
      return index;
    }
  }

  return -1;
}

/* Question 2
Problem:  Write a function `lastIndexOf` that accepts two arguments:
          An Array and a value.
          Return the LAST INDEX at which the value can be found in the array 
          OR -1 if the value is not present.
*/

function lastIndexOf(array, value) {
  for (let index = array.length - 1; index >= 0; index -= 1) {
    if (array[index] === value) {
      return index;
    }
  }

  return -1; 
}