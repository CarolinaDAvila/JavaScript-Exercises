/*
Problem:
        Write a function that takes a string as an argument
        Return the string STRIPPED of spaces from both eds

        Do not remove or alter internal spaces. 
Examples:
        trim('  abc  ');  // "abc"
        trim('abc   ');   // "abc"
        trim(' ab c');    // "ab c"
        trim(' a b  c');  // "a b  c"
        trim('      ');   // ""
        trim('');         // ""
*/



function trimLeadingSpaces(string) {
  let first_char = undefined;
  for (let index = 0; index < string.length; index += 1){
    if (string[index] != ' ') {
      first_char = index;
      break;
    }   
  }

  result_string = ''

  for (let index = first_char; index < string.length; index += 1){
    result_string += string[index];
  }
  return result_string;
}

function trimTrailingSpaces(string) {
  let last_char = undefined

  for (let index = string.length - 1; index > 0; index -= 1) {
    if (string[index] != ' ') {
      last_char = index;
      break;
    }
  }

  result_string = ''

  for (let index = 0; index <= last_char; index += 1){
    result_string += string[index];
  }
  return result_string;
}

function trim(string) {
  let result_string = trimLeadingSpaces(string);
  result_string = trimTrailingSpaces(result_string);
  
  return result_string;
}









