/*
Write a function logMultiples that takes one argument number. 
It should log all multiples of the argument between 0 and 100 (inclusive) 
that are also odd numbers. 
Log the values in descending order.

You may assume that number is an integer between 0 and 100.

*/

function logMultiples(number) {
  let array = [];
  for (let start = number; start <= 100; start += number) {
    if (start % 2 === 1) {
      array.push(start);
    }
  }
  array.reverse().forEach(function(num) {
    console.log(num);
  });
}