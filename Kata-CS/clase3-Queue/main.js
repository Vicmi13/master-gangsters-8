/**
 * Método de las colas
 *
 * enqueue() -> encolar
 * dequeue() -> sacar de la cola
 *
 * length() -> tamaño
 * isEmpty() -> Nos indica si la cola esta vacia
 * front() -> El primer elemento de la cola
 */

class Queue {
  constructor() {
    this.collection = []; // Aqui se almacena la cola
  }

  enqueue(item) {
    this.collection.push(item);
  }

  dequeue() {
    this.collection.shift(); // Va a sacar el primer elem de la queue
  }

  length() {
    return this.collection.length;
  }

  isEmpty() {
    if (this.collection.length == 0) {
      return true;
    } else {
      return false;
    }
    /**
     * return this.collection.length === 0
     * return this.collection.length === 0 ? true: false
     * return this.collection.length ? true: false
     *
     */
  }

  front() {
    return this.collection[0];
  }
}

const myQueue = new Queue();
myQueue.enqueue("Isaac");
myQueue.enqueue("Fabian");
myQueue.enqueue("Oscar");
myQueue.enqueue("Julio");

console.log(myQueue.front());

myQueue.dequeue();

console.log(myQueue.front());

myQueue.dequeue();

console.log(myQueue.front());
console.log("myQueue", myQueue);



