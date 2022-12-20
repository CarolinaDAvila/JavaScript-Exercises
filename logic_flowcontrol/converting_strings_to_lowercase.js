/*
Problem:
        Write a function that returns a string converted to lowercase.

*/

function toLowerCase(string) {
  const ALPHABET = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 
                    'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 
                    't', 'u', 'v', 'w', 'x', 'y', 'z',];

  let resultString = '';

  for (index = 0; index < string.length; index += 1) {
    if (!ALPHABET.includes(string[index])) {
      if (Number.isInteger(Number(string[index]))) {
        resultString += string[index] 
      } else {
        let asciiNumeric = string[index].charCodeAt(0) + 32;
        resultString += String.fromCharCode(asciiNumeric);        
      }
    } else { 
      resultString += string[index]
    }
  }
  return resultString;
}

toLowerCase('ALPHABET');    // "alphabet"
toLowerCase('123');         // "123"
toLowerCase('abcDEF');      // "abcdef"