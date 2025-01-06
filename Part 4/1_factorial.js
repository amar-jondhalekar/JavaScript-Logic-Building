// Write a function that calculate factorial of a given number
// Input: A number, positive integer -> 0, 1, 4, 7, ...
// Return: Factorial of that number
// Factorial: Multiplication of all positive integers from 1 to a given number

// Example:
// 1!: 1
// 2!: 2 * 1 = 2
// 3!: 3 * 2 * 1 = 6
// 4!: 4 * 3 * 2 * 1 = 24
// 0!: 1

function factorialNum(InputNum) {
  if (InputNum < 0) {
    throw new Error("InputNumber should be greater than or equal to zero");
  }
  let result = 1;
  for (let i = 1; i <= InputNum; i++) {
    result = result * i;
  }
  return result;
}

console.log(factorialNum(20));
console.log(factorialNum(7));
console.log(factorialNum(3));
console.log(factorialNum(22));
console.log(factorialNum(0));
console.log(factorialNum(-1));
console.log(factorialNum(77));

// 2nd Way : Recursion
// calls the function repeatedly until it reaches the base case (n = 0 or n = 1)
// Simpler to write but may hit stack limits for very large numbers
