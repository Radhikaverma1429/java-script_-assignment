// Take two numbers a,b and only print the decimal part of the result obtained when a is divided by b.

const readlineSync = require('readline-sync');
const num1 = readlineSync.questionFloat('Enter your input: ');
const num2 = readlineSync.questionFloat('Enter your input: ');
console.log(num1%num2);
