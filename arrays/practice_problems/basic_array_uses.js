/* Question 1
Problem: 
        Write a function that returns the first element of an array passed in as an argument.
*/

function firstElementOf(arr) {
  return arr[0];
} 

/* Question 2
Problem:
        Write a function that returns the last element of an array passed in as an argument.
*/  

function lastElementOf(arr) {
  return arr[arr.length - 1];
}


/* Question 3
Problem:
        Write a function that accepts two arguments: 
        1. an array
        2. an integer index position
        Return the element at the given index.        
*/

function nthElementOf(arr, index) {
  return arr[index];
}

/* Question 4
Problem:
        Can we insert data into an array at a negative index?

        Yes.
*/

/* Question 5
Problem:
        Write a function that accepts two arguments:
        1. an array 
        2. an integer value `count`
        Return a NEW array that contains the first count elements of the array?
*/ 

function firstNOf(arr, count) {
  let newArray = [];

  for (let index = 0; index < count; index += 1) {
    newArray.push(arr[index]);
  }

  return newArray;
}

let digits = [4, 8, 15, 16, 23, 42];
firstNOf(digits, 3);    // returns [4, 8, 15]

//ls 

function firstNOf(arr, count) {
  return arr.slice(0, count);
}

/* Question 6
Problem:
        Write a function like the previous one, except this time return the last `count` 
        elements as a new array.
*/
// my solution

function lastNOf(arr, count) {
  let end = arr.length;
  return arr.slice(count, end);
}

//ls solution

function lastNOf(arr, count) {
  return arr.slice(arr.length - count);
}

let digits = [4, 8, 15, 16, 23, 42];
lastNOf(digits, 3);

/* Question 7
Problem:
      
*/

function lastNOf(arr, count) {
  if (count > arr.length) {
    return arr;
  }

  return arr.slice(arr.length - count);
}

/* Question 8
Problem:
        Write a function that accepts two arrays as arguments
        Return an array with the first element from the first array 
        And the last element from the second array. 
*/

function endsOf(beginningArr, endingArr) {
  return [beginningArr[0], endingArr[endingArr.length - 1]];
}

endsOf([4, 8, 15], [16, 23, 42]);






































