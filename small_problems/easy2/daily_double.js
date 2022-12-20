// my solution

function crunch(string) {
  if (string === '') {
    return string;
  }

  let crunchString = string[0]

  for (let char of string) {
    let currentIndex = crunchString.length - 1
    if (char !== crunchString[currentIndex]) {
      crunchString += char;
    }
  }
  return crunchString;
}

// ls solution

function crunch(text) {
  let index = 0;
  let crunchText = ''

  while (index <= text.length - 1) {
    if (text[index] !== text[index + 1]) {
      crunchText += text[index];
    }

    index += 1
  }

  return crunchText;
}

// Similar solution that applies to my code

function crunch(string) {
  let crunchString = ''

  for (index = 0; index < string.length; index += 1) {
    if (string[index] !== string[index + 1]) {
      crunchString += string[index];
    }
  }
  return crunchString;
}


/*
Write function `crunch` with `string` as its parameter
Return a NEW string that contains the value of the original string
with all of the consecutive duplicate characters collapsed into a single
character

Examples

crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""

Algorithm:

- declare `result` and assign it to the first character of `string`
- declare `lastIndex` to the last index of `resultr``
- reassign `string` to
  - remove the first character from string
- iterate through the input `string`
- if the current character is not equal to the last character in `result` then 
  add it to `result`
*/

function crunch(string) {
  let result = string[0];
  string = string.slice(1);
  
  for (let index = 0; index < string.length; index += 1) {
    let lastIndex = result.length - 1;
    if (string[index] !== result[lastIndex]) {
      result += string[index];
    }
    lastIndex += 1;
  }
  if (result === undefined) {
    return '';
  }
  return result;

}

crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""

























































