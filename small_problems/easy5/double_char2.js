function doubleConsonants(string) {
  const CONSONANTS = 'bcdfghjklmnpqrstvwxyz'.split('');
  let result = [];

  for (let char of string) {
    if (CONSONANTS.includes(char.toLowerCase())) {
      result.push(char, char);
    } else {
      result.push(char);
    }
  }
  return result.join('');
}


console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""

console.log(doubleConsonants('String') === "SSttrrinngg")
console.log(doubleConsonants('Hello-World!') === "HHellllo-WWorrlldd!")
console.log(doubleConsonants('July 4th') === "JJullyy 4tthh")
console.log(doubleConsonants('') === "")