// Write a function that calculates and prints the simple interest on a loan amount.
// Input:
// - Principle amount
// - Interest rate (yearly)
// - Time Duration (how many years)
// Return: Interest amount
// Simple interest:
// - (Principle * Interest Rate * Time Duration) / 100
// Example:
// - 1000, 5%, 1 year = (1000 * 5 * 1)/100 = 50
// - 20000, 10%, 5 year = (20000 * 10 * 5)/100 = 10000
function interestLoan(principleAmount, interestRate, timeDuration) {
  let simpleInterest = (principleAmount * interestRate * timeDuration) / 100;
  return simpleInterest;
}

console.log(interestLoan(20000, 10.5, 5));
