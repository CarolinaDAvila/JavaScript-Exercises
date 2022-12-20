/*
Problem:
				Write function `wordSizes` with `string` as its parameter
				  - `string` consists of one or more space separated words
				Return an object that shows the number of words in different sizes

				Words consist of any sequence of non-space characters.

Explanation:
				Return an object where they 
						- keys are the length of the word
						- values are how many words in the input string have that length

Example:
				
wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('');                                            // {}

Data Structure:
				Input : String
				Output: Object
Algorithm:

- create function `wordSizes` and `string` as its parameter
- declare variable `wordArray` and assign it to: 
	- convert the input string to an array of words, delimiter being a space
- declare variable `result` and assign it to an empty object
- iterate through every word in `wordArray` 
	- declare `lengthKey` variable and assign it to the current words length (convert this to a string)
		- if `lengthKey` is not a key in `result` then create it with a value of 1
		- if `lengthKey` is a key in `result` then increment the `lengthKey` by one
- Return `result`

*/

function wordSizes(string) {
	let wordArray = string.split(' ');
	let result = {};

	if (string === '') {
		return result;
	}

	for (let index = 0; index < wordArray.length; index += 1) {
		let lengthKey = String(wordArray[index].length);
		if (result[lengthKey] === undefined) {
			result[lengthKey] = 1;
		} else {
			result[lengthKey] += 1;
		}
	}
	return result; 
}

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('');                                            // {}