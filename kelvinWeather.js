// Kelvin Weather Project

// To convert today's Kelvin forecast to Fahrenheit, we are going
// to need an equation. Create a variable named kelvin, and set it
// equal to a prompt() that asks the user what Kelvin forecast says.
// This will enable you to convert Kelvin to Fahrenheit.

var kelvin = prompt("What's the Kelvin temperature today?");

// Celsius is just like Kelvin, the only difference is that Celsius
// is 273 degrees less than Kelvin. So, let's convert Kelvin into
// Celsius by subtracting 273 from the kelvin variable, then store
// the result in another variable, named celsius.

var celsius = kelvin - 273;

// Use this equation (Farenheit = Celsius * (9/5) + 32) to calculate
// Fahrenheit, then store the answer in a variable named fahrenheit.  

var fahrenheit = celsius * (9/5) + 32;

// Use console.log() to log out today's temperature in fahrenheit.

console.log("The temperature is " + fahrenheit);
