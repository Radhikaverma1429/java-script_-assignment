// Write a JavaScript program to check whether a given number is prime or not.


const readlineSync = require('readline-sync');
const num = readlineSync.questionFloat('Enter your input: ');
count=0
for(let i=0; i<=num; i++){
    if(num%i===0){
        count++
    }
}
if(count===2){
    console.log(num + " is prime number! ");
}else{
    console.log(num+" is not a prie number! ");
}

