// Write a function that returns the reverse of a string
function reverseString(string) {
  let reversedStr = string.split("").reverse().join("");

  return reversedStr;
}

console.log(reverseString("Amar Jondhalekar"));
