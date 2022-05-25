//arrays are usefull when you need collections of data or need to store them or need to loop through multiple elements.

let database = ['turtle', 'cat', 'dog', 'bird']
console.log(database);
console.log(database.length);

let animal = database[1];
console.log(animal);


//change an elmenent if you want
database[0] = 'dinosaur';
console.log(database);

//last element of the array, negative numbers;
let last = database[database.length - 1];
console.log(last);

//allows you to pass on additional items to the array
database.push('lizard');
console.log(database);

//it gets rid of the last element in the array, in this case lizard.
database.pop();
console.log(database);