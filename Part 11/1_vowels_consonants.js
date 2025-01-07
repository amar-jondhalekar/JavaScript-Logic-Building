// Write a function that counts and prints the number of vowels and consonants in a given string
function countVowelAndConsonant(inputStr) {
  const vowel = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let vowelCount = 0;
  let consonantCount = 0;

  // Iterate through the string
  for (let char of inputStr) {
    if (/[a-zA-Z]/.test(char)) {
      // Check if the character is a letter
      if (vowel.includes(char)) {
        vowelCount++;
      } else {
        consonantCount++;
      }
    }
  }
  return { vowelCount, consonantCount };
}

console.log(countVowelAndConsonant("Hello World!"));
console.log(countVowelAndConsonant("Amar Jondhalekar"));
