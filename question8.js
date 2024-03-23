// Take a 2 digit number and return the first and last digits.

const readlineSync = require('readline-sync');
const a = readlineSync.questionInt('Enter your input: ');
console.log("first number: " + Math.floor( a/10));
console.log("second number: " + a%10);


