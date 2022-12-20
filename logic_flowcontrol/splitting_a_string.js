/*
Problem:
        - Write function `splitString` with parameters `string` and `delimiter`
            - `string` is the string to be split
            - `delimiter` is the delimiter character
        - The function LOGS the split strings to the console
Example:
        function splitString(string, delimiter) {
          // …
        }

        splitString('abc,123,hello world', ',');
        // logs:
        // abc
        // 123
        // hello world

        splitString('hello');
        // logs:
        // ERROR: No delimiter              *** Possible to set a default value for delimeter

        splitString('hello', '');           *** have a guard for empty strings
        // logs:
        // h
        // e
        // l
        // l
        // o

        splitString('hello', ';');    * if the delimiter is not
        // logs:
        // hello

        splitString(';hello;', ';');  * have a gaurd for the string beginning with a delimiter
        // logs:
        //  (this is a blank line)
        // hello

- create `splitString` function with `string` and `delimiter` as its parameter
  - if delimeter is `undefined` then log Error
  - if delimeter is an empty string, then log each character in the string
    and explicitly return after 
  
  - declare `tempString` and assign it to an empty string
  - create a loop that iterate through every letter in the input `string`
  - create a conditional:
    - if the letter is equal to the delimiter
      - then log the value of `tempString`
      - reset `tempString` to an empty string
    - otherwise concatenate the current character of the string to `tempString`

  - lastly if `tempString` is truthy, (remember that ''is a falsey value) then 
  also log what is left in `tempString`
*/



function splitString(string, delimiter = 'none') {
  if (delimiter === 'none') {
    return console.log('Error: No delimiter')
  } else if (delimiter === '') {
    for (let letter of string) {
      console.log(letter);
    }
    return;
  }

  substring = ''
  for (let letter of string) {
    if (letter === delimiter){
      console.log(substring);
      substring = ''
    } else {
      substring += letter;
    }
  }
  if (substring !== '') {
    console.log(substring)
  }
}
