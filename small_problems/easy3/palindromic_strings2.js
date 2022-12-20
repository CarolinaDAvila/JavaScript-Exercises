/*
Problem:
	Write function `isPalindrome` with `string` as its parameter
	Return `true` if the string passed in as an argument is a palindrome
	Return `false` otherwise.

	What is a palindrome? 
	A word/text that can be read forwards and backwards 

Examples:

isRealPalindrome('madam');               // true
isRealPalindrome('Madam');               // true (case does not matter)
isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
isRealPalindrome('356653');              // true
isRealPalindrome('356a653');             // true
isRealPalindrome('123ab321');            // false

EdgeCases :
	Explicit: 
			  - case insensitive
			  - ignore all non-alphanumeric characters 
*/

function isPalindrome(string) {
	let reversedString = string.split('').reverse().join('');
	return string === reversedString;
}

function isRealPalindrome(string) {
	const ALPHANUMERIC = 'abcdefghijklmnopqrstuvwxyz0123456789'.split('');
	let cleanedString = '';
	for (let char of string.toLowerCase()) {
		if (ALPHANUMERIC.includes(char)) {
			cleanedString += char;
		}
	}
	return isPalindrome(cleanedString);
}

isRealPalindrome('madam');               // true
isRealPalindrome('Madam');               // true (case does not matter)
isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
isRealPalindrome('356653');              // true
isRealPalindrome('356a653');             // true
isRealPalindrome('123ab321');            // false