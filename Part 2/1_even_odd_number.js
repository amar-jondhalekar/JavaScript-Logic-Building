// Write a function that tells if a given number is even or odd
function evenOdd(num) {
  return num % 2 === 0 ? "even" : "odd";
  // if (num % 2 == 0) {
  //   console.log("Even Number is:", num);
  // } else {
  //   console.log("Odd Number is:", num);
  // }
}

console.log(evenOdd(-2));
console.log(evenOdd(0));
console.log(evenOdd(1));
console.log(evenOdd(153));
console.log(evenOdd(599));
console.log(evenOdd(1003));
console.log(evenOdd(2.7));
console.log(evenOdd(-0));
