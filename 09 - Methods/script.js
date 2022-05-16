//Challenge
//the method is a function inside an object.
 let Hedgehog = {
     health: 100,
     fun: 0,
    //  eatApple: function(){
    //      console.log('eat apple');
    //     this.health += 10;
    //      //to access the property use THIS.
    //      console.log(this.health)
    //  },

    // eatCandy: function (){
    //     this.health -= 5;
    //     this.fun += 5;
    //     console.log('eat candy');
    // },

    Play: function(){
        this.fun += 10;
    },

    eat: function(food){
        if(food == 'apple'){
            this.health += 10;
        }
        else if(food == 'candy'){
            this.health -= 5;
            this.fun += 5;
        }
    }
 };

 Hedgehog.eat('apple');
 Hedgehog.eat('candy');
 Hedgehog.eat('apple');
//  Hedgehog.eatApple();
//  Hedgehog.eatCandy();
 Hedgehog.Play();
 console.log(Hedgehog);