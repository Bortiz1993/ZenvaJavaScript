let player = {
    age: 28,
    name: 'Brijido',
    isActive: true,
    outfit: {
        color: 'blue',
        size: 'M',
        cost: 100,
        isNew: true
    }
};

console.log(player);

console.log(player.age);
console.log(player['name']);

//Can update properties in the object.
player.isActive = false;
console.log(player)

//can add new properties to the object.
player.health = 100;
console.log(player)

//delete property, might run into some errors sometimes.
delete player.health;
console.log(player)

//accessing objects within an object
console.log(player.outfit.color)

//modify the object
player.outfit.size = 'Small';
console.log(player);

player.level = 100;
console.log(player)