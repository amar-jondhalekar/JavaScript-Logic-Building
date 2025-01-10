// Write a function that counts and returns the number of words in a sentence.
// Input: A sentence
// Return: number of words

// function countWord(sentence) {
//   let wordsCount = 0;
//   if (sentence === " ") {
//     return true;
//   }
//   //   for (let i = 0; i <= sentence.length; i++) {
//   //     console.log(sentence[i]);
//   //   }
// }

// console.log(countWord("Amar Jondhalekar"));

// 2nd Way:
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

// 3rd Way:
function countWord(sentence) {
  console.log("Before the trim:", sentence);
  sentence = sentence.trim(); // To remove before and after the space in sentence
  console.log("After the trim:", sentence);
  const splittedSentence = sentence.split(" ");
  console.log(splittedSentence);
  const nonEmptyElement = splittedSentence.filter((element) => element != "");
  console.log("nonEmptyElement", nonEmptyElement);
  return splittedSentence.length;
}
console.log("This is a sentence:", countWord("This is a sentence"));
console.log("What is the  date today", countWord("What is the  date today"));
console.log(
  "  What is the  date today  ",
  countWord("  What is the  date today  ")
);
