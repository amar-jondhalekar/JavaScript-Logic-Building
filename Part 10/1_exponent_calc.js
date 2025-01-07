// Write a function that returns the result of raising a given number to a specified power
// Input: Two Numbers
//     - Base
//     - Exponent
// Return: Base to the power of Exponent
// Example:
//     2, 3 : 2 * 2 * 2 = 8;
// Do not use Math.pow();
function PowerCal(Base, Exponent) {
  //   let hasType = typeof Base && Exponent !== "number";
  if (
    (Base && Exponent < 0) ||
    typeof Base == "string" ||
    typeof Exponent == "string"
  ) {
    throw new Error("Please enter positive number or avoid string!");
  }
  let result = 1;
  for (let i = 1; i < Exponent; i++) {
    result = result * Base;
    // console.log(result);
  }
  return result;
}

console.log(PowerCal(2, 4));
console.log(PowerCal(2, -4));
console.log(PowerCal(7, "amar"));
