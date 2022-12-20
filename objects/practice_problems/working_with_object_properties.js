/* Question 1
Problem: 
        Write a function named `objectHasProperty` that takes two arguments:
        1. an object
        2. a string
        Return `true` if the object contains a property with the name given by the input String
        Return 'false' otherwise
*/

function objectHasProperty(object, string) {
  let keysArray = Object.keys(object);
  return keysArray.includes(string);
}

let pets = {
  cat: 'Simon',
  dog: 'Dwarf',
  mice: null,
};

objectHasProperty(pets, 'dog');       // true
objectHasProperty(pets, 'lizard');    // false
objectHasProperty(pets, 'mice');      // 

/* Question 2
Problem:
        Write a function named `incrementProperty` that takes two arguments:
        1. an Object
        2. a String
        If the object contains a property with the specified name,
          increment the value of that property
        If the property does not exis
          add a new property with a value of `1`.
        Return the new value of the property. 
*/

function incrementProperty(object, key) {
  if (object[key]) {
    object[key] += 1;
  } else {
    object[key] = 1;
  }

  return object[key];
}

let wins = {
  steve: 3,
  susie: 4,
};

incrementProperty(wins, 'susie');   // 5
wins;                               // { steve: 3, susie: 5 }
incrementProperty(wins, 'lucy');    // 1
wins;                               // { steve: 3, susie: 5, lucy: 1 }

/* Question 3
Problem:
        Write a function named `copyProperties` that takes 
        Two Objects as arguments
        The function should copy all properties from the first object
          to the second.
        Return the number of properties copied.
*/

function copyProperties(fullObj, copyObj) {
  let count = 0;
  for (let key in fullObj) {
    copyObj[key] = fullObj[key];
    count += 1;
  }

  return count;
}

let hal = {
  model: 9000,
  enabled: true,
};

let sal = {};
copyProperties(hal, sal);  // 2
sal;                       // { model: 9000, enabled: true }

/* Question 4
Problem:
        Write a function named `wordCount`
        takes one string as an argument
        Return an Object that continas the counts of each word that appears in the input string
        Use the words as keys, counts as values
*/

function removeDuplicates(string) {
  let resultArr = [];
  string.split(' ').forEach(function(word) {
    if (!resultArr.includes(word)) {
      resultArr.push(word);
    }
  });
  return resultArr;
}

function wordCount(string) {
  let resultObj = {};
  let removedDuplicates = removeDuplicates(string);
  let duplicates = string.split(' ');

  removedDuplicates.forEach(function(word) {
    let count = 0;
    for (let index = 0; index < duplicates.length; index += 1) {
      if (duplicates[index] === word) {
        count += 1
      }
    }
    resultObj[word] = count;
  });

  return resultObj;
}

wordCount('box car cat bag box');  // { box: 2, car: 1, cat: 1, bag: 1 }

// LS Solution

function wordCount(text) {
  let count = {};
  let words = text.split(' ');

  for (let index = 0; index < words.length; index += 1) {
    let word = words[index];
    if (!count[word]) {
      count[word] = 0;
    }

    count[word] += 1;
  }

  return count; 
}

wordCount('box car cat bag box');  // { box: 2, car: 1, cat: 1, bag: 1 }





















































































































































