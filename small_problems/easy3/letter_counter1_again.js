/*
Problem:
        Write a function that takes a string consisting of one or more space
        separated words and returns an object that shows the number of words
        of different sizes. 

        Words consist of any sequence of non-space characters.

Understanding the Problem:
Input : a string that consists of one or more separated words
Output: return an object that shows the number of words in different sizes
        - The key: the size of the word
          - punctuation is included in the word if it is present
        - The value: amount of words that are the size of that key

A word is defined as a sequence of non-space characters


Examples:

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
3: 1, 4: 1, 5: 1, 6: 1

wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
3: 4, 6: 1, 7: 2

wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
2:1, 4:1, 6: 1

wordSizes('');                                            // {}
If an empty string is given then return an empty object

Data Structure:
Input : String of words
Output: Object

Rules: 
      Must Return an Object
      If the input is an empty string then return an empty object

Algorithm:

- Convert the input string to an array of words
  - iterate through the array fo words and transform them into their respective lengths
- Create an empty hash and if the key exists then add 1 to the value of that key,
 otherwise add that key and assign it to 1.

- Create function `wordSizes` with `sentence` as its parameter
- declare `lengths` and assign it to:
  - convert the input string to an array of words
  - transform `lengths` to finding the length of each word in the array
  - transform each length to a string as well
- declare `result` and assign it to an empty array
- iterate through every alphanumeric character in `lengths`
  - if the current element exists in `result` then increase the value to by 1
  - otherwise add the current element to the `result` array with a value of 1

*/

function wordSizes(sentence) {
  if (!sentence) {
    return {};
  }
  let lengths = sentence.split(' ').map(word => word.length).sort().map(num => String(num));
  let result = {};
  for (let alphanum of lengths) {
    if (Object.keys(result).includes(alphanum)) {
      result[alphanum] += 1;
    } else {
      result[alphanum] = 1;
    }
  }
  return result;
}

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('');                                            // {} 

