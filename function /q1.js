// Given length and breadth of a rectangle, return the area of the rectangle


// function areaRectangle(length, breadth){
//     area=length*breadth
//     return area
// }
// let result= areaRectangle(20,10)
// console.log(result);


// Take a number and print the square of the number.

// function square(num){
//     return num**2
// }
// let result = square(8)
// console.log(result);

// Take two numbers and only print the integer part when a is divided by b.

// function divisible(a, b){
//     divided = a%b==0;
//     return divided
// }
// let result = divisible(4,2)
// console.log(result);

// Take a number and print out the last digit of the number


// function lastDigit(num){
//     let lastdigit= num%10
//     return lastdigit
// }

// let result = lastDigit(123)
// console.log(result);

// Take a number and find the cube of that number.

// function cube(num){
//         return num**3
//     }
// let result = cube(3)
// console.log(result);


// Take a 3 digit number and print the reverse of that number. Ex - 235 = 532



// Take a number and print out the first digit of the number. Ex - 145 = 1, 789 = 7


// function firstDigit(num){
//     let firstdigit= Mar(num/100)
//     return firstdigit
// }

// let result = firstDigit(145)
// console.log(result);

// Take a number and return the sum of the first and last digit. Ex - 10 = 1+0 = 1, 452 = 4+2=7


// function firstAndLastDigit(num){
//     let firstdigit= Math.floor(num/10)
//     let lastdigit= num%10
//     return firstdigit+lastdigit
// }
// let result = firstAndLastDigit(452)
// console.log(result);

// Take salary of five employees and print the average salary of all the employees.


// function averageSalary(salary){
//     let sum=0
//     for(let i=0; i<salary.length; i++){
//         sum+=salary[i]
//     }
//     let average=sum/salary.length
//     return average
// }
// let result = averageSalary([1000, 1000, 1000, 1000, 1000])
// console.log(result);


// Take two numbers and swap them. Ex - a = 10, b=5; =&gt; a=5, b=10;

function swap(a, b) {
    let temp = a+b;
    a=a-b 
    b=temp-b
    return [a,b]
}
let result = swap(10,5)
console.log(result);


