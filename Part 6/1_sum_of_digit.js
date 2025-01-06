// Write a function that calculates and prints the sum of the digits of a given number
// Input: A number, positive integer -> 12, 34, 123, 1234
// Return: sum of all digits
// Example:
// 12: 1 + 2 = 3
// 23: 2 + 3 = 5
// 456 = 4 + 5 + 6 = 15

// 1st way:
function sumOfDigit(input) {
  return input
    .toString()
    .split("")
    .map(Number)
    .reduce((sum, digit) => sum + digit, 0);
}

let number = 456;
console.log(sumOfDigit(number));

// 12 = 1 + 2 = 3
// store = input[0] + input[1];

// 270 = 2 + 7 + 0 = 9
