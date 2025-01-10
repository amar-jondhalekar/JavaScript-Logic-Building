// Write a program that swap two numbers
// Input: Two numbers a & b
// Output: Interchange the values of a & b
// Example:
// Input: a = 5, b = 6
// Output: a = 6, b = 5

// 1st Way: Using 3rd variable
function swapTowNumber(a, b) {
  let temp = a;
  a = b;
  b = temp;
  console.log(`Interchange the values of a & b are:, a:${a}, b:${b}`);
}

swapTowNumber(4, 7);
swapTowNumber(7, 4);

// function interchangeNumber(a, b) {
//   if (a != b) {
//     a = b;
//     console.log(a);
//   }
// }

// interchangeNumber(4, 7);

// 2nd Way: Without 3rd variable using addition and substraction

function interchangeTwoNumber(a, b) {
  a = a + b;
  console.log(a);
  b = a - b;
  console.log(b);
  a = a - b;
  console.log(a);
  console.log(
    `The interchange of value a and b are without using third variable: a:${a} and b:${b}`
  );
}

interchangeTwoNumber(4, 7);
