// Number Pyramid : Write a program that prints a number pyramid

function numberPyramid(inputNumber) {
  for (let i = 1; i <= inputNumber; i++) {
    let row = "";
    for (let j = 1; j <= inputNumber - i; j++) {
      row = row + " ";
      //   console.log(row);
    }
    // Add numbers for the pyramid
    for (let k = 1; k <= i; k++) {
      row = row + k + " ";
      //   console.log(row);
    }
    console.log(row.trim());
  }
}

numberPyramid(5);
