/*
Write a function that implements the Caesar Cipher. 

The Caesar Cipher is one of the earliest and simplest ways to encrypt plaintext 
so that a message can be transmitted securely. 
It is a substitution cipher in which each letter in a plaintext is substituted by the letter 
located a given number of positions away in the alphabet. 

For example, if the letter 'A' is right-shifted by 3 positions, 
it will be substituted with the letter 'D'. 
This shift value is often referred to as the key. 
The "encrypted plaintext" (ciphertext) can be decoded using this key value.

The Caesar Cipher only encrypts letters (including both lower and upper case). 
Any other character is left as is. 

The substituted letters are in the same letter case as the original letter. 

Problem:

Write function `caesarEncrypt` with two parameters, `string` and `key`
that return an encrypted string.

Each character in the input string is encrypted UNLESS the character is non-alphabetic

Rules:
- The substituted letter in the return string MUST be in the same letter case as the orignal letter
  - CASE SENSITIVE
- IF the character is non-alphabetic, leave it AS IS
- If the key value for shifting exceeds the length of the alphabet, it wraps around from the beginning.


Examples:
// simple shift
caesarEncrypt('A', 0);       // "A"
caesarEncrypt('A', 3);       // "D"

// wrap around
caesarEncrypt('y', 5);       // "d"
caesarEncrypt('a', 47);      // "v"

// all letters
caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25);                  => "ZABCDEFGHIJKLMNOPQRSTUVWXY"
caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5); => "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// many non-letters
caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2);
// "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"

Data Structure:
        Input : String
        Output: String

Algorithm:

*/
const LOWER = 'abcdefghijklmnopqrstuvwxyz'.split('');
const UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

function encrypt(char, key) {
  let idx = LOWER.indexOf(char.toLowerCase());

  if (LOWER.includes(char)) {
    return LOWER[(idx + key) % LOWER.length];
  } else {
    return UPPER[(idx + key) % UPPER.length];   
  }
}

function caesarEncrypt(string, key) {
  let result = '';
  let array = string.split('');
    
  array.forEach(function(char) {
    if (char.match(/[a-z]/i)) {
      result += encrypt(char, key);
    } else {
      result += char;
    }
  });
  return result;
}

console.log(caesarEncrypt('A', 0) == "A");
console.log(caesarEncrypt('A', 3) == "D");
console.log(caesarEncrypt('y', 5) == "d");
console.log(caesarEncrypt('a', 47) == "v");
console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25) === "ZABCDEFGHIJKLMNOPQRSTUVWXY");
console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5) ==="Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"); 
console.log(caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2) === "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?");


caesarEncrypt('A', 0);       // "A"
caesarEncrypt('A', 3);       // "D"
caesarEncrypt('y', 5);       // "d"
caesarEncrypt('a', 47);      // "v"
caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25); // "ZABCDEFGHIJKLMNOPQRSTUVWXY"
caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5); // "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"
caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2); // "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"