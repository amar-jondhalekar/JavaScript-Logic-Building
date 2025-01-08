// Write a function that calculate and returs the average of a set of numbers.
// Input: Array of positive integer numbers
// Return: Average numbers
// Average: Calculated by dividing the total of all the values by the number of values.
// Example:
// [1, 2, 4]: (1 + 2 + 4)/3 = 2.333
// [1, 2, 7, 14]: (1 + 2 + 7 + 14)/4 = 6
function calAvrg(arr) {
  console.log(arr);
  let result = 0;
  let avrg = 0;
  for (let i = 0; i < arr.length; i++) {
    result = result + arr[i];
    avrg = result / arr.length;
  }
  return { result, avrg };
}

let arr = [1, 2, 4];
console.log(calAvrg(arr));
