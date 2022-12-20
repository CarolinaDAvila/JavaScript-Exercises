/*

leap years : year is divisible by 4, by 100, AND by 400
not leap year: year is divisible by 4 AND by 100 ONLY 

*/


function isLeapYear(year) {
  if (year % 4 === 0 && year % 100 === 0 && year % 400 === 0) {
    return true;
  } else if (year % 4 === 0 && year % 100 !== 0) {
    return true;
  } else {
    return false;
  }
}
