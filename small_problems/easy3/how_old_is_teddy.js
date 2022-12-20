function getRandomNum(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.round(Math.random() * (max - min) + min);
}


function getRandomNum(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1) + min);
}

getRandomNum(1, 3);

function getRandNum(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
