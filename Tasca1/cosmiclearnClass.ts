/* CLASES EN TYPESCRIPT */
/* crear una class planet on es defineixen els atributs relacionats amb el planeta */
class Planet {
	name: string;
	galaxy: string;
	numberOfMoons: number;
    weight: number;
    welcomeMessage(guestName: string): string {
		return "Greetings to " + guestName
		+ " from " + this.name + " @ " + this.galaxy;
	}
}
// Es creen planetes diferents amb el CONSTRUCTOR ( NEW + nom de la CLASSE). Passant els valors dels atributs.
let earth 	= new Planet("Earthh", "Milky Way", 1, 10000);
let jupiter = new Planet("Jupiterr", "Milky Way", 21, 2000000);
console.log(earth.welcomeMessage("Dr Isha"));
