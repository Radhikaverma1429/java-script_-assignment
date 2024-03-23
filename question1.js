// Take two numbers a,b and print the sum, difference, product, quotient and modulus of a & b.

const readlineSync = require('readline-sync');
const num1 = readlineSync.questionInt('Enter your input: ');
const num2 = readlineSync.questionInt('Enter your input: ');
let result = num1+num2
let result1 = num1-num2
let result2 = num1*num2
let result3 = num1**num2
let result4 = num1%num2
console.log(result,result1,result2,result3,result4);
