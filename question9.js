// Write a JavaScript program to find the largest of three numbers.

const readlineSync = require('readline-sync');
const a = readlineSync.questionInt('Enter your input: ');
const b = readlineSync.questionInt('Enter your input: ');
const c = readlineSync.questionInt('Enter your input: ');
let largest=0;
if(a>=b && a>=c){
    largest=a
}
else if(b>=a && b>=c){
    largest=b
}
else{
    largest=c
}
console.log(largest+" is largest number! ");