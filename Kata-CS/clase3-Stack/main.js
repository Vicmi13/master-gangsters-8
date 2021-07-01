/**
 * Pila tiene estos  metodos
 *
 *  push()
 *  pop()
 *  length()
 *  isEmpty()
 */

const pila = []; // ya es una pila y esta vacia

pila.push("perro");
pila.push("elefante");
pila.push("Ornitorrinco");
pila.push("Gatos");
pila.push("Ajolote");

console.log(pila);

const elementoEliminado = pila.pop();
console.log("elementoEliminado", elementoEliminado);
console.log(pila);

/** Palindromo con pilas  */
const word = "kayak";

let revertWord = "";
let letterArray = [];

for (letra of word) {
  letterArray.push(letra);
}

for (let i = 0; i < word.length; i++) {
  // revertWord = revertWord + letterArray.pop();
  revertWord += letterArray.pop();
}

if (word === revertWord) {
  console.log(`La palabra ${word} es un palindromo`);
} else {
  console.log(`La palabra NO ${word} es un palindromo`);
}

/**
 * Con ternario
 * word === revertWord ? console.log(`La palabra ${word} es un palindromo`) : `La palabra NO  ${word} es un palindromo`)
 */

class Stack {
  constructor() {
    this.storage = {}; // elementos de nuestra pila
    this.length = 0;
  }

  push(elemento) {
    this.storage[this.length] = elemento; // { 0: "Lunes"}
    this.length++; // 1
  }

  pop() {
    if (this.length === 0) {
      return null;
    }
    /** else {} */
    this.length--; // 3

    const removeElem = this.storage[this.length]; // {0 : "Lunes"}, {1: "Martes"}
    delete this.storage[this.length]; // eliminamos el atributo del objeto storage

    return removeElem;
  }

  length() {
    return this.length;
  }
}

const myStack = new Stack();
console.log(myStack.pop());
myStack.push("Lunes");
myStack.push("martes");
myStack.push("Miercoles");
myStack.push("Jueves");

console.log("myStack", myStack);

console.log(myStack.pop());

console.log("myStack", myStack);
