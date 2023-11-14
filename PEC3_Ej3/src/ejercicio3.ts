// Sustituye /***/ por las instrucciones adecuadas que cumplan las operaciones 
// y salidas indicadas en los comentarios.

abstract class Animal {
    static population: number = 0;
    constructor() {
        /***/
        // this.population = population;
        // Dins d'aquest constructor de la classe animal no hi definim cap propietat específica.
        // Al estar els /***/ dins de la clau del constructor he deixat comentat this.population ja que sino dona error, per resoldre'l caldria posar
        // constructor(population: number) {this.population = population;}, però al no estar posat dins de () que editessim codi, no ho he fet.
        
    }
    public abstract sound(): void;
}

class Dog extends Animal {
    color: string;
    /***/
    constructor(color: string){
        super();
        this.color = color;
    }

    public iamadog() {
        console.log('yes, this is a dog');
    }
}

class Cat extends Animal {
    gender: string;
    /***/
    constructor(gender: string){
        super();
        this.gender = gender;
    }

    public iamacat() {
        console.log('yes, this is a cat');
    }
}

let animals: Animal[] = [];
animals.push(new Cat('male'));
animals.push(new Dog('white'));
animals.push(new Cat('female'));
animals.push(new Dog('black'));

for(let animal of animals){
    /***/
    if (animal instanceof Cat) {
        console.log(`MEOW`);
        animal.iamacat();
    } else if (animal instanceof Dog) {
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