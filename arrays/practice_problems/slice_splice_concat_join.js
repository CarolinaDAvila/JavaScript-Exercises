/* Question 1:
Problem:  Write a function named `slice` that accepts THREE arguments:
          1. an array
          2. a start index
          3. an end index
          Return a NEW array that contains values from the original array
          starting with the value at the starting index
          and INCLUDING all values up to BUT NOT including the end index.
          DO NOT MODIFY the orignal array
*/

function push(array, element) {
  array[array.length] = element;
  return array.length;
}

function slice(array, start, end) {
  let newArray = [];
  for (let index = start; index < end; index += 1) {
    push(newArray, array[index]);
  }

   return newArray;
}

/* Question 2:
Problem:  Write a function named `splice` that accepts three arguments:
          1. Array
          2. Start index
          3. Number of values to remove
          The function should remove values from the original array
          starting with the first index and removing the specified number of values.
          The function should RETURN the removed values in a NEW ARRAY.
*/

function push(array, element) {
  array[array.length] = element;
  return array.length;
}

function splice(array, begin, number) {
  let removedValues = [];
  for (let index = begin; index < array.length; index += 1) {
    if (index < begin + number) {
      push(removedValues, array[index]);
    }

    array[index] = array[index + number];
  }

  array.length = array.length - removedValues.length;
  return removedValues;
}

/* Question 3:
Problem:  Write a function named `concat` that accepts two array arguments
          Return a NEW array tha tcontains the values from each of the orgininal arrays
*/

function push(array, element) {
  array[array.length] = element;
  return array.length;
}

function concat(arr1, arr2) {
  let concatArray = [];
  let nestedArray = [arr1, arr2] // [[1, 2, 3], [4, 5, 6]]
  for (let index = 0; index < nestedArray.length; index += 1) {
    for (let nindex = 0; nindex < nestedArray[index].length; nindex += 1) {
      push(concatArray, nestedArray[index][nindex]);
    }
  }

  return concatArray;
}

concat([1, 2, 3], [4, 5, 6]);       // [ 1, 2, 3, 4, 5, 6 ]

/* Question 4:
Problem:  Write a function named `join` that accepts two argument:
          1. an Array
          2. a String
          The function should COERCE each value in the array to a String.
          Then join those values together using hte second argument as a separator.
          The separator will ALWAYS be passed; 
*/

function join(array, separator) {
  let string = '';
  for (let index = 0; index < array.length - 1; index += 1) {
    string += String(array[index]) + separator;
  }
  return string + array[array.length - 1];
}

join(['bri', 'tru', 'wha'], 'ck ');       // 'brick truck wha'
join([1, 2, 3], ' and ');                 // '1 and 2 and 3'






























