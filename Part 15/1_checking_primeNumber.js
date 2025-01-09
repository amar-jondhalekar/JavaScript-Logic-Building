// Write a function that tells if the given number is prime or not.
// Input: A number
// Return: true if prime and false if not prime
// Prime number: A number that can only be divided by itself and 1 without remainders
// 1st way:
function primeNumber(prime) {
  if (prime <= 1) return false; // Numbers less than or equal to 1 are not prime
  for (let i = 2; i < prime; i++) {
    // Start from 2, as 1 is not relevant
    if (prime % i === 0) {
      return false; // Not a prime number if divisible by i
    }
  }
  return true; // Prime number if no divisors found
}

console.log(primeNumber(5)); // Output: true
console.log(primeNumber(4)); // Output: false
console.log(primeNumber(1)); // Output: false

// 2nd way:
function isPrime(inputNumber) {
  let result = true;
  if (inputNumber % 2 === 0) {
    result = false;
  }
  if (result === true) {
    for (let i = 3; i < inputNumber; i = i + 2) {
      // console.log(i);
      if (inputNumber % i === 0) {
        result = false;
        break;
      }
    }
  }
  return result;
}

console.log(isPrime(97));
