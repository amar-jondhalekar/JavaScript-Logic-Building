// Write a function that counts and returns the number of words in a sentence.
// Input: A sentence
// Return: number of words

// function countWord(sentence) {
//   let words = sentence.split("");
//   if (sentence.includes(" ")) {
//     let skip = sentence.split("");
//     return skip;
//   }
//   for (let i = 0; i <= sentence.length; i++) {
//     console.log(sentence[i]);
//   }
//   return sentence.length;
// }

// console.log(countWord("Amar Jondhalekar"));

function countWords(sentence) {
  if (typeof sentence !== "string" || sentence.trim() === "") {
    return 0; // return 0 for invalid or empty input
  }
  let words = sentence.trim().split(/\s+/); // Split by one or more spaces
  return words.length; // return the number of words
}

console.log(countWords("Amar Jondhalekar"));
console.log(countWords("Hello World!"));
console.log(countWords(1));
console.log(countWords(""));
console.log(countWords("What is the date today"));
console.log(countWords("This is a sentence"));
