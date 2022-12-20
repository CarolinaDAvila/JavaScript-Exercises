function average(num1, num2, num3){
  return (num1 + num2 + num3) / 3
}

function getGrade(scr1, scr2, scr3) {
  let avg = average(scr1, scr2, scr3);

  let grade = 'F';
  if (avg >= 90 && avg <= 100) {
    grade = 'A';
  } else if (avg >= 80 && avg < 90) {
    grade = 'B';
  } else if (avg >= 70 && avg < 80) {
    grade = 'C';
  } else if (avg >= 60 && avg < 70) {
    grade = 'D';
  }
  return grade; 
}