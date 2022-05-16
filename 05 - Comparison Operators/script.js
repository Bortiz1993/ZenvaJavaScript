let item = 'engine';

if(item == 'engine'){
    console.log('engine')
}

let score = 5;

if(score >=  60 ){
    console.log('pass');

}

else if (score < 10){
    console.log('meet teacher')
}

else{
    console.log('not pass');
}

let isEngine = item == 'Engine';
console.log(isEngine);

if(isEngine){
    console.log('Engine is ready to be inserted')

}
else {!isEngine
    console.log('Item is not an Engine')
}

//Challenge, check if costumer can or cannot afford this item;
let balance = 100;
let itemPrice = 10;

//1. check balance
if(balance >= 100){
    console.log('customer has enough money')

}
else if(balance < 100){
    console.log('customer cannot buy item')
}

//2. if they buy, update balance

if (balance >= itemPrice){
    //updating the balance, balance = balance - itemPrice is the same as:
    balance -= itemPrice
    console.log('item purchased ' + balance);
}

//any other statement other then the statements in the If statement:
else{
    console.log('not enough balance')
}
