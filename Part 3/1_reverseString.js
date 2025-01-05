// Write a function that returns the reverse of a string
function reverseString(string) {
  let reversedStr = string.split("").reverse().join("");

  return reversedStr;
}

console.log(reverseString("Amar Jondhalekar"));

// 2nd way
function reverseAString(inputString) {
  let reverseString = "";
  for (let i = inputString.length - 1; i >= 0; i--) {
    // console.log(inputString[i]);
    reverseString = reverseString + inputString[i];
  }
  return reverseString;
}

console.log(reverseAString("Amar"));
