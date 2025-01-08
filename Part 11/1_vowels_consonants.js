// Write a function that counts and prints the number of vowels and consonants in a given string
// Input: String
// Return: Vowel and Consonant count
// Vowel: a e i o u
// Consonant: All other character
// Example:
// "Hello World => 3 Vowels & 7 Consonants"

// 1st Way:
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

// 2nd Way:

function countVowelAndCon(inputStr) {
  inputStr = inputStr.toLowerCase();
  inputStr = inputStr.replace(" ", "");
  console.log("inputString after clean up is:", inputStr);
  const vowel = "aeiou";
  const consonant = "bcdfghjklmnpqrstvwxyz";
  let vowelCount = 0;
  let consonantCount = 0;
  for (let i = 0; i <= inputStr.length; i++) {
    console.log(inputStr[i]);
    if (vowel.includes(inputStr[i])) {
      vowelCount++;
    } else if (consonant.includes(inputStr[i])) {
      consonantCount++;
    }
  }
  return { vowelCount, consonantCount };
}

countVowelAndCon("Amar Jondhalekar");
