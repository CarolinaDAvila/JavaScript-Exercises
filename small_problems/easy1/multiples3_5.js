function getMultiplesArray35(number) {
  let multiples = []

  for (let num = 1; num <= number; num += 1) {
    if (num % 3 === 0 || num % 5 === 0) {
      multiples.push(num);
    }
  }
  return multiples;
}

function multisum(number) {
  let multiples = getMultiplesArray35(number);

  let sum = 0;
  for (let index = 0; index < multiples.length; index += 1) {
    sum += multiples[index];
  }
  return sum;
}