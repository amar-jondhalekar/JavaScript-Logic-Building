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

// 2nd way:
function sumOfDigit1(input) {
  let str = input.toString();
  //   console.log(str);
  let splitting = str.split("");
  //   console.log(splitting);
  let sum = 0;
  splitting.forEach((num) => {
    sum = sum + parseInt(num);
  });

  return sum;
}
console.log(sumOfDigit1(77));

// 3rd way:
function calculateSumOfDigit(inputNum) {
  let number = inputNum;
  let sumOfDigit = 0;
  while (number > 0) {
    let lastDigit = number % 10;
    number = Math.floor(number / 10);
    sumOfDigit = sumOfDigit + lastDigit;
  }
  return sumOfDigit;
}

console.log(calculateSumOfDigit(12));
// 12 = 1 + 2 = 3
// store = input[0] + input[1];

// 270 = 2 + 7 + 0 = 9
