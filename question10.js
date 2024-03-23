// Write a JavaScript program to check whether a number is even or odd.

const readlineSync = require('readline-sync');
const num = readlineSync.questionFloat('Enter your input: ');

if(num%2===0){
    console.log(num + " is even number! ");
}else{
    console.log(num+" is odd number! ");
}