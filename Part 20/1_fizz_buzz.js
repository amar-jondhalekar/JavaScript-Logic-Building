// // Write a program that prints numbers from 1 to N, replacing
// // - multiples of 3 with "Fizz"
// // - multiples of 5 with "Buzz"
// // - multiples of both 3 & 5 with "FizzBuzz"
// // Input: A positive number

// // Example: 36;
// // - 1, 2, Fizz, 4, Bizz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz,
// //   13, 14, Fizz Buzz, 16, 17, Fizz, 19, Buzz, Fizz, 22,
// //   23, Fizz, Buzz, 26, Fizz, 28, 29, Fizz Buzz, 31, 32,
// //   Fizz, 34, Buzz, Fizz

// function fizzBuzz(inputNumber) {
//   console.log(inputNumber);
//   let multi3 = [];
//   let mul3 = 3;
//   let mul5 = 5;
//   console.log(multi3);
//   let multi5 = [];
//   let i;
//   for (i = 0; i < inputNumber; i++) {
//     console.log(i);
//     // console.log(inputNumber[i]);
//     multi3.push(mul3 * i);
//     multi5.push(mul5 * i);
//     // if (inputNumber[i] === multi3) {
//     //   console.log("Fizz");
//     // } else if (inputNumber[i] === multi5) {
//     //   console.log("Bizz");
//     // }
//   }
//   //   if (multi3 === inputNumber[i]) {
//   //     console.log(multi3);
//   //   } else if (multi5 === inputNumber[i]) {
//   //     console.log(multi5);
//   //   } else {
//   //     console.log(inputNumber);
//   //   }
//   multi3.forEach((value) => {
//     console.log("Iterated: ", value);
//     if (value.includes(i)) {
//       console.log("Fizz");
//     } else {
//       console.log("Only number");
//     }
//   });
//   console.log(multi3);
//   console.log(multi5);
// }

// console.log(fizzBuzz(36));

// function fizzBuzz(inputNumber) {
//   console.log(inputNumber);
//   for (let i = 0; i <= inputNumber; i++) {
//     let r3 = i * 3;
//     let r5 = i * 5;
//     if (r3 <= inputNumber) {
//       console.log("fizz");
//     }
//     if (r5 <= inputNumber) {
//       console.log("Buzz");
//     }
//   }
// }

// console.log(fizzBuzz(36));

// Logic: Example 36
// Use Modulus operator
// - n % 3 is zero then fizz
// - n % 5 is zero then Buzz
// - n % 3 && n % 5 both are zero then print FizzBuzz

function fizzBuzz(inputNumber) {
  console.log(`Input Number: ${inputNumber}`);
  let result = [];

  for (let i = 1; i <= inputNumber; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(i);
    }
  }

  return result;
}

console.log(fizzBuzz(36));
