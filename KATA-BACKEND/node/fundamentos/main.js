const operador = require('./modulos');

function main() {
    let numero1 = 10;
    let numero2 = 2;
    const res1 = operador.sum(numero1, numero2);
    const res2 = operador.substraction(numero1, numero2);
    const res3 = operador.multiply(numero1, numero2);
    const res4 = operador.div(numero1, numero2);
    console.log(`res1: ${res1} - res2: ${res2} - res3: ${res3} - res4: ${res4}`)
}

main();