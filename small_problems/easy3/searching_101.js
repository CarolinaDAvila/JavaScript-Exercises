let first  = Number(prompt('Enter the 1st number:'));
let second = Number(prompt('Enter the 2nd number:'));
let third  = Number(prompt('Enter the 3rd number:'));
let fourth = Number(prompt('Enter the 4th number:'));
let fifth  = Number(prompt('Enter the 5th number:'));
let sixth  = Number(prompt('Enter the 6th number:'));

let array = [first, second, third, fourth, fifth];

if (array.includes(sixth)) {
	console.log(`The number ${sixth} appears in [${array}].`);
} else {
	console.log(`The number ${sixth} does not appear in [${array}].`);
}