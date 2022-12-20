/*
Problem:
		Write a function that takes two arguments:
		1. an array
				- will contain two or more elements, when combined with spaces, 
				  produces a person's full name. 
		2. an object
				- will contain two keys: `title` and `occupation`
		Log a greeting tot he console that uses the person's full name
		Mentions the title and occupation

Example:

greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' });

// console output
Hello, John Q Doe! Nice to have a Master Plumber around.
*/


function greetings(nameArr, details) {
	let name = nameArr.join(' ');
	let keys = Object.keys(details);

	console.log(`Hello, ${name}! Nice to have a ${details[keys[0]]} ${details[keys[1]]} around.`)
}

greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' });

// console output
Hello, John Q Doe! Nice to have a Master Plumber around.