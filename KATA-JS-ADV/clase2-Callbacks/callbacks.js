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
