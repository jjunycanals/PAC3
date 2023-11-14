/* PROPIEDADES TYPESCRIPT */
// Donem d'alta uns atributs en un objecte
interface Planet{
	name: string;
	galaxy: string;
	numberOfMoons: number;
	weight: number;
}
// Creem un objecte definit amb valors
let planet = {
	name : "Earth",
	galaxy : "Milky Way",
	numberOfMoons : 1,
	weight : 100000
};

/* DEFINEDPROPERTY*/
// Usando Object definedProperty podemos hacer una propiedad de solo lectura. 
// Para eso necesitamos establecer la propiedad de escritura en un valor falso.
interface Planet2{
	name: string;
	galaxy: string;
	numberOfMoons: number;
	weight: number;
}
let planet2 = {
	name : "Mart",
	galaxy : "Milky Way",
	numberOfMoons : 1,
	weight : 100000
};
Object.definedProperty(
	planet2 = "name",
	{writable: false}
);

planet2.name="Saturn";
console.log(planet2.name);

// Con Object.definedProperty. Podemos hacer una propiedad no configurable
interface Planet3{
	name: string;
	galaxy: string;
	numberOfMoons: number;
	weight: number;
}
let Planet3 = {
	name : "venusss",
	galaxy : "Milky Way",
	numberOfMoons : 1,
	weight : 100000
};
Object.definedProperty(
	planet3 = "name",
	{
		writable: false,
		configurable: false
	}
);

/* GETTER y SETTER */
interface Planet4 {
	name: string;
	galaxy: string;
}

let planet4 = {
	name : "Earth",
	galaxy: "MilkyWay",

	get planetName(): string {
		return this.name + "@" + this.galaxy;
	},

	set planetName(value: string) {
		[this.name, this.galaxy] = value.split(" ");
	}
};
console.log(planet4.planetName); // Resultado:  Earth@Milky Way

planet4.planetName = "Jupiter Andromeda";
console.log(planet4.planetName); // Resultado:  Jupiter@Andromeda