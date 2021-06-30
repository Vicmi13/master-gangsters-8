/**
 * {
 * Linked list
 *  1: Head
 *  {
 *  Nodo:  A
 *    1.- elemento / data
 *    2.- next
 * }
 * {
 *  Nodo:  B
 *    1.- elemento / data
 *    2.- next
 * }
 * {
 *  Nodo: C
 *    1.- elemento / data
 *    2.- next
 * }
 *
 *
 */

class LinkedList {
  constructor() {
    this.head = null;
  }

  addElement(data) {
    const node = new Node(data); // creamos instancia de Node
    if (this.head === null) {
      // validamos si es primer elemento
      this.head = node; // { data: 20, next: null }
    } else {
      // cuando hay mas elementos

      // variable auxiliar
      let currentNode = this.head; // { data: 20, next: null }

      while (currentNode.next) {
        // llegar a la ultima posicion de nuestra lista
        currentNode = currentNode.next;
      }

      // add node
      currentNode.next = node;
    }
  }
}

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

/**
 * LinkedList {
 *   head apuntara a nuestro node1
 *   node1 = new Node()
 *   node2 = new Node()
 *   node3 = new Node()
 *   null
 * }
 */

const linkedList = new LinkedList();
linkedList.addElement(20);
linkedList.addElement(33);
linkedList.addElement(14);

console.log(linkedList);
