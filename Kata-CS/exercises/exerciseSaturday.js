// 1.- Hacer una función que reciba como parámetros una pila, y un número.
// La función debe retornar tantos elementos como diga el número (segundo parámetro).
// Entrada : mifuncion([‘Manzana’,‘Cebolla’,‘Apio’,‘Naranja’,‘Papaya’,‘Sandía’,‘Melón’],4)
// Salida: [‘Manzana’,‘Cebolla’,‘Apio’,‘Naranja’]


function customStack(fruitStack, filterNumber) {
  if(filterNumber > fruitStack.length) {  
    return `${filterNumber} es mayor que el tamaño`
  } else {
    const filterArray = []
    for(let i = 0; i < filterNumber; i++) {
      filterArray.push(fruitStack[i])
    }
    console.log(filterArray.length)
    return `Pila filtrada ${filterArray}`
  }

}


const fruitArray = ['Manzana','Cebolla','Apio','Naranja','Papaya','Sandía','Melón']
const numberToFilter = 5

// const result  = customStack(fruitArray, numberToFilter)
// console.log(result) 
 console.log(customStack(fruitArray, numberToFilter)) // Pila filtrada 