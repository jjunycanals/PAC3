"use strict";
// Sustituye /***/ por las instrucciones adecuadas que cumplan las operaciones 
// y salidas indicadas en los comentarios.
class Animal {
    constructor() {
        /***/
        // this.population = population;
        // Dins d'aquest constructor de la classe animal no hi definim cap propietat específica.
        // Al estar els /***/ dins de la clau del constructor he deixat comentat this.population ja que sino dona error, per resoldre'l caldria posar
        // constructor(population: number) {this.population = population;}, però al no estar posat dins de () que editessim codi, no ho he fet.
    }
}
Animal.population = 0;
class Dog extends Animal {
    /***/
    constructor(color) {
        super();
        this.color = color;
    }
    iamadog() {
        console.log('yes, this is a dog');
    }
}
class Cat extends Animal {
    /***/
    constructor(gender) {
        super();
        this.gender = gender;
    }
    iamacat() {
        console.log('yes, this is a cat');
    }
}
let animals = [];
animals.push(new Cat('male'));
animals.push(new Dog('white'));
animals.push(new Cat('female'));
animals.push(new Dog('black'));
for (let animal of animals) {
    /***/
    if (animal instanceof Cat) {
        console.log(`MEOW`);
        animal.iamacat();
    }
    else if (animal instanceof Dog) {
        console.log('WOW');
        animal.iamadog();
    }
    Animal.population += 1;
}
/**  loop prints these lines
MEOW
yes, this is a cat
WOW
yes, this is a dog
MEOW
yes, this is a cat
WOW
yes, this is a dog
*/
console.log(Animal.population); //4
