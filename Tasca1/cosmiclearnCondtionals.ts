/* CONDICIONALES EN TYPESCRIPT */
// IF THEN
let accountBalance: number = 0;
if(accountBalance < 1000) {
	console.log("Close Account!");
}	
// Resultado:
// Close Account!

// IF THEN ELSE
let accountBalance2: number = 1001;
if(accountBalance2 < 1000) {
	console.log("Close Account!");
} else {
	console.log("We love having you with us!");
}
// Resultado:
// We love having you with us!

//  IF THEN ELSE IF ELSE
let accountBalance3: number = 1000001;
if(accountBalance3 < 1000) {
	console.log("Close Account!");
} else if(accountBalance3 > 1000000) {
	console.log("Please find a Europe tour cruise package in your mailbox");
} else {
	console.log("We love having you with us!");
}
// Resultado:
// Please find a Europe tour cruise package in your mailbox

// SWITCH
let alphabet: string = 'A';
switch(alphabet) {
	case 'A':
		console.log("Apple");
		break;
	case 'B':
		console.log("Ball");
		break;
	case 'C':
		console.log("Cat");
		break;
	case 'D':
		console.log("Doll");
		break;
	default:
		console.log("EZ!")
}
// Resultado:
// Apple