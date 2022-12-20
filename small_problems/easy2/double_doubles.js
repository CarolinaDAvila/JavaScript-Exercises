/*
  Problem:
          double number => even-length number whose left-side digits are exactly the same
          at its right side digits

*/

function twice(number) {
  let string = String(number);

  if (string.length % 2 !== 0) {
    return number * 2;
  }

  let dividingIndex = string.length / 2

  let string1 = ''
  let string2 = ''

  for (let idx in string) {
    if (idx < dividingIndex) {
      string1 += string[idx] 
    } else {
      string2 += string[idx]
    }
  }
  
  if (string1 === string2) {
    return number;
  } else {
    return number * 2;
  }
}


function isDouble(number) {
  if (String(number).length % 2 === 1) {
    return false;
  }

  let string = String(number);

  let first = string.slice(0, (string.length / 2))
  let second = string.slice(string.length / 2)

  return first === second;
}

function twice(number) {
  if (isDouble(number)) {
    return number;
  }

  return number * 2; 
}