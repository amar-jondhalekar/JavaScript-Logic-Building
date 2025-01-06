// Write a function that tells if provided year is a leap year or not
// Input: A number, positive integer -> 1900, 2023, 2033
// Return: true if leap year, false if not leap year
// Leap year:
// - Every 4th year is a leap year
// - Leap year has 366 days
// - Normal year has 365 days
// - February has 28 days or 29 days
// - Ignoring the exception of 1700, 1800 and 1900 which are not a leap year

function leapYear(year) {
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    console.log("Year is a leap year:", year);
  } else {
    console.log("Year is not a leap year:", year);
  }
}

leapYear(2023);

function isLeapYear(year) {
  if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isLeapYear(2028));
