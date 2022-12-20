/*
The Vigenere Cipher encrypts alphabetic text using polyalphabetic substitution. 

It uses a series of Caesar Ciphers based on the letters of a keyword. 
Each letter of the keyword is treated as a shift value. 
For instance, the letter 'B' corresponds to a shift value of 1, 
and the letter 'd' corresponds to a shift value of 3. 

In other words, the shift value used for a letter is equal to its index value in the alphabet. 
This means that the letters 'a'-'z' are equivalent to the numbers 0-25. 

The uppercase letters 'A'-'Z' are also equivalent to 0-25.

Applying the Vigenere Cipher is done sequentially for each character 
by applying the current shift value to a Caesar Cipher for that particular character. 

To make this more concrete, let's look at the following example:

Example:

plaintext: Pineapples don't go on pizzas!
keyword: meat

Applying the Vigenere Cipher for each alphabetic character:
plaintext : Pine appl esdo ntgo onpi zzas
shift     : meat meat meat meat meat meat
ciphertext: Bmnx mtpe qwdh zxgh arpb ldal

result: Bmnxmtpeqw dhz'x gh ar pbldal!

Notice that in the example, the key isn't moved forward if the character isn't in the alphabet. 
Like the Caesar Cipher, the Vigenere Cipher only encrypts alphabetic characters.

Write a function that implements the Vigenere Cipher. 
The case of the keyword doesn't matter—in other words, 
the resulting encryption won't change depending on the case of the keyword's letters 
(e.g., 'MEat' === 'mEaT').

Algorithm:
1. clean the input string
2. create a string with the keyword repeated till it reaches the full length if othe input string
3. declare a `result` variable and assign it to an empty string
4. iterate through the input string and through the keyword string
5. find the index of each character  in keyword from the alphabet and pass the current character and the index to
   encrypt and add it to the result
6. lastly place back spaces and grammer from the original string to the input one


you have a small string
you want to create a larger string that consists of the small string characters 

*/

// 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23
// m e a t m e a t m e  a  t  m  e  a  t  m  e  a  t  m  e  a  t

// 0 1 2
// r a b

const LOWER = 'abcdefghijklmnopqrstuvwxyz'.split('');
const UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

function getKeywordString(keyword, length) {
  let result = ''

  for (let idx = 0; result.length < length; idx += 1) {
    if (idx === keyword.length) idx = 0;
    result += keyword[idx];   
  }
  
  return result;
}

function encrypt(char, key) {
  let idx = LOWER.indexOf(char.toLowerCase());

  if (LOWER.includes(char)) {
    return LOWER[(idx + key) % LOWER.length];
  } else {
    return UPPER[(idx + key) % UPPER.length];   
  }
}

function originalGrammar(original, encrypted) {
  let result = '';
  
  for (let idx = 0; idx < original.length; idx += 1) {
    if (original[idx].match(/[a-z]/i)) {
      result += encrypted[0];
      encrypted = encrypted.slice(1);
    } else {
      result += original[idx];
    }    
  }
  
  return result;
}

function vigenereEncrypt(plainText, keyword) {
  let string = plainText.replace(/[^a-z]/gi, '');
  let keyString = getKeywordString(keyword, string.length);
  let result = '';
  
  for (let i = 0; i < string.length; i += 1) {
    let key = LOWER.indexOf(keyString[i].toLowerCase());
    result += encrypt(string[i], key);
  }
  
  return originalGrammar(plainText, result);
} 

console.log(vigenereEncrypt("Pineapples don't go on pizzas!", 'a') === "Pineapples don't go on pizzas!");
console.log(vigenereEncrypt("Pineapples don't go on pizzas!", 'Aa') === "Pineapples don't go on pizzas!");
console.log(vigenereEncrypt("Pineapples don't go on pizzas!", 'meat') === "Bmnxmtpeqw dhz'x gh ar pbldal!");
console.log(vigenereEncrypt("Pineapples don't go on pizzas!", 'cab') === "Riogaqrlfu dpp't hq oo riabat!");
console.log(vigenereEncrypt("Dog", "Rabbit") === "Uoh"); 


