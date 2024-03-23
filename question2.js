// Take two numbers and only print the integer part when a is divided by b.

const readlineSync = require('readline-sync');
const num1 = readlineSync.questionInt('Enter your input: ');
const num2 = readlineSync.questionInt('Enter your input: ');
console.log(num1/num2);