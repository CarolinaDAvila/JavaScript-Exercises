let bill = Number(prompt('What is the bill?'));
let tipPercentage = prompt('What is the tip percentage?');

let tip = Number('.' + tipPercentage) * bill;
let total = tip + bill;
console.log(`The tip is $${tip}`);
console.log(`The total is $${total}`);