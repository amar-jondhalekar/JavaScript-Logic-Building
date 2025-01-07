// Write a function that finds and prints the maximum element in an array of numbers.
// Input: Array of numbers
// Return: Biggest number
// Example: [3, 6, 1, 8, 3, 7]
function largestNumberInArr(arr) {
  let large = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > large) {
      //   console.log("arr[i]", arr[i]);
      //   console.log("larg", large);
      large = arr[i];
    }
  }
  return large;
  //   arr.forEach((num) => {
  //     console.log(num);
  //   });
}

console.log("Largest Array Number:", largestNumberInArr([3, 6, 1, 8, 3, 7]));
console.log(
  "Largest Array Number:",
  largestNumberInArr([7, 84, 16, 38, 45, 76])
);
