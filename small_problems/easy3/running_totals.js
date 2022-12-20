/*
Problem:
				Write function `runningTotal` with `array` as its parameter
					- accepts an array of number elements
				Return an array with the same number of elements 
					- with each element's value being the running total from the original array

*/

function runningTotal(array) {
	let resultArray = [];
	let runningNum = 0;
	for (let index = 0; index < array.length; index += 1) {
		resultArray.push(runningNum += array[index]);
	}
	return resultArray;
}

runningTotal([2, 5, 13]);             
runningTotal([14, 11, 7, 15, 20]);    
runningTotal([3]);                    
runningTotal([]);                     