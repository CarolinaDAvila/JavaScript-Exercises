// function wordToDigit(text) {
//   const ALPHANUM = ['zero', 
//                     'one', 
//                     'two', 
//                     'three', 
//                     'four', 
//                     'five', 
//                     'six',
//                     'seven',
//                     'eight',
//                     'nine', 
//                     ]
//   let cleaned = text.replace(/[^a-zA-Z ]/gi, '');
//   let result = cleaned.split(' ').map(function(word) {
//     if (ALPHANUM.includes(word)) {
//       return ALPHANUM.indexOf(word);
//     } else {
//       return word;
//     }
//   }).join(' ');

//   return result;
// }


// function wordToDigit(text) {
//   const ALPHANUM = ['zero', 
//                     'one', 
//                     'two', 
//                     'three', 
//                     'four', 
//                     'five', 
//                     'six',
//                     'seven',
//                     'eight',
//                     'nine', 
//                     ]
//   // let regex = new RegExp()
//   //let cleaned = text.replace(/[^a-zA-Z ]/gi, '');
//   let result = text.split(' ').map(function(word) {
//     if (ALPHANUM.includes(word.replace(/[^a-zA-Z ]/gi, ''))) {
//       return ALPHANUM.indexOf(word.replace(/[^a-zA-Z ]/gi, ''));
//     } else {
//       return word;
//     }
//   }).join(' ');

//   return result;
// }

function wordToDigit(text) {
  const ALPHANUM = ['zero', 
                    'one', 
                    'two', 
                    'three', 
                    'four', 
                    'five', 
                    'six',
                    'seven',
                    'eight',
                    'nine', 
                    ]
  let result = text.split(' ').map(function(word) {
    if (ALPHANUM.includes(word)) {
      return ALPHANUM.indexOf(word);
    }else if (ALPHANUM.includes(word.replace(/[^a-zA-Z ]/gi, ''))) {
      let part = String(ALPHANUM.indexOf(word.replace(/[^a-zA-Z ]/gi, '')));
      return part + word[word.length - 1];
    } else {
      return word;
    }
  }).join(' ');

  return result;
}

const ALPHANUM = {
  zero:  0,
  one:   1,
  two:   2,
  three: 3,
  four:  4,
  five:  5,
  six:   6,
  seven: 7,
  eight: 8,
  nine:  9,
};

function wordToDigit(text) {
  Object.keys(ALPHANUM).forEach(word => {
    let regex = new RegExp(word, 'g');
    text = text.replace(regex, ALPHANUM[word]);
  });
  
  return text; 
}
console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."



























