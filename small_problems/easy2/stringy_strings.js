function stringy(number) {
  let string = ''

  for (let num = 1; num <= number; num += 1) {
    if (num % 2 === 0) {
      string += '0';
    } else {
      string += '1'
    }
  }

  return string;
}

// another with ternary 

function stringy(number) {
  let string = ''

  for (let num = 1; num <= number; num += 1) {
    num % 2 === 0 ? string += '0' : string += '1';
  }

  return string;
}