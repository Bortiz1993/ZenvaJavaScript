//Array iteration

let scores = [10, 20, 10];

let i  = 0;
while (i < scores.length){
    scores[i]++;
    i++;
}

console.log(scores);

for(i = 0; i < scores.length; i++){
    scores[i]++;

}
console.log(scores);

//the parameter inside the forEach is a function;
scores.forEach(function(entry, index){
    scores[index]++
    //if yo want to modify the original index, "passing by reference"
    console.log(entry, index);
});

console.log(scores);

let catalog = [
    {
        title: 'JS for beginners',
        author: 'Zenva',
        copies: 1
    },
    {
        title: 'HTML for beginners',
        author: 'zenva',
        copies: 2
    },

{
title: 'React for beginners',
author: 'XYZ',
copies: 3
}

];

catalog.forEach(function(entry){
    if(entry.author == 'Zenva'){
        entry.copies++;
    }
    console.log(entry);
})

console.log(catalog)


