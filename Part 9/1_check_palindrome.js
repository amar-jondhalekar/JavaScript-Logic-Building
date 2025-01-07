// Write a function that checks if a string is palindrome or not
// Input: A string
// Return: boolean, true if Palindrome and false if not palindrome
// A palindrome is a word that reads the same backwardor forward

function isPalindrome(word) {
  let str = word.toString();
  let reverse = str.split("").reverse().join("");
  //   console.log(reverse);
  return str === reverse ? true : false;
  //   if (word === reverse) {
  //     return true;
  //   }
  //   return false;
}

console.log(isPalindrome("amarama"));
console.log(isPalindrome("jondhalekar"));
console.log(isPalindrome("kook"));
console.log(isPalindrome(12321));
console.log(isPalindrome(123));
console.log(isPalindrome("12321amar"));

// 2nd way:while loop
function isPalindrome1(word) {
  let str = word.toString();
  let left = 0; // start pointer
  let right = str.length - 1; // endpointer

  while (left < right) {
    // compare characters at the pointers
    if (str[left] !== str[right]) {
      return false; // Not a palindrome
    }
    left++;
    right--;
  }
  return true; // It's a palindrome
}
console.log("Second way: ");
console.log(isPalindrome1("amarama"));
