// Sustituye /***/ por las instrucciones adecuadas que cumplan las operaciones 
// y salidas indicadas en los comentarios.
function printLines() {
    for (var key in myHangar) {
        var lines = myHangar[key];
        console.log("".concat(key, ":").concat(lines.model, "(").concat(lines.npassengers, ")"));
    }
}
var myHangar = {};
myHangar['123Z'] = {
    model: 'airbus',
    npassengers: 200
};
myHangar['H789'] = {
    model: 'boeing',
    npassengers: 151
};
printLines();
/** Print following lines (going through the object)
 * 123Z:airbus(200)
 * H789:boeing(151)
 */
