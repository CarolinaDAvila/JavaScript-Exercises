/*
Problem:

Write a function that rotates an array by moving the first element to the end of the array. Do not modify the original array.

If the input is not an array, return undefined.
If the input is an empty array, return an empty array.
Review the test cases below, then implement the solution accordingly.

Understanding The Problem:
Write function `rotateArray` with `array` as its parameter
Move the first element of the array to the end of the array

Rules: 
- do NOT modify the original array
- return `undefined`
  - if the input is NOT an array
  - if no argument is passed
- return `[]`
  - if the input is an EMPTY array, 


Example:

rotateArray([7, 3, 5, 2, 9, 1]);       
         // [3, 5, 2, 9, 1, 7]

rotateArray(['a', 'b', 'c']);          
         // ["b", "c", "a"]
         
rotateArray(['a']);                    
         // ["a"]                    if there is one element, return that element
         
rotateArray([1, 'a', 3, 'c']);       the array can hold both numbers and strings 
            // ["a", 3, "c", 1]

rotateArray([{ a: 2 }, [1, 2], 3]);    
        // [[1, 2], 3, { a: 2 }]     the array can hold next arrays, and objects

rotateArray([]);                       
         // []                 return `undefined` if the argument is not an array

rotateArray();                         // undefined
                                      the function DOES NOT HAVE TO TAKE AN 
                                      ARGUMENT
                                      
                                      If no argument is passed then return                                             undefined (default paramter?)

rotateArray(1);                        // undefined
                                      Check to see if the input is an array


// the input array is not mutated
const array = [1, 2, 3, 4];
rotateArray(array);                    // [2, 3, 4, 1]
array;                                 // [1, 2, 3, 4]

*/

function rotateArray(array = undefined) {
  if (!Array.isArray(array)) {
      return;
      } else if (array.length === 0) {
      return array;
      }
  let result = array.slice(1);
  result.push(array[0]);
  return result;
}

console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
console.log(rotateArray(['a']));                    // ["a"]
console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([]));                       // []

console.log(rotateArray());                         // undefined
console.log(rotateArray(1));                        // undefined

const array = [1, 2, 3, 4];
console.log(rotateArray(array));                    // [2, 3, 4, 1]
console.log(array);                                 // [1, 2, 3, 4]


