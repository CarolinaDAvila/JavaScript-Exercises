let length = prompt('Enter the length of the room in meters:');
let width = prompt('Enter the width of the room in meters:');

let squareMeters = length * width;
let squareFeet = squareMeters * 10.7639;
console.log(`The area of the room is ${squareMeters} square meters (${squareFeet} square feet).`)