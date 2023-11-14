// Sustituye /***/ por las instrucciones adeacuadas que cumplan las operaciones 
// y salidas indicadas en los comentarios.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function printArray(array) {
    //code to print the array on console
    console.log("\n");
    array.forEach(function (entry) {
        console.log(entry + " ");
    });
    console.log("\n");
}
var array = [2, 3, 4];
// Perquè retorni un 2 de l'array anterior i alhora l'element 2 sigui tret de l'array utlitizem .shift()
console.log(array.shift()); //2 
printArray(array); // 3,4
array.push(5);
printArray(array); // 3,4,5
console.log(array.pop()); //5
printArray(array); // 3,4
array.push(1);
printArray(array); // 3,4,1
array.unshift(8);
printArray(array); // 8,3,4,1
/** check if every number is greater than 3 */
var everyisgreater = array.every(function (item) {
    if (item > 3) {
        return false;
    }
    ;
});
console.log(everyisgreater); //false
/** check if every number is less than 10 */
var everyisless = array.some(function (item) { return item < 10; });
console.log(everyisless); //true
console.log(array.sort()); //1,3,4,8
console.log(__spreadArray([], array, true).sort(function ordnearDesc(a, b) {
    return b - a;
})); //8,4,3,1
