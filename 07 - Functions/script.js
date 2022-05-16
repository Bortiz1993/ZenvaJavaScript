// 1 hour = 60 minutes, inputs or parameters in the parentheses.
// Function declarations
function hourToMinutes(hours){
    let result = hours * 60;
    console.log(result);
    return result;
}

let a = hourToMinutes(10);
let b = hourToMinutes(20)
console.log(a)

//function expressions
let dayToHours = function(days){
    return days * 24;
};

let c = dayToHours(1);
    console.log(c);

//Variables declaration
let balance = 100;
let stock = 50;
let price = 5;
let quantity = 10;

console.log(stock)

function sellItem(quantity){
//1. check if we have stock
if (quantity <= stock){
    //stock = stock - quantity
    stock -= quantity;
    // balance = balance + price * quantity;
    balance += price * quantity;
    console.log('purchase completed', balance, stock)

}

else {
    console.log('not enough stock')
}
}
sellItem(10)
sellItem(10)
sellItem(10)
sellItem(10)
sellItem(10)
sellItem(10)
//2. reduce stock. increase balance
