function repeater(word) {
  let characters = word.split('');
  let doubled = '';
  for (let char of characters) {
    doubled += char;
    doubled += char;
  }
  return doubled;
}


function repeater(word) {
  let characters = word.split('');
  let doubled = '';
  for (let char of characters) {
    for (let times = 0; times < 2; times += 1) {
      doubled += char;
    }
  }
  return doubled;
}
console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""