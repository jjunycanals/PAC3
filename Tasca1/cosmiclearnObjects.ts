/* OBJECTS */

// Per crear objectes hi ha 2 opcions
let planets = {};
let planetss = new Object();

// Un objecte pot tenir propietats definidies dins d'aquest. 
// Per fer-ho bé, primer s'ha de definir una interfaz en Typscript.
// En segon lloc, un cop definida la interfaz, ja es pot definir els valors del objecte.

// Create the interface
interface Planet {
	name: string;
	galaxy: string;
	numberOfMoons: number;
	weight: number;
}

//Object with properties
let planet: Planet = {
    name : "Earth",
    galaxy : "Milky Way",
    numberOfMoons : 1,
    weight : 100000
};
console.log("Planet Name :- " + planet.name);
console.log("Planet Galaxy :- " + planet.galaxy);
// You can also access Property names using square brackets and passing String.
console.log("Planet Galaxy :- " + planet["galaxy"]);
console.log("Planet Number of Moons :- " + planet.numberOfMoons);
console.log("Planet Weight :- " + planet.weight);

// To change a property of the planet
planet.galaxy = "Andromeda";
console.log("Planet Galaxy after change is :- " + planet.galaxy);

// PARA ITERAR UN OBJETO
for(let prop in planet) {
	console.log("Planet " + prop + " :- " + planet[prop]);
}
// Resultado:
// Planet name :- Earth
// Planet galaxy :- Andromeda
// Planet numberOfMoons :- 1
// Planet weight :- 100000

/* COMPOSICIÓN DE OBJETOS (OBJETO DE UN OBJETO) */
interface Galaxy2 {
	name: string;
	cluster: string;
}
interface Planet2 {
	name: string;
	galaxy: Galaxy2;
	numberOfMoons: number;
	weight: number;
}
let milkyWay: Galaxy2 = {
    name: "Milky Way",
    cluster: "Local Cluster"
};
let planet2: Planet2 = {
    name : "Earth",
    galaxy : milkyWay,
    numberOfMoons: 1,
    weight: 100000
};

console.log("Planet Galaxy Name :- " + planet2.galaxy.name);
console.log("Planet Galaxy Cluster :- " + planet2.galaxy.cluster);
// Resultado:
// Planet Galaxy Name :- Milky Way
// Planet Galaxy Cluster :- Local Cluster

/* Funciones con Objetos */
planet.welcomeMessage = function(): string {
	return "Greetings from " + this.name + " @ " + this.galaxy;
};

console.log("Planet Name :- " + planet.name);
console.log("Planet WELCOME Message :- " + planet.welcomeMessage());
console.log(planet);

/* Funciones dentro de objetos */
interface Planet3 {
	name: string;
	galaxy: string;
	numberOfMoons: number;
	weight: number;
}

let planet3: Planet3 = {
	name : "Earth",
	galaxy : "Milky Way",
	numberOfMoons : 1,
	weight : 100000,
	welcomeMessage(guestName: string): string {
		return "Greetings to " + guestName + 
			" from " + this.name + " @ " + this.galaxy;
	} 	
};

console.log("Planet Name 3 :- " + planet3.name);
console.log("Planet Welcome Message 3 :- " + planet3.welcomeMessage("Isha"));
// Imprimir un objeto en consola
console.log("Planet 3 :- " + planet3); // Retorna [Object Object] 
console.log(planet3); // Aquí es veu bé
