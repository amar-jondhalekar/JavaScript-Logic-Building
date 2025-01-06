// Write a functiom that generates and prints a multiplication table for a given number up to a specified range.
// Input: 2 Positive number
// - Table of
// - Table till

// Return: Nothing
// Example:
// 4, 10 => 4, 8, 12, ...40
// 8, 20 => 8, 16, 24, ...160

// First way:
function mul(mFirst, mLast) {
  for (let i = 1; i <= mLast; i++) {
    let mul = mFirst * i;
    console.log(`Multiplication of ${mFirst} * ${i} is : , ${mul}`);
  }
}

mul(4, 20);

// function mul1(mFirst, mLast) {
//   let i;
//   let mul;
//   return (i = 1 && i <= mLast && i++ ? (mul = mFirst * i) : false);
// }
// console.log(mul1(4, 10));

// 2nd way: Using ternary + while loop

function mul2(mFirst, mLast) {
  let result = [];
  let i = 1;

  // Using a ternary operator to loop throught and calculate multiplication
  while (i <= mLast) {
    result.push(i <= mLast ? mFirst * i : false); // calculate multiplication or return false
    i++;
  }
  return result;
}
console.log("Multiplication Table using Ternary: ", mul2(4, 20));
