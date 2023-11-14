/* MAPA TYPESCRIPT */

    // Un mapa es una estructura de datos de par de valores clave. 
    // Es similar a un diccionario en el que ingresas una entrada y obtienes el valor correspondiente asociado. 
    // Podemos poner valores en el mapa usando la función .SET(). 
    // La función .SET() de configuración toma dos parámetros, la primera es la clave y la segunda el valor. 
    // Podemos obtener valores del mapa usando la función get .GET()
    // La función .GET() debes poner la clave i siempre devuelve el valor.

    let countryCapitals: Map<string, string> = new Map();

    countryCapitals.set("India", "New Delhi");
    countryCapitals.set("U.S.A", "Washington D.C.");
    countryCapitals.set("Japan", "Tokyo");
    countryCapitals.set("France", "Paris");
    console.log("Capital of France is = " + countryCapitals.get("France"));

    // Para obtener las KEYS
    countries = countryCapitals.keys();
    for(let country of countries) {
        console.log(country + " ");
    }

    // Para obtener todos los VALUES
    var capitals = countryCapitals.values();
    for(let capital of capitals) {
        console.log(capital + " ");
    }

    // .entries() > Es pot cridar les KEYS I VALUES alhora
    // Podemos obtener ambas claves / valores llamando a la función .entires() en el mapa. La clave y el valor en este caso estarán separados por comas.
    for(let countryCapital of countryCapitals.entries()) {
        console.log(countryCapital + "\n");
    }