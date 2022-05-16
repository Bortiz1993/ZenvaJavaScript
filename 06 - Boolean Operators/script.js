let distance = 150;
let fuel = 100;
let distanceCondition = distance <= 200 && distance >= 100 && fuel >= 100
let isEngineFunctioning = false;
console.log(distanceCondition)

//OR OPERATOR AND NOT OPERATOR
if(!isEngineFunctioning || distance > 200){
    console.log('you wont make it')
    console.log(isEngineFunctioning)
}

else if(distance > 200){
    console.log('Wont make it');

}

else if( distanceCondition){
console.log('you will make it');
}

//AND OPERATOR
else if( distance < 100 && fuel >= 25){
    console.log('you will make it for sure')
}

else{

}

