const getName = (name, cb) => cb(name);

const cbFunction = (myName) => {
  console.log(`name ${myName}`); // ES6
};

getName("Victor", cbFunction);
////////////////////////////////////////////////////////////////////////
//declarando funcion
const printLetter = (x) => x();

//llamando funcion
printLetter(() => {
  console.log("suma", 10 + 50);
});

/**
 * Ejercicio, escribir una funcion que espera 2 argumentos de tipo número y uno mas de callback
 * El callback debe de indicar como se deben de acomodar esos 2 numeros,
 *
 * ASCENDENTE O DESCENDENTE
 *
 *
 * 1 = ASCENDENTE
 * 0 = DESCENDENTE
 * myfunction(10, 8, cb(0)) -> 8, 10
 */
