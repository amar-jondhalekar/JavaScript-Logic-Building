// Write a function that finds and prints the smallest number
// among three given numbers

function smallestNum(a, b, c) {
  if (a <= b && a <= c) {
    console.log("A is the smallest number:", a);
  } else if (b <= a && b <= c) {
    console.log("B is the smallest number:", b);
  } else {
    console.log("C is the smallest number:", c);
  }
}

smallestNum(1, 2, 3);
smallestNum(4, 2, 3);
smallestNum(7, 1, 5);
smallestNum(6, 2, 8);
smallestNum(9, 2, 1);
smallestNum(0, 3, 1);

function smallestNumber2(a, b, c) {
  let smallestNumber = a;
  if (b < smallestNumber) {
    smallestNumber = b;
  }
  if (c < smallestNumber) {
    smallestNumber = c;
  }
  return smallestNumber;
}

smallestNumber2(1, 2, 3);
smallestNumber2(4, 2, 3);
smallestNumber2(7, 1, 5);
smallestNumber2(6, 2, 8);
smallestNumber2(9, 2, 1);
smallestNumber2(0, 3, 1);
