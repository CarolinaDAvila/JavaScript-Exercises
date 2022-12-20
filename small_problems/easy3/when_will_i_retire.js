let age = Number(prompt('What is your age?'));
let retireAge = Number(prompt('At what age would you like to retire?'));
let yearsLeft = retireAge - age;
currentYear = new Date().getFullYear();

let retireYear = Number(currentYear) + yearsLeft;

console.log(`It's ${currentYear}. You will retire in ${retireYear}.`);
console.log(`You have only ${yearsLeft} years of work to go!`);