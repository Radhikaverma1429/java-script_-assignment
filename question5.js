// Take marks in 5 subjects A,B,C,D,E and print out the average of marks from five subject marks.

const readlineSync = require('readline-sync');
const a = readlineSync.questionInt('Enter your input: ');
const b = readlineSync.questionInt('Enter your input: ');
const c = readlineSync.questionInt('Enter your input: ');
const d = readlineSync.questionInt('Enter your input: ');
const e = readlineSync.questionInt('Enter your input: ');
let calcutae = a+b+c+d+e
console.log(calcutae/5);