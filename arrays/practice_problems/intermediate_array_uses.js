/* Question 1
Problem: 
        Write a function that creates and returns a new array from its array argument.
        The new array should contain all values from the argument array whose position
        have an odd index.
*/

function oddElementsOf(arr) {
  let oddIndexes = [];
  for (let index in arr) {
    if (index % 2 === 1) {
      oddIndexes.push(arr[index]);
    }
  }
  return oddIndexes
}

let digits = [4, 8, 15, 16, 23, 42];

oddElementsOf(digits);    // returns [8, 16, 42]


/* Question 2
Problem:
        Write a function that takes an array argument
        Return a new array that contails all the arguments elements 
        in their original order followed by all the argument's elements in reverse order
*/

function mirroredArray(arr) {
  let newArray = arr.slice();

  for (let index = arr.length - 1; index > 0; index -= 1) {
    newArray.push(arr[index]);
  }

  return newArray;
}

mirroredArray([4, 8, 15, 16, 23, 42])

/* Question 3
Problem:
        Use the array sort method to create a function that takes an array of numbers
        return a new array of the numbers sorted in descending order. Do NOT alter
        the original array.f
*/

function sortDescending(arr) {
  let arrCopy = arr.slice();
  return arrCopy.sort((a, b) => b - a);
}

let array = [23, 4, 16, 42, 8, 15];
let result = sortDescending(array);  // returns [42, 23, 16, 15, 8, 4]
console.log(result);                 // logs    [42, 23, 16, 15, 8, 4]
console.log(array);                  // logs    [23, 4, 16, 42, 8, 15]


/* Question 4
Problem:
        Write a function that takes an array of arrays as an argument
        Return a new array that contains the sums of each of the 
        sub-arrays
*/

function matrixSums(arr) {
  let newArray = [];
  for(let index1 = 0; index1 < arr.length; index1 += 1){
    let sum = 0;
    for (let index2 = 0; index2 < arr[index1].length; index2 += 1){
      sum += arr[index1][index2];
    }
    newArray.push(sum);
  }
  return newArray;
}

matrixSums([[2, 8, 5], [12, 48, 0], [12]]);  // returns [15, 60, 12]

/* Question 5
Problem:
        Write a function that takes an array
        Return a new array with duplicate elements removed.
*/

function uniqueElements(arr) {
  let newArray = [];
  for (index = 0; index < arr.length; index += 1) {
    if (!newArray.includes(arr[index])) {
      newArray.push(arr[index]);
    }
  }
  return newArray;
}

uniqueElements([1, 2, 4, 3, 4, 1, 5, 4]);  // returns [1, 2, 4, 3, 5]



































