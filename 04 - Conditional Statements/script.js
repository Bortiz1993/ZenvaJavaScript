let direction = 'diagonal';
// == means comparison operator

//to go to red planet
if(direction == 'left'){
    console.log('red planet');
    
}
//else if condition will only run if the first condition is false.
else if(direction == 'right') {
    console.log('purple planet');
}

else if( direction == 'backwards'){
    console.log('Going back home')
}

else {
    console.log('The ship has crashed!')
}