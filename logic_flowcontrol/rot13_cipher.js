/*
Problem:
        Rot13(çrotate by 13 places') is a letter-substitution cipher 
        that translates a String into a new String:

        For each character in the original String:

        - If the character is a letter in the modern english alphabet,
          Change it to the character 13 positions later in the alphabet. 
              - a becomes n
        - If you reach the end of the alphabet, return to the beginning. 
              - o becomes b

        Write function `rot13` with `string` as its parameter
        Return that string TRANFOMRED by the rot13 cipher.

EdgeCases:
        - Letter tranformations PRESERVE CASE-- CASE SENSITIVITY!
        - Do not modify characters that are not letters. 
        - If there is punctionatio / character is not a letter then 
          include it in the returned string

Examples:
          console.log(rot13('Teachers open the door, but you must enter by yourself.'));

          // logs:
          Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.
*/

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

console.log(rot13('Teachers open the door, but you must enter by yourself.'));
//                 Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.











