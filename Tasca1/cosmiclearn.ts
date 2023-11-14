/* Apunts de https://www.cosmiclearn.com/lang-es/typescript-variables.php */

document.write("Welcome to the Web Page!"); //Per escriure al DOM

let message: string = "Hello World"; // Declarar i assignar una mateixa variable en una sola línea.
console.log(message);

let message2: string; // o bé, es pot declarar amb dues línies.
message2 = "Hello World Separate Declaration";
console.log(message2);

// message2 = 10; // un sting es pot convertir en una variable.
// console.log(message2);

// Below will cause an error.
// const pi: number = 3.142; // En canvi una variable no pot se string o una altre cosa. Dona error.
// pi = 3.15;

// Número: El tipo de datos numérico se puede usar para representar un número entero o flotante.
let number: number = 10;
console.log(number);
console.log("\n");
console.log(typeof number);
console.log("\n");
// Resultado:
// 10
// number

// Número de punto flotante: Podemos usar el mismo tipo de datos numéricos para representar un número de punto flotante.
let floatingPointNumber: number = 17.23;
console.log(floatingPointNumber);
console.log("\n");
// Resultado:
// 17.23

// String: El tipo de datos de cadena se puede usar para representar la secuencia de caracteres.
let stringMessage: string = "Wow this is amazing";
console.log(stringMessage);
// Resultado:
// Wow this is amazing

// Boolean: Los datos booleanos pueden representar valores verdaderos o falsos.
let booleanTrueVariable: boolean = true;
console.log(booleanTrueVariable);
// Resultado:
// true

let booleanFalseVariable: boolean = false;
console.log(booleanFalseVariable);
// Resultado:
// false

// Null: El tipo de datos nulos se utiliza para representar valores nulos.
let nullVariable: null = null;
console.log(nullVariable);
// Resultado:
// null

// Undefined: También podemos representar un tipo de datos indefinido de la siguiente manera.
let undefinedVariable: undefined;
console.log(undefinedVariable);
// Resultado:
// undefined

// Object: El tipo de datos de objeto se utiliza para crear y representar objetos.
interface Planet{
	name: string;
	galaxy: string;
	numberOfMoons: number;
	weight: number;
}

let planet: Planet = {
	name : "Earth",
	galaxy : "Milky Way",
	numberOfMoons : 1,
	weight : 100000
};

console.log(planet.name);
console.log(planet.galaxy);
// Resultado:
// Earth
// Milky Way

// Convertir un numero en un string
let number3: number = 42;
let numberAsString: string = String(number3); // Aquí convertimos un numero en string definiendo la nueva variable como String
console.log(typeof number3);
console.log(typeof numberAsString);
console.log('Number is: ' + number3);
console.log('numberAsString is: ' + numberAsString);


// operadores de postfix: Los siguientes son los operadores postscript compatibles con TypeScript. Los operadores ++ y - se muestran con un ejemplo.

let i: number = 10;
let j: number = 10;
i++;
j--;
console.log("i++ = " + i);
console.log("j-- = " + j);
// Resultado:
// i++ = 11
// j-- = 9

// operadores de prefijo: Los siguientes son los operadores de prefijo compatibles con TypeScript.
let k2: number = 10;
console.log("++k2 = " + ++k2);
console.log("--k2 = " + --k2);
// Resultado:
// ++i = 11
// --i = 10

// operadores unarios: Los siguientes son operadores unarios soportados por TypeScript.
let i2: number = 10;
console.log("+i2 = " + +i2);
console.log("-i = " + -i2);
// Resultado:
// +i = 10
// -i = -10

// complemento bitwise y! NO lógico: Podemos realizar cumplidos en modo bit y lógico NO en TypeScript como se muestra a continuación.
let i4: boolean = true;
console.log("!i = " + !i4);
// Resultado:
// !i4 = false

// operador de coma: El operador de coma es útil para representar la asignación en una sola línea. En el siguiente ejemplo, inicializamos i, j y k en la misma línea.
let i55: number = 10, j55: number = 20, k55: number = 30;


// operadores de multiplicación / división *, %, /: Podemos realizar operaciones de multiplicación, división y recordatorio en TypeScript como se muestra a continuación.
let i44: number = 20;
let j44: number = 10;
console.log("i * j = " + i44 * j44);
console.log("i / j = " + i44 / j44);
console.log("i % j = " + i44 % j44);
// Resultado:
// i44 * j44 = 200
// i44 / j44 = 2
// i44 % j44 = 0

// operadores de suma / resta: Podemos realizar sumas y restas en TypeScript como se muestra a continuación.
let i6: number = 20;
let j6: number = 10;
console.log("i6 + j6 = " + (i6 + j6));
console.log("i6 - j6 = " + (i6 - j6));
// Resultado:
// i + j = 30
// i - j = 10

// operador exponente **: Podemos realizar la exponenciación en TypeScript como se muestra a continuación.
let i7: number = 4;
let j7: number = 2;
console.log("i7 ** j7 = " + (i7 ** j7));
// Resultado:
// i7 ** j7 = 16

// operadores relacionales <, >, <=, >=: Podemos realizar una comparación de operadores relacionales en TypeScript como se muestra a continuación.
let i12: number = 4;
let j12: number = 2;
let k12: number = 2;
console.log("i12 < j12 = " + (i12 < j12));
console.log("i12 > j12 = " + (i12 > j12));
console.log("k12 >= j12 = " + (k12 >= j12));
console.log("k12 <= j12 = " + (k12 <= j12));
// Resultado:
// i12 < j12 = false
// i12 > j12 = true
// k12 >= j12 = true
// k12 <= j12 = true

// operadores de igualdad ==, !=: Podemos realizar comparaciones de igualdad en TypeScript como se muestra a continuación.
let i14: number = 4;
let j14: number = 2;
console.log("i14 == j14 = " + (i14 == j14));
console.log("i14 != j14 = " + (i14 != j14));
// Resultado:
// i14 == j14 = false
// i14 != j14 = true

// operadores sin igualdad de conversión de tipo ===, !==: El operador de igualdad estricta === y el operador de desigualdad estricta! == no realizan ninguna conversión de tipo antes de realizar la comparación.
let i16: number = 4;
let j16: number = 2;
console.log("i16 === j16 = " + (i16 === j16));
console.log("i16 !== j16 = " + (i16 !== j16));
// Resultado:
// i16 === j16 = false
// i16 !== j16 = true

// AND a bit (& amp;), OR exclusivo a bit a bit (^), OR inclusivo a bit (|): Podemos realizar bitwise AND, OR y XOR como se muestra a continuación.
let i66: number = 4;
let j66: number = 2;
console.log("i66 & j66 = " + (i66 & j66));
console.log("i66 | j66 = " + (i66 | j66));
console.log("i66 ^ j66 = " + (i66 ^ j66));
// Resultado:
// i66 & j66 = 0
// i66 | j66 = 6
// i66 ^ j66 = 6

// AND (&&): Podemos realizar la operación lógica AND en TypeScript utilizando el operador && como se muestra a continuación.
let isPlanet2: boolean = false;
let isComet2: boolean = false;
let isMeteor2: boolean = false;
if(!isPlanet2 && !isComet2)
{
	isMeteor2 = true;
	console.log("isPlanet2 = " + isPlanet2);
	console.log("isComet2 = " + isComet2);
	console.log("isMeteor2 = " + isMeteor2);
}
// Resultado:
// isPlanet = false
// isComet = false
// isMeteor = true

// OR (||): Podemos realizar una operación OR lógica en TypeScript usando || operador como se muestra a continuación.
let isPlanet: boolean = false;
let isComet: boolean = true;
let isMeteor: boolean = true;
if(isPlanet || isComet)
{
	isMeteor = false;
	console.log("isPlanet = " + isPlanet);
	console.log("isComet = " + isComet);
	console.log("isMeteor = " + isMeteor);
}
// Resultado:
// isPlanet = false
// isComet = true
// isMeteor = false

// operador ternario (?): El operador ternario es útil para realizar una verdadera comparación falsa en una sola línea. Toma tres argumentos, primero es la sentencia condicional o la variable booleana que TypeScript evalúa como verdadero o falso. Si se evalúa como verdadero, ejecuta el segundo argumento. Si se evalúa como falso, ejecuta el tercer argumento. El segundo y tercer argumento están separados por: operador. La comparación se separa usando? operador. En el siguiente ejemplo, estamos comprobando si movieReleased es verdadero o falso. Siéntase libre de cambiar la variable movieReleased en el ejemplo a falso y verifique la salida.
let movieReleased: boolean = true;
let messages: string = movieReleased ? "Movie is released" : "Not released yet";
console.log(messages);
// Resultado:
// Movie is released

// Operadores de Asignación =, +=, -=, *=, /=, %=, &=, ^=, <<=, >>=, >>>=: El operador de asignación se utiliza para asignar datos a variables directamente o después de realizar alguna operación en él.
let i22: number = 10;
i22 += 5;
console.log("i22 += 5 is " + i22);

i22 -= 3;
console.log("i23 -= 3 is " + i22);

i22 *= 4;
console.log("i24 *= 4 is " + i22);

i22 /= 2;
console.log("i25 /= 2 is " + i22);
// Resultado:
// i22 += 5 is 15
// i23 -= 3 is 12
// i24 *= 4 is 48
// i25 /= 2 is 24
