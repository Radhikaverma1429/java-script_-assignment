// Write a JavaScript program to convert temperature from Celsius to Fahrenheit and vice versa.


// Celsius to Fahrenheit

// const readlineSync = require('readline-sync');
// const Celsius = readlineSync.questionInt('Enter your input: ');
// const Fahrenheit=Celsius/5*9+32
// console.log(Fahrenheit);




// Fahrenheit to Celsius

const readlineSync = require('readline-sync');
const Fahrenheit = readlineSync.questionInt('Enter your input: ');
const Celsius=Fahrenheit-32*5/9
console.log(Celsius);