function swapCase(string) {
  let result = '';
  string.split('').forEach(function(char) {
    if (char.match(/[A-Z]/)) {
      result += char.toLowerCase();
    } else if (char.match(/[a-z]/)) {
      result += char.toUpperCase();
    } else {
      result += char;
    }
  });
  return result;
}



console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"