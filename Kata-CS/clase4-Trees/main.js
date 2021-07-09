/**
 * Arboles
 *
 *
 * Caracteristicas
 *  Primer elemento es el root
 *  El arbol comopuesto por nodos
 *  Arbol binario que se refiere a que tiene maximo 2 ramas
 *  Maneja ponderaciones
 */

// { [1,2,3,4], 21}
// { [1,2,3,4], 19}
// { [1,2,3,4], 18}
// { [1,2,3,4], 14}
// { [1,2,3,4], 11}
// { [1,2,3,4], 16}

// { "name", 19}
// { "hell", 19}
// { "age", 10}
// { "city", 13}

class Tree {
  constructor() {
    this.root = null;
  }

  addNode(value) {
    // 2
    // primera vez que entra
    if (this.root === null) {
      // const rootNode = new Node(value, null, null) ES LO MISMO
      this.root = new Node(value, null, null);
      return;
    } else {
      const currentNode = this.root; // Node : {data: 4, left: null, rigth: null }

      while (true) {
        // CUIDADO
        // si (valor menor que raiz)

        //IZQUIERDA
        if (value < currentNode.data) {
          // SI es menor      2 < 4
          if (currentNode.left) {
            currentNode = currentNode.left;
          } else {
            currentNode.left = new Node(value, null, null); // Node : {data: 2, left: null, rigth: null }
          }
          return;
        } else {
          //DERECHA
        }
        if (value > currentNode.data) {
          if (currentNode.right) {
            currentNode = currentNode.right;
          } else {
            currentNode.right = new Node(value, null, null);
          }
        }
      }
    }
  }
}

class Node {
  constructor(data, right, left) {
    this.data = data;
    this.right = right;
    this.left = left;
  }
}

const tree = new Tree();
tree.addNode(13);
tree.addNode(10);

console.log("tree", tree);

const colores = [
  "amarillo",
  "rosa",
  "rojo",
  "verde",
  "azul",
  "negro",
  "morado",
  "blanco",
];

class ColoresPar {
  constructor() {
    this.collection = [];
  }

  enqueue(item) {
    this.collection.push(item);
  }

  dequeue() {
    this.collection.shift();
  }

  length() {
    return this.collection.length;
  }
  isEmpty() {
    if (this.collection.length == 0) {
      return true;
    } else {
      return false; // return !true
    }
  }
  front() {
    return this.collection[0];
  }
}

class ColoresNon {
  constructor() {
    this.collection = [];
  }

  enqueue(item) {
    this.collection.push(item);
  }

  dequeue() {
    this.collection.shift();
  }

  length() {
    return this.collection.length;
  }
  isEmpty() {
    if (this.collection.length == 0) {
      return true;
    } else {
      return false; // return !true
    }
  }
  front() {
    return this.collection[0];
  }
}

const listaPar = new ColoresPar();
const listaNon = new ColoresNon();

for (let i = 1; i <= colores.length; i++) {
  if (i % 2 === 0) {
    listaPar.enqueue(colores[i - 1]);
  } else {
    listaNon.enqueue(colores[i - 1]);
  }
}
console.log(listaPar.collection);
