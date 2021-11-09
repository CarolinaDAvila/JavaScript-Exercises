function rot13(string) {
  const ROTATOR = 13;
  const ALPHABET_LENGTH = 26;
  const LOWER_ALPHABET = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 
                         'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ];
  const UPPER_ALPHABET = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 
                         'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  
  let rotatedString = '';
  for (let char of string) {
    if (LOWER_ALPHABET.includes(char)) {
      let index = LOWER_ALPHABET.indexOf(char);
      rotatedString += LOWER_ALPHABET[(index + ROTATOR) % ALPHABET_LENGTH];
    } else if (UPPER_ALPHABET.includes(char)) {
      let index = UPPER_ALPHABET.indexOf(char);
      rotatedString += UPPER_ALPHABET[(index + ROTATOR) % ALPHABET_LENGTH];
    } else {
      rotatedString += char;
    }
  }

  return rotatedString;
}