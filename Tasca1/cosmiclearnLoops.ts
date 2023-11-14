/* LOOPS IN TYPESCRIPT */

// FOR LOOP
let i: number;
for(i=0; i < 10; i++) {
	console.log(i + " ");
}
// Resultado:
// 0 1 2 3 4 5 6 7 8 9

// WHILE LOOP
let i2: number = 0;
while( i2 < 10 ) {
	console.log(i2 + " ");
	i2++;
}
// Resultado:
// 0 1 2 3 4 5 6 7 8 9

// DO WHILE LOOP
let i3: number = 0;
do {
	console.log(i3 + " ");
	i3++;
} while(i3 < 10);
// Resultado:
// 0 1 2 3 4 5 6 7 8 9

// FOR EACH
let vowels: Array<string> = ["a", "e", "i", "o", "u"];
vowels.forEach(	function(entry) {
		console.log(entry + " ");
	}
);
// Resultado:
// a e i o u

// NESTED LOOP
let i5: number;
let j5: number;
for(i5=0; i5 < 4; i5++) {
	for(j5=0; j5 < 4; j5++) 	{
		console.log(i5 * j5 + " ");
	}
}
// Resultado:
// 0 0 0 0
// 0 1 2 3
// 0 2 4 6
// 0 3 6 9

// USE OF BREAK
let i66: number = 0;
while(i66 < 10) {
	i66 += 1;
	if(i66 == 5) 	{
		break;
	}
	console.log(i66 + " ");
}  // Resultado: 1 2 3 4
let i55: number;
let j55: number;
outerLoop: for(i55=0; i55 < 4; i55++) {
	for(j55=0; j55 < 4; j55++) {
		console.log(i55 * j55 + " ");
        if(i55 * j55 == 6) { 
            break outerLoop;
        }
	}
} // Resultado: 0 0 0 0  0 1 2 3   0 2 4 6

// CONTINUE 
let i77: number = 0;
while(i77 < 10) {
	i77++;
	if(i77%2 == 0) {
		continue;
	}
	console.log(i77 + " ");
} //  Resultado: 1 3 5 7 9
let i56: number;
let j56: number;
outerLoop: for(i56=0; i56 < 3; i56++) {
	for(j56=0; j56 < 4; j56++) {
		console.log(i56 * j56 + " ");
		if( i56*j56 === 2 ) {
			continue outerLoop;
		}
	}
} // Resultado: 0 0 0 0    0 1 2    0 2