function cleanUp(text) {
  const ALPHABET = 'abcdefghijklmnopqrstuvwxyz '.split('');

  let cleanedString = '';
  for (let idx in text) {
    if (!ALPHABET.includes(text[idx]) && ALPHABET.includes(text[idx + 1])) {
      cleanedString += ' ';    
    } else {
      cleanedString += text[idx];
    }
  }
  return cleanedString;
}

function cleanUp(text) {
  const ALPHABET = 'abcdefghijklmnopqrstuvwxyz '.split('');
  
  let cleanedString = '';

  for (index = 0; index < text.length; index += 1) {
    let char = text[index];
    let idx = cleanedString.lastIndexOf(' ')
    
    if (ALPHABET.includes(char)) {
      cleanedString += char;
    } else if  (!ALPHABET.includes(char)) {
        if (cleanedString === '') {
          cleanedString += ' ';
      } else if (' ' !== cleanedString[idx]) {
        cleanedString += ' ';
      }
    }
  }

  return cleanedString;  
}

function cleanUp(string) {
  const ALPHABET = 'abcdefghijklmnopqrstuvwxyz '.split('');
  let cleanedString = '';
  
  for (let index = 0; index < string.length; index += 1) {
    
    let char = string[index];

    if (ALPHABET.includes(char)) {
      cleanedString += char;
    } else if (!ALPHABET.includes(char)) {
        if (ALPHABET.includes(string[index + 1]) &&
          cleanedString[cleanedString.lastIndexOf(' ')] !== ' ' || 
            string[index + 1] === undefined) {
          cleanedString += ' ';
        }
    }
  }
  return cleanedString;
}

cleanUp("---what's my +*& line?");  






































