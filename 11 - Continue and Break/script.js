let fuel = 1000;
let distance = 0;

while(fuel > 0){
    //increase distance
    distance++;
    
    //check for cosmic storm
    if(distance >= 100 && distance <= 200){
        continue;
        //sends you back the condition, dosent run the rest of the code.
    }
    //decrement, or burn fuel
    fuel--;
    
    //stop if the ship arrives
    if(distance == 500){
        break;
        //break keyword will exit the loop.
    }
}

console.log('fuel Remaining: ', fuel);
console.log('Distance Travelled:', distance);