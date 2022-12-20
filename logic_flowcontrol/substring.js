/* 
Problem:
        Write a function that returns a substring of a string based on a starting index and length
Example:
        function substr(string, start, length) {
          // …
        }

        let string = 'hello world';

        substr(string, 2, 4);      // "llo "
        substr(string, -3, 2);     // "rl"
        substr(string, 8, 20);     // "rld"
        substr(string, 0, -20);    // ""
        substr(string, 0, 0);      // ""
*/

function substr(string, start, length) {
  if (start < 0) {
    start = string.length + start;
  }

  let newString = '';

  for (let counter = 0; counter < length; counter += 1) {
    let index = start + counter;

    if (string[index] === undefined) {
      break;
    }

    newString += string[index];
  }

  return newString;
}