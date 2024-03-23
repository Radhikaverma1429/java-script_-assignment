// Take two numbers a,b and print the exponential power of the first number raised by the second.

const readlineSync = require('readline-sync');
const num1 = readlineSync.questionInt('Enter your input: ');
const num2 = readlineSync.questionInt('Enter your input: ');
console.log(num1**num2);