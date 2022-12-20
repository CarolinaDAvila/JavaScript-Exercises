/*
Problem:
        Write a function named `isXor` with two parameters: 
        Return `true` if **exactly** one argument is *truthy*,
        Return `false` otherwise.

        Function shoukd work with boolean values `true` and `false`
        as well as JavaScript values that are truthy
Example:
        isXor(false, true);     // true
        isXor(true, false);     // true
        isXor(false, false);    // false
        isXor(true, true);      // false   -- only one needs to be true


        isXor(false, 3);        // true
        isXor('a', undefined);  // true
        isXor(null, '');        // false   -- here both are false 
        isXor('2', 23);         // false   -- both are true

Algorithm:

- define function `isXor` with parameters `value1`, `value 2`
- declare variable `result` and assign it to an empty array
- declare variable `array` and assign with elements `value1` and `value2`
- declare variable `falseyArray` and assign it to falsey elements : 
  [false, null, undefined, 0, NaN, '']
- Iterate through `array`:
  - If an element is in the `falsey` array, then push `false` into `result`
  - if an element is not in the `falsey` array, then push `true` into `result`
- Iterate through result, if the array has `false` and `true` values then return true,
  otherwise return false

*/
 // My answer

function isXor(value1, value2) {
  let result = [];
  let array = [value1, value2];
  let falseyArray = [false, null, undefined, 0, NaN, '']
  
  array.forEach(function(element) {
    falseyArray.includes(element) ? result.push(false) : result.push(true);
  });

  if (result.includes(false) && result.includes(true)) {
    return true;
  } else {
    return false;
  }
}

  
