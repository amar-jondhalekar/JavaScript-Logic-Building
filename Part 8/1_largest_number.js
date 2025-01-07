// Write a function that finds and prints the maximum element in an array of numbers.
// Input: Array of numbers
// Return: Biggest number
// Example: [3, 6, 1, 8, 3, 7]
function largestNumberInArr(arr) {
  if (arr.length === 0) {
    throw new Error("We need some numbers in the array!");
  }

  let biggestNum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > biggestNum) {
      //   console.log("arr[i]", arr[i]);
      //   console.log("larg", large);
      biggestNum = arr[i];
    }
  }
  return biggestNum;
  //   arr.forEach((num) => {
  //     console.log(num);
  //   });
}

console.log("Largest Array Number: ", largestNumberInArr([3, 6, 1, 8, 3, 7]));
console.log(
  "Largest Array Number: ",
  largestNumberInArr([7, 84, 16, 38, 45, 76])
);
// console.log("Empty number: ", largestNumberInArr([]));
