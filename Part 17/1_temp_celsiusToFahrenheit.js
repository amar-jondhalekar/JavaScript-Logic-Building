// Write a function that converts a temperature in Celsius to Fahrenhite
// Input: Temperature in Celsius
// Return: Temperature in Fahrenheit
// - Celsius & Fahrenhite are 2 different scales two measure temperature
// - Formula (Temperature in degrees Celsius (C) * 9 / 5 + 32)
// Example:
// - 27 degrees = (27 * 9 / 5) + 32 = 80.6 Fahrenheit
// - 34 degrees = (34 * 9 / 5) + 32 = 93.2 Fahrenheit
function celsiusToFahrenheit(degree) {
  let result = degree * (9 / 5);
  let fahrenheit = result + 32;
  fahrenheit = Math.round(fahrenheit); // Calculate round figure of fahrenheit
  return fahrenheit;
}

console.log(celsiusToFahrenheit(32));
console.log(celsiusToFahrenheit(27));
console.log(celsiusToFahrenheit(34));
console.log(celsiusToFahrenheit(12));
console.log(celsiusToFahrenheit(17));
console.log(celsiusToFahrenheit(23));
