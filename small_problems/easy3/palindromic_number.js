function isPalindrome(string) {
	let reversedString = string.split('').reverse().join('');
	return string === reversedString;
}

function isPalindromicNumber(digit) {
	return isPalindrome(String(digit));
}

isPalindromicNumber(34543);        
isPalindromicNumber(123210);      
isPalindromicNumber(22);           
isPalindromicNumber(5);   


// LS Solution ONE LINER

function isPalindromicNumber(number) { return isPalindrome(String(number)) }