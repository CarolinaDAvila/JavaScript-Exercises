/*
Problem:
        Write a function that counts the number of occurrences
        of each element in a given array. 
        Once counted, log each element alongside the number of 
        occurrences.
Example:

const vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2

*/

function logOccurrences(occurrences) {
  for (let key in occurrences) {
    console.log(`${key} => ${occurrences[key]}`);
  }
}

function countOccurrences(occurrences) {
  let single_occurrences = [];

  for (let index = 0; index < occurrences.length; index += 1) {
    let word = occurrences[index];
    if (Object.keys(single_occurrences).includes(word)) {
      single_occurrences[word] += 1;
    } else {
      single_occurrences[word] = 1;
    }
  }
  return logOccurrences(single_occurrences);
}

const vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2