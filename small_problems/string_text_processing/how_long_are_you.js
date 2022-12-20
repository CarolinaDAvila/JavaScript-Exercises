function wordLengths(string) {
  if (string === '' || string === undefined) {
    return [];
  }
  
  let result = [];
  let wordsArr = string.split(' ');
  let lengths = wordsArr.map(word => String(word.length));

  for (let i = 0; i < wordsArr.length; i += 1) {
    result.push(`${wordsArr[i]} ${lengths[i]}`);
  }
  return result;
}

console.log(wordLengths('cow sheep chicken')); // ["cow 3", "sheep 5", "chicken 7"]
console.log(wordLengths('baseball hot dogs and apple pie')); // ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]
console.log(wordLengths("It ain't easy, is it?")); // ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]
console.log(wordLengths('Supercalifragilisticexpialidocious')); // ["Supercalifragilisticexpialidocious 34"]
console.log(wordLengths(''));      // []
console.log(wordLengths());        // []

wordLengths('cow sheep chicken'); // ["cow 3", "sheep 5", "chicken 7"]
wordLengths('baseball hot dogs and apple pie'); // ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]
wordLengths("It ain't easy, is it?"); // ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]
wordLengths('Supercalifragilisticexpialidocious'); // ["Supercalifragilisticexpialidocious 34"]
wordLengths('');      // []
wordLengths();        // []