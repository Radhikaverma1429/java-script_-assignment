// Take a number and print out the last digit of the number.

const readlineSync = require('readline-sync');
const a = readlineSync.questionInt('Enter your input: ');
const b = readlineSync.questionInt('Enter your input: ');
console.log(a%b);