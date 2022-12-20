/*
Problem:
        Create function `gcd` with parameters `num1` and `num2`
        That computes the greatest common divisor of two positive integers
Examples:
        gcd(12, 4);   // 4
        gcd(15, 10);  // 5
        gcd(9, 2);    // 1
Algorithm:
        Find the divisors for each input number and store them in two separate arrays that
        that are sorted and in descending order

*/

function divisors(number) {
  result = []
  for (let divisor = 1; divisor <= number; divisor += 1) {
    if (number % divisor === 0) {
      result.push(divisor)
    }
  }
  return result.reverse()
}

function gcd(num1, num2) {
  divisorsNum1 = divisors(num1)
  divisorsNum2 = divisors(num2)

  let commonDivisors = [];

  divisorsNum1.forEach(function(num) {
    if (divisorsNum2.includes(num)) {
      commonDivisors.push(num);
    }
  });
  return commonDivisors[0];
}