function substrings(string) {
  let result = [];

  for (let i = 0; i < string.length; i += 1) {
    for (let j = 1; j <= string.length; j += 1) {
      if (string.slice(i, j) !== '') {
        result.push(string.slice(i, j));
      }
    }
  }
  return result;
}

function isPalindrome(string){
  return string === string.split('').reverse().join('')
}

function palindromes(string) {
  let substring_arr = substrings(string);
  substring_arr = substring_arr.filter(word => word.length > 1);
  let result = [];

  substring_arr.forEach(function(str) {
    if (isPalindrome(str)) {
      result.push(str);
    }
  });
  return result;
}

console.log(palindromes('abcd'));      
console.log(palindromes('madam'));     
console.log(palindromes('hello-madam-did-madam-goodbye'));
console.log(palindromes('knitting cassettes'));
