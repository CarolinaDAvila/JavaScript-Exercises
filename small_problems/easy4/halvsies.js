/*
Problem:
        Write a function that takes an array as an argument and 
        returns an array that contains two elements, 
        each of which is an array. 

        Put the first half of the original array elements in the first element of the return value
        and put the second half in the second element. 

        If the original array contains an odd number of elements, 
        place the middle element in the first half array.

Understanding the Problem:
        Input : Array
        Output: A nested array
                - the first half of the elements in the first array
                  - if the input array has an odd number of elements
                    place the middle element in the first half of the array
                - the second half of the elements in the second array

        Rules: 
                - if the input array contains one element, return the input element
                  in an nested array with the second element being an empty array
                - if the input array is an empty array, return a nested array of 
                two empty arrays.

Example:

halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
- even length of elements

halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
- odd length of elements

halvsies([5]);                // [[5], []]
- input has only one element, return a nested array anyway

halvsies([]);                 // [[], []]
- input is an empty array, return a nested array anyway

Data Structure:
        Input : Array
        Output: Nested Array

Algorithm:

*/

function evenArraySplit(array){
  return [array.slice(0, array.length/2),array.slice(array.length/2)];
}

function oddArraySplit(array) {
  return [array.slice(0, array.length/2 + 1), array.slice(array.length/2 + 1)];
}

function halvsies(array) {
  if (array.length % 2 === 0) {
    return evenArraySplit(array);
  } else {
    return oddArraySplit(array);
  }
}

console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]


































