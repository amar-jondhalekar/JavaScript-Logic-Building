// Write a program that checks if a number is Armstrong or not
// Input: A number
// Output: True if a number is Armstrong and False if number is not a Armstrong
// Armstrong: It's a number that is equal to the sum of it's own digits raised to the power of the number of digits
// Example:
// - 153 = (1 ^ 3) + (5 ^ 3) + (3 ^ 3) = 1 + 125 + 27 = 153 = true
// - 370 = (3 ^ 3) + (7 ^ 3) + (0 ^ 3) = 27 ^ 343 + 0 = 370 = true
// - 243 = (2 ^ 3) + (4 ^ 3) + (3 ^ 3) = 8 + 64 + 27 = 99 = false
// Few more examples: 153, 370, 371, 407, 1634, 8208, 9474, 54748, 92727

function checkArmstrongNumber(armstrong) {
  let toString = armstrong.toString();
  let splitting = toString.split("");
  let armstrongNumber = [""];
  let finalResult;
  console.log(splitting, splitting.length);
  for (let i = 0; i < splitting.length; i++) {
    armstrongNumber = splitting[i] ** splitting.length;
    // finalResult = armstrongNumber.split(",").map(Number);
    // result = finalResult.reduce((a, b) => a + b, 0);
    // console.log(result);
    console.log(armstrongNumber);
  }
}

console.log(checkArmstrongNumber(153));

// 2nd Way:
function checkArmStrong(armstrong) {
  // Convert the number to a string and split into digits
  let splitting = armstrong.toString().split("");

  // Calculate the Armstrong sum
  let result = splitting
    .map(Number) // Convert each digit to a number
    .map((digit) => digit ** splitting.length) // Raise each digit to the power of the number of digits
    .reduce((a, b) => a + b, 0); // Sum all the powers
  // Check if the sum equals the original number
  return result === armstrong;
}

console.log(checkArmStrong(153));

// 3rd Way:
console.log("3rd way");

function armStrongNum(input) {
  let number = input;
  const digits = [];
  while (number > 0) {
    let lastDigit = number % 10;
    console.log("Last Digit", lastDigit);
    number = Math.floor(number / 10);
    console.log("New number", number);
    digits.push(lastDigit);
  }
  const length = digits.length;
  console.log("Length:", length);
  let sum = 0;
  digits.forEach((d) => {
    console.log(d, length, Math.pow(d, length));
    sum = sum + Math.pow(d, length);
  });
  console.log(sum);
  return sum === input;
}

console.log(armStrongNum(153));
console.log(armStrongNum(371));
console.log(armStrongNum(370));
console.log(armStrongNum(18272));
console.log(armStrongNum(747789));
