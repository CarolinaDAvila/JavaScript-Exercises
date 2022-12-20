//	Question 1

let today = new Date();

//	Question 2

let today = new Date();
console.log("Today's day is " + String(today.getDay()));

//	Question 3

let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
let today = new Date();
console.log("Today's day is " + daysOfWeek[today.getDay()]);

//	Question 4

let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
let today = new Date();

console.log(`Today's day is ${daysOfWeek[today.getDay()]} the ${today.getDate()}th.`);


//	Question 5

function getArray(integer) {
	return String(integer).split('').map(char => Number(char));
}

function dateSuffix(dayDate) {
	let array = getArray(dayDate);
	if (array[1] === 1 && dayDate !== 11) {
		return 'st';
	} else if (array[0] === 1) {
		return 'th';
	} else if (array[1] === 2) {
		return 'nd';
	} else if (array[1] === 3) {
		return 'rd';
	} else {
		return 'th';
	}
}

//	Question 12

let nextWeek = today;

//	Question 13
//	Question 14