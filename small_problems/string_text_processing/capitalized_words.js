function wordCap(sentence) {
  return sentence.split(' ').map(function(word) {
    if (word[0].match(/[a-z]/gi) !== null) {
      return word[0].toUpperCase() + word.slice(1).toLowerCase();
    } else {
      return word;
    }
  }).join(' ');
}

function wordCap(sentence) {
  return sentence.split(' ')
                 .map(word => word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase())
                 .join(' ');
}

function wordCap(string) {
  return string.split(' ').map(word => {
    return word[0].toUpperCase() + word.slice(1).toLowerCase()
  }).join(' ')
}

console.log(wordCap('four score and seven'));       // "Four Score And Seven"
console.log(wordCap('the javaScript language'));    // "The Javascript Language"
console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'