/*
Problem:
        Write a program to determine a student's grade
        based on the average of three scores you get from the user

        - If the average score is greater than or equal to 90 
            - then the grade is 'A'
        - If the average score is greater than or equal to 70 and less than 90 
            - then the grade is 'B'
        - If the average score is greater than or equal to 50 and less than 70 
            - then the grade is 'C'
        - If the average score is less than 50 
            - then the grade is 'F'
*/

let scoreOne = Number(prompt('Enter Score 1:'));
let scoreTwo = Number(prompt('Enter Score 2:'));
let scoreThree = Number(prompt('Enter Score 3:'));

function average(value1, value2, value3) {
  return (value1 + value2 + value3) / 3;
}

let averageScore = average(scoreOne, scoreTwo, scoreThree);

let grade = undefined;

if (averageScore >= 90) {
  grade = 'A';
} else if (averageScore < 90 && averageScore >= 70) {
  grade = 'B';
} else if (averageScore < 70 && averageScore >= 50) {
  grade = 'C';
} else {
  grade = 'F';
}

console.log(`Based on the average of your 3 scores your letter grade is '${grade}'`);