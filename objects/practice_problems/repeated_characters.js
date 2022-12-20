/*
Problem:
				Create function `repeatedCharacters` 
				Takes a String as an argument
				Returns an object that contains a count of the REPEATED characters
Example:

repeatedCharacters('Programming');    // { r: 2, g: 2, m: 2 }
repeatedCharacters('Combination');    // { o: 2, i: 2, n: 2 }
repeatedCharacters('Pet');            // {}
repeatedCharacters('Paper');          // { p: 2 }
repeatedCharacters('Baseless');       // { s: 3, e: 2 }

Data Structure
				Input: string
				Output: object
Algorithm:

*/

// Solution 1 

function removedDuplicates(string) {
	let resultString = '';
	for (let char of string) {
		if (!resultString.includes(char)) {
			resultString += char;
		}
	}
	return resultString;
}

function repeatedCharacters(string) {
	let result = {};
	string = string.toLowerCase();
	singleChars = removedDuplicates(string);
	for (let char of singleChars) {
		let count = 0;
		for (let index = 0; index < string.length; index += 1) {
			if (char === string[index]) {
				count += 1
			}
		}
		if (count >= 2) {
			result[char] = count;
		}
	}

	return result;
}


repeatedCharacters('Programming');    // { r: 2, g: 2, m: 2 }
repeatedCharacters('Combination');    // { o: 2, i: 2, n: 2 }
repeatedCharacters('Pet');            // {}
repeatedCharacters('Paper');          // { p: 2 }
repeatedCharacters('Baseless');       // { s: 3, e: 2 }

// Solution 2

function repeatedCharacters(string) {
	string = string.toLowerCase();
	let tentative = {};
	for (let char of string) {
		if (Object.keys(tentative).includes(char)) {
			tentative[char] += 1;
		} else {
			tentative[char] = 1;
		}
	}

	let result = {};

	for (let key in tentative) {
		if (tentative[key] >= 2) {
			result[key] = tentative[key];
		}
	}
	return result; 
}













































