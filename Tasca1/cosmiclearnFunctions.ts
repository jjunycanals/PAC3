/* FUNCIONES */

function userDefinedFunction() {
	console.log("Hello World!");
}
userDefinedFunction(); // Resultado: Hello World!

// Con parametros
function add(i: number, j: number): number {
	return i + j;
}

function mul(i: number, j: number): number {
	return i * j;
}
let result = add(2,3);
console.log("add(2,3) is " + result); // Resultado: add(2,3) is 5
result = mul(2,3);
console.log("mul(2,3) is " + result); // Resultado: mul(2,3) is 6

// FUNCIONES EN UNA VARIABLE
let mathFunction = function(i: number, j: number): number {
	return i + j;
};
let result2 = mathFunction(2, 3);
console.log("mathFunction(2,3) is " + result2); // Resultado: mathFunction(2,3) is 5

// FUNCIONES FLECHA
let mathFunctionArrow = (i: number,j: number) => i + j;
console.log( mathFunctionArrow(2,3) ); // Resultado: 5 

mathFunctionArrow = (i,j) => i * j;
console.log( mathFunctionArrow(2,3) ); // Resultado: 6

// Funciones integradas

// let feedback = prompt("Can you gimme some feedback?", "Worst website");
// console.log("Feedback = " + feedback); // Resultado: Feedback = Worst website
// // o bien
// let response = confirm("Shall I set the world on fire?");
// console.log("Set World on Fire = " + response); // Resultado: Set World on Fire = true