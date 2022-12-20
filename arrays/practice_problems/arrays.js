// Question 1

// My Solution
function lastInArray(array) {
  return array[array.length - 1];
}

lastInArray([1, 2, 3, 4, 5])

// LS Solution using an arrow function

let lastInArray = array => array[array.length - 1];

console.log(lastInArray([1, 2, 3, 4]));

// Question 2

function rollCall(array) {
  for (let index = 0; index < array.length; index += 1) {
    console.log(array[index]);
  }
}

rollCall(['Carolina', 'Cassie', 'Petunia', 'Roslyn']);

// Question 3

function reversedArray(array) {
  let reverse = [];

  for (let index = array.length - 1; index >= 0; index -= 1) {
    reverse.push(array[index]);
  }
  return reverse; 
}


reversedArray(['Carolina', 'Cassie', 'Petunia', 'Roslyn']);

// Question 4

function arrayToString(array) {
  string = ''
  for (let index = 0; index < array.length; index += 1) {
    string += String(array[index]);
  }

  return string;
}

arrayToString([1, 'a', 4])