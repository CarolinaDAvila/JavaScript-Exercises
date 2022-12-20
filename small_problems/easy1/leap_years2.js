function isLeapYear(year) {
  const JULIAN_CALENDAR = 1751

  if (year <= JULIAN_CALENDAR) {
    if (year % 4 === 0) {
      return true;
    } else {
      return false;
    }
  } else {
      if (year % 4 === 0 && year % 100 === 0 && year % 400 === 0) {
        return true;
      } else if (year % 4 === 0 && year % 100 !== 0) {
        return true;
      } else {
        return false;
      }
  }
}