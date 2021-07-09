/*Arreglo bidimensional:
arreglo dontro otro arreglo */
const graph1 = [
  [0,1,1,0,0], //Posición 0
  [0,0,1,0,1], //Posición 1
  [0,0,0,1,0], //Posición 2
  [0,0,0,0,1], //Posición 3
  [0,0,0,0,0]  //Posición 4
]
console.log(graph1)

////////////////////////////////////////////////////////////////

const graph2 = []

class Node {
  constructor(value){
      this.value = value
  }
}

//Grafo dirigido
class Graph{
  constructor(){
      this.nodes = []
      this.edges = []
  }

  addNode(value){//agregamos un nodo a nuestro grafo
      const node = new Node(value) //Creamos nuevo nodo
      this.nodes.push(node)//Lo a gregamos a la lista de nodos
  }

  getNode(value){//obtener o encontrar un nodo en especifico
      let nodeToGet
      if(this.nodes.length == 0){
          return null
      }else{
      for(let i= 0; i <this.nodes.length; i++){ // Vamos a recorrer la lista de nodos en busca del nodo
          if(this.nodes[i].value === value){ //Si encuentro el nodo
              nodeToGet = this.nodes[i] // Este es el nodo que estoy buscando
              //asigno el nodo que encontre a la variable nodeToGet
              //para regresarlo
          }
      }

      return nodeToGet //aqui regreso el nodo que encontré
  }
}

  addEdge(value1, value2){ // cada arista conecta con 2 nodos (anterior y siguiente)
      const node1 = this.getNode(value1)//Busco el primer nodo
      const node2 = this.getNode(value2)//Busco el segundo nodo
      const edge = [node1, node2] //Representación de la arista (el nodo 1 va hacia el nodo 2)
      this.edges.push(edge)
  }

  print(){
      console.log("Print Method")
      for(let i = 0; i < this.edges.length; i++){
          console.log(`${this.edges[i][0].value} ----> ${this.edges[i][1].value}`)
      }
  }


}

////////////////////////////////////////////////////////////////

const myGraph = new Graph(); //Creando grafo

//Agregando Nodos
myGraph.addNode(0)
myGraph.addNode(1)
myGraph.addNode(2)
myGraph.addNode(3)
myGraph.addNode(4)

//Agregando Edges ---relaciones
myGraph.addEdge(0,1)
myGraph.addEdge(0,2)
myGraph.addEdge(1,2)
myGraph.addEdge(1,4)
myGraph.addEdge(2,3)
myGraph.addEdge(3,4)

myGraph.print()

function adjacencyMatrix(myGraph){
  //va a ser codigo bien chido
  //mi matriz empieza vacia
  const matrix  = []
  //primero necesito saber cuantos nodos tengo y apartir de eso puedo agrgear nuevos arreglos
  for(var i = 0; i < myGraph.nodes.length; i++){
      var row = []
      for(var j=0; j < myGraph.nodes.length; j++){
          //relleno la matriz de puros ceros solo necesito las pocisiones
          //despues los cambiare por los 1 correspondientes
          row.push(0)
      }
     matrix.push(row)
  }
  
  //ahora tengo que buscar las relaciones  por cada nodo
  for(var i = 0; i < myGraph.nodes.length; i++){
      //vamos a ir buscando nodo por nodo donde  y vemos que edges tiene
      const nodo = myGraph.nodes[i]
      for(var j = 0; j < myGraph.edges.length; j++){ //busco en las aristas
          if( myGraph.edges[j][0].value === nodo.value){
              //encontre un una arista que concatena ese mi nodo actual con otro nodo
             const row = matrix[i] // obtengo mi fila
             const nodoConected = myGraph.edges[j][1]// este es el nodo con el que estoy conectado
             row[nodoConected.value] = 1; //encontramos una relacion ahora estamos seguros de agregar el 1
             //ocupamos el value por que nos indica en que poscicion debo agregar el 1
          }

      }

  }

  return matrix //regreso ya la matriz completa
}
console.log("matriz de adjacencias")
console.table(adjacencyMatrix(myGraph))

//resultado
/* 
  const graph1 = [
  [0,1,1,0,0], // posicion  --> 0
  [0,0,1,0,1], // posicion  --> 1
  [0,0,0,1,0], // posicion  --> 2
  [0,0,0,0,1], // posicion  --> 3
  [0,0,0,0,0],  // posicion  --> 4
] /



*/

// Crear una funcion que a partir de un grafo genere la matriz de adyancencias




