// Write a function that calculates and prints the area of a rectangle given it's length and width.

function areaRect(length, width) {
  if (length <= 0) {
    throw new RangeError("Length should be a positive number");
  }
  if (width <= 0) {
    throw new RangeError("Width should be a positive number");
  }

  const area = length * width;
  console.log("Area of rectangle:", area);
}

areaRect(20, 30);
areaRect(2, 0);
areaRect(-2, -40);
