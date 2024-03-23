// Take the cost price a and selling price b of a product, and print the profit obtained on the product


const readlineSync = require('readline-sync');
const selling_price = readlineSync.questionInt('Enter your selling_price: ');
const cost_price = readlineSync.questionInt('Enter your cost_price: ');
console.log(selling_price-cost_price+" is profit! ");