function sum(a, b) {
    return a + b;
}

function substraction(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}
/*
exports.sum = sum;
exports.substraction = substraction;
exports.multiply = multiply;
exports.div = div;
*/

module.exports = {
    sum, substraction, multiply, div
}