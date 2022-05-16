function sendSignal(){
    console.log('HELP');
}

let i = 0;
/*we havent run this 1000 times */
while(i < 1000){
    sendSignal();
    //increment examples
    // i = i +;
   // i += 1;
  i++;
}

let result = 0;

let j = 1;

//condition at one point needs to become false or else, you will get trapped in an infinite loop.

while(j <= 10){
    result = result + j;
    console.log(result);
    j++;
}

console.log(result);