// Write a function that finds all the factors of a given number.
// Input: number, positive integer
// Return: Factors of a number
// Factor: Is a number that divides the given number evenly or exactly, leaving no remainder
// Example:
// Consider the number 12. The factors of 12 are the numbers that divide it exactly:
// - 1: 12 / 1 = 12
// - 2: 12 / 2 = 6
// - 3: 12 / 3 = 4
// - 4: 12 / 4 = 3
// - 6: 12 / 6 = 2
// - 12: 12 / 12 = 1

// So, the factors of 12 are: [ 1, 2, 3, 4, 6, 12 ]

function factorNumber(fact) {
  console.log(fact);
  let factor = [];
  for (let i = 1; i <= fact; i++) {
    console.log(i);
    if (fact % i === 0) {
      factor.push(i);
    }
  }
  return factor;
}

console.log(factorNumber(4));
