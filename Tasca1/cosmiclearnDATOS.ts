/* STRINGS */
        // 3 formas de declara un string
        // Double quote strings: Una cadena se puede incluir entre comillas dobles como se muestra a continuación.
        let message: string = "Long long ago in a galaxy far far away";
        console.log(message);
        // Single quoted strings: Una cadena también se puede incluir entre comillas simples como se muestra a continuación.
        let message2: string = 'Long long ago in a galaxy far far away';
        console.log(message2);
        // . Back-ticks strings. Podemos expresar un String dentro de backticks. Es útil cuando tenemos expresiones dentro del string
        let message3: string = `2 cube is ${2 ** 3}`;
        console.log(message3);
        // Appending strings: Podemos añadir cadenas utilizando el operador +
        let result: string = message2 + " " + message3;
        console.log(result);
        // Podemos iterar sobre una cadena de TypeScript usando for..of loop
        let vowels: string ="aeiou";
        for(let vowel of vowels) {
            console.log(vowel + " ");
        }
        // Mayúsculas o minsuculas en un string.
        let letters: string = "Captain Skanda";
        console.log(letters.toLowerCase());
        console.log(letters.toUpperCase());

        // Contar la longitud
        console.log(letters.length);  

        // función de recorte .trim() de espacios iniciales y finales
        let letters2: string = "    Captain Cosmos    ";
        console.log(letters2.trim()); // Resultado:  Captain Cosmos

        // Startwith/EndWith y indexof()/incluedes()
        let letters55: string = "Captain Shyam Cosmos";
        console.log(letters55.startsWith("Captain")); // True
        console.log(letters55.endsWith("Cosmos")); // True
        console.log(letters55.indexOf("Shy")); // 8
        console.log(letters55.indexOf("test")); // -1 > Indica que no ha trobat res.
        // includes() devuelve verdadero o falso dependiendo de si la subcadena se encuentra dentro de la cadena. Esto es útil cuando realmente no queremos una salida numérica sino solo un valor booleano para indicar si se encuentra la subcadena o no
        console.log(letters55.includes("Shy")); // True
        console.log(letters55.includes("Shay")); // false

        // SLICE() / REPLACE()
        let letters66: string = "Captain Cosmos";
        console.log(letters66.slice(0, 7)); // Captain
        console.log(letters66.replace("Cosmos", "Earth")); // Captain Earth

        // SPLIT ()
        let planetStr: string = "Mercury,Venus,Earth,Mars,Jupiter";
        console.log(planetStr.split(","));  // (5) ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter']

/* ARRAY */

        let planets8: Array<string> = new Array();
        let planets9: Array<string> = [];   
        let planets99: Array<string> = ["Mercury", "Venus", "Earth", "Mars", "Jupiter"];
        console.log("planets[0] = " + planets99[0]);
        // Canviar un element d'un array
        planets99[1] = "Saturn";
        console.log("planets[1] = " + planets99[1]);
        console.log(planets99);
        // Mida del array
        console.log("Length of planets = " + planets99.length);
        // Matrices compuestos por elementos de varios tipos
        let cosmicdump: Array = [3.14, 42, "Jupiter"];
        console.log(typeof cosmicdump[0]);
        console.log(typeof cosmicdump[2]);

        // .push() and .pop()
        planets99.push("Pluto"); // Afegir al final de l'array
        console.log("Planets .push() = " + planets99);
        let planet = planets99.pop(); // Elimina l'últim element de l'array
        console.log("Planets .pop() = " + planets99);

        // .shift() i .unshift()
        // shift obtendrá el elemento al comienzo de la matriz y la desplazará los demás
        // Unshift agregará un elemento al principio de la matriz. 
        let planets77: Array<string> = ["Mercury", "Venus", "Earth", "Mars", "Jupiter"];
        console.log("Array inicial es: " + planets77);
        let planet33 = planets77.shift();
        console.log("Planet shifted is: " + planet33); // Planet shifted is: Mercury
        console.log("Planets = "+ planets77); // Planets = Venus,Earth,Mars,Jupiter
        planets77.unshift("Neptune");
        console.log("Planets con unshift de neptune = "+ planets77); // Planets = Neptune,Mercury,Venus,Earth,Mars,Jupiter


        /* Buscar y recorrer una MATRIZ */
        // Las siguientes son varias formas de recorrer una matriz en TypeScript. 
            // Buscar en una matriz for(;;):
            for(let i = 0; i < planets77.length; i++) {
                console.log(planets77[i] + " ");
            } // Resultado: Mercury Venus Earth Mars Jupiter

            // for .. in: Una forma alternativa de iterar a través de una matriz en lugar 
            // de usar un elemento de índice es una forma simple de bucle in.
            for(let planetIndex in planets77) {
                console.log(planets77[planetIndex] + " ");
            } // Resultado: Mercury Venus Earth Mars Jupiter

            // for .. loop: En el bucle for .. in todavía utilizamos un índice para acceder a los planetas. 
            for(let planet of planets77) {
                console.log(planet + " ");
            } // Resultado: Mercury Venus Earth Mars Jupiter

        /* Matrices multidimensionales */
        let matrix2x2: Array<Array<number>> = [
            [1,2,3],
            [4,5,6],
            [7,8,9]
        ];
        // Para recorer doble bucle for
        let i: number;
        let j: number;

        for(i=0; i < matrix2x2.length; i++) {
            for(j=0; j < matrix2x2.length; j++)	{
                console.log(matrix2x2[i][j]  + " ");
            }
        }

        // Matrices de empalme: Un empalme es una parte de una matriz. Podemos empalmar la matriz mediante la función de llamada de empalme. 
        // En el siguiente ejemplo, creamos una matriz de empalmes de planetas para extraer solo de 2º al 4º de planetas.
        let planets88: Array<string> = ["Mercury", "Venus", "Earth", "Mars", "Jupiter"];
        console.log(planets88.splice(1,3)); //Resultado: Venus,Earth,Mars

        // Concatenar ARRAY .concat()
        let planetSet1: Array<string> = ["Mercury", "Venus"];
        let planetSet2: Array<string> = ["Earth", "Mars"];
        planetSet1 = planetSet1.concat(planetSet2);
        console.log(planetSet1); // Resultado: Mercury,Venus,Earth,Mars

        // Buscar index amb .indexOf()
        // Buscar dentro de la matriz: Usando la función indexOf podemos buscar un elemento dentro de la matriz. La función indexOf devuelve -1 si no se encuentra el elemento. Si se encuentra, devuelve el índice donde encontró el elemento
        console.log(planets77.indexOf("Earth"));
        console.log("planeta trobat amb .indexOf : " + planets77[planets77.indexOf("Earth")]);
        // includes() > El mateix que indexOf() pero torna true/false
        console.log(planets77.includes("Earth")); // True
        console.log(planets77.includes("Saturn")); // False

        // Trobar un element .find() o findIndex()
        let planets33: Array<string> = ["Mercury", "Venus", "Earth", "Mars", "Jupiter"];
        let planetVenus = planets33.find(planet => (planet == "Venus"));
        let planetVenusIndex = planets33.findIndex(planet => (planet == "Venus"));
        console.log(planetVenus);
        console.log(planetVenusIndex);

        // .filter > Pots obtenir varis elements d'un Array
        let filteredPlanets = planets33.filter(
            planet => (planet == "Venus" || planet == "Earth")
        );
        console.log(filteredPlanets); //Resultado: Venus,Earth

        // .map() > Permet modificar cada element del ARRAY
        let nombres: Array<number> = [1,2,3,4,5];
        let moddednum = nombres.map( num => "Nombre " + num );
        console.log(moddednum);
        let moddedPlanets = planets33.map( planet => "Planet " + planet );
        console.log(moddedPlanets);

        // .sort() > Ordenar
        planets33.sort();
        console.log(planets33); // Resultado: Earth,Jupiter,Mars,Mercury,Venus

        // OPERAR dins d'un Array/Matriu
        planets33.forEach(
            function(planet, index) 	{
                console.log(planet + " " + index);
            }
        );
