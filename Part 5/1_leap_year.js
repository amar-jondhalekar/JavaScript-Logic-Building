// Write a function that tells if provided year is a leap year or not
// Input: A number, positive integer -> 1900, 2023, 2033
// Return: true if leap year, false if not leap year
// Leap year:
// - Every 4th year is a leap year
// - Leap year has 366 days
// - Normal year has 365 days
// - February has 28 days or 29 days
// - Ignoring the exception of 1700, 1800 and 1900 which are not a leap year
// 1st way:
function leapYear(year) {
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    console.log("Year is a leap year:", year);
  } else {
    console.log("Year is not a leap year:", year);
  }
}

leapYear(2023);

// 2nd way:
function isLeapYear(year) {
  if (year === Number) {
    throw new Error("Invalid Input");
  }
  if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isLeapYear(2028));
console.log(isLeapYear(2024));
console.log(isLeapYear(2025));
console.log(isLeapYear(2026));
console.log(isLeapYear(2027));
console.log(isLeapYear("amar"));

// 3rd way:
function isLeapYear1(year) {
  return year % 4 === 0;
}

console.log("isLeapYear1(2024)", isLeapYear1(2024));
