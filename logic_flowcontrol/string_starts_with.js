/*
Problem:
        Implement a function that determines whether a string begins with another string. 
        If it does, the function should retturn `true` or `false` otherwise.

        Note: You may use the square brackets `[]` to access a character by index (as shown below), 
        and the `length` property to find the string length.
              Do not use any other properties or methods from JavaScript's built-in String class.
Examples:
        function startsWith(string, searchString) {
          // …
        }

        let str = 'We put comprehension and mastery above all else';
        startsWith(str, 'We');              // true
        startsWith(str, 'We put');          // true
        startsWith(str, '');                // true
        startsWith(str, 'put');             // false

        let longerString = 'We put comprehension and mastery above all else!';
        startsWith(str, longerString);      // false
*/

// My Solution
function startsWith(string, searchString) {
  if (searchString === '') {
    return true;
  }
  let result = undefined;
  
  for (let index = 0; index < searchString.length; index += 1) {
    if (searchString[index] === string[index]) {
      result = true;
    } else {
      result = false;
      break;
    }
  }
  return result; 
}

// LS solution

function startsWith(string, searchString) {
  for(index = 0; index < searchString.length; index += 1) {
    if (string[index] !== searchString[index]) {
      return false;
    }
  }
  return true;
}





























