/*
 Problem: 
          Write a function that takes a string and returns an object containing the 
          following three properties:

          1. the percentage of characters in the string that are lowercase letters
          2. the percentage of characters that are uppercase letters
          3. the percentage of characters that are neither

          You may assume that the string will always contain at least one character.

Examples:

letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

*/

function countLetters(string) {
  let characters = {
    lowercase: 0,
    uppercase: 0,
    neither: 0,
  };

  string.split('').forEach(function(char) {
    if (char.match(/[a-z]/) !== null) {
      characters['lowercase'] += 1;
    } else if (char.match(/[A-Z]/) !== null) {
      characters['uppercase'] += 1;
    } else if (char.match(/[^a-zA-Z]/) !== null) {
      characters['neither'] += 1;
    }
  });

  return characters;
}

function letterPercentages(string) {
  let characters = countLetters(string);

  for (let key in characters) {
    characters[key] = ((characters[key] / string.length) * 100).toFixed(2);
  }

  return characters;
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }