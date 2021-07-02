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
