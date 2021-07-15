const getName = (name, cb) => cb(name);

const cbFunction = (myName) => {
  console.log(`name ${myName}`); // ES6
};

getName("Victor", cbFunction);

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
 
 */

const orderNumbers = (num1, num2, cbOrderNumbs) => {
  cbOrderNumbs(num1, num2);
};

const greaterNumber = (value1, value2) => {
  if (value1 > value2)
    console.log(`Numero mayor ${value1} y numero menor ${value2}`);
  else console.log(`Numero mayor ${value2} y numero menor ${value1}`);
};

orderNumbers(10, 8, greaterNumber);

/**
 * Espera 2 argumentos para numeros y uno mas de callback
 */
const operaciones = (numero1, numero2, callbackOperaciones) =>
  callbackOperaciones(numero1, numero2);
// 10, 7, callbackOperaciones(10, 7)

const operacionSuma = (int1, int2) => {
  console.log("int1", int1);
  console.log("int2", int2);
};

// operaciones(10, 5, operacionSuma);

const suma = (int1, int2) => {
  return int1 + int2;
};

const resta = (int1, int2) => {
  return int1 - int2;
};

const multi = (int1, int2) => {
  return int1 * int2;
};

console.log("suma", operaciones(10, 5, suma));
operaciones(10, 5, resta);
operaciones(10, 5, multi);
