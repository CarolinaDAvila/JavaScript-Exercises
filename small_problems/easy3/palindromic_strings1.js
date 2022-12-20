/*
Problem:
	Write function `isPalindrome` with `string` as its parameter
	Return `true` if the string passed in as an argument is a palindrome
	Return `false` otherwise.

	What is a palindrome? 
	A word/text that can be read forwards and backwards 

Examples:

isPalindrome('madam');               // true
isPalindrome('Madam');               // false (case matters)
isPalindrome("madam i'm adam");      // false (all characters matter)
isPalindrome('356653');              // true

EdgeCases :
	Implicit: - case matters
						- all characters matter
*/

function isPalindrome(string) {
	let reversedString = string.split('').reverse().join('');
	return string === reversedString;
}

isPalindrome('madam');               // true
isPalindrome('Madam');               // false (case matters)
isPalindrome("madam i'm adam");      // false (all characters matter)
isPalindrome('356653');              // true