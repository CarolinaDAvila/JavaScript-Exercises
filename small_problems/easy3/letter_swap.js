/*
Problem: 
				Write function `swap` with `text` as its parameter
				Swap the first and last letter of every word.
*/

function swap(text) {
	let words = text.split(' ');
	let result = [];
	for (index = 0; index < words.length; index += 1) {
		let currentWord = words[index];
		let lastIndex = currentWord.length - 1;
		let word = '';

		for (let idx in currentWord) {
			if (Number(idx) === 0) {
				word += currentWord[lastIndex];
			} else if (Number(idx) === lastIndex) {
				word += currentWord[0];
			} else {
				word += currentWord[Number(idx)];
			}
		}
		result.push(word);
	}
	return result.join(' ');
}

swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a"

function swap(text) {
	let words = text.split(' ');
	let result = [];
	for (index = 0; index < words.length; index += 1) {
		let currentWord = words[index];
		let lastIndex = currentWord.length - 1;
		let word = '';

		for (let idx = 0; idx < currentWord.length; idx += 1) {
			if (idx === 0) {
				word += currentWord[lastIndex];
			} else if (idx === lastIndex) {
				word += currentWord[0];
			} else {
				word += currentWord[idx];
			}
		}
		result.push(word);
	}
	return result.join(' ');
}


// LS Solution Hard Code it

function swap(words) {
	const wordsArray = words.split(' ');

	for (let i = 0; i < wordsArray.length; i += 1) {
		wordsArray[i] = swapFirstLastCharacters(wordsArray[1]);
	}

	return wordsArray.join(' ');
}

function swapFirstLastCharacters(word) {
	if (word.length === 1) {
		return word;
	}

	return word[word.length - 1] + word.slice(1, -1) + word[0];
}



































