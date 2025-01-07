// Write a function that finds and prints the maximum element in an array of numbers.
// Input: Array of numbers
// Return: Biggest number
// Example: [3, 6, 1, 8, 3, 7]
// 1st way:
function largestNumberInArr(arr) {
  let hasString = arr.some((item) => typeof item === "string");
  if (hasString || !arr || arr.length === 0) {
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
// console.log("Null: ", largestNumberInArr(null));
// console.log("Empty number: ", largestNumberInArr([]));

// console.log("String: ", largestNumberInArr([22, 11, 44, 55, 66, 77, "Amar"]));

// 2nd way: Using Math.max()

function findBiggestNum(arrOfNum) {
  const maxNumber = Math.max(...arrOfNum);
  console.log(maxNumber);
  return maxNumber;
}

console.log("findBiggestNum: ", findBiggestNum([45, 66, 77, 23, 12, 77]));
