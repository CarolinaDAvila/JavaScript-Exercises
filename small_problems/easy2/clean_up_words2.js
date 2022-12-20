/*
Problem:
		Write function `cleanUp`  with `string` as its paremeter
		Return that string with all of the non-alphabetic letters replaced by spaces. 
		If one or more non-alphabetic charaacters occur in a row, 
			you should only have one space in the result. 
			Result should never have consecutive spaces. 
*/

function cleanUp(string) {
	const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'.split('');
	let array = string.split(' ');
	let result = [];

	for (let index = 0; index < array.length; index += 1) {
		let word = array[index];
		let currentWord = '';
		for (let char of word) {
			if (ALPHABET.includes(char)) {
				currentWord += char
			} else if (currentWord[currentWord.length - 1] !== ' ') {
				currentWord += ' ';
			}
		}

		if (currentWord.trim() !== '') {
		result.push(currentWord);
		}
	}

	return result.join(' ');
}

cleanUp("---what's my +*& line?");    // " what s my line "