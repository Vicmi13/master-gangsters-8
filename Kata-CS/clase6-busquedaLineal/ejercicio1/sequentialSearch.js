/* const array=[2,4,7,8,2,10,5,6]

function busquedaSecuencial(array, elementToFind){
    // Debo tener el array
    // Debo tener el elemento a buscar
    // Tamaño del array, para saber cuantas veces tiene que iterar
    if(array.length === 0){ //Verificar si la lista esta vacia
        return null
    }
    for(let i = 0; i < array.length; i++){ // Iterar el arreglo recibido
        if(array[i] === elementToFind){ // Busco un elemento que haga match o empate
            return i
        }
    }
    return "Not Found"
}

const result = busquedaSecuencial(array, 4)
console.log(result) */



function masDuplicado(){
    const numeros  = [1, 2, 2, 2, 3, 4, 4, 5];
    let duplicados = [];
     
    const tempArray = [...numeros].sort();
     
    for (let i = 0; i < tempArray.length; i++) {
      if (tempArray[i + 1] === tempArray[i]) {
        duplicados.push(tempArray[i]);
      }
    }
    
    var mayor = 0;
     
    for(i = 0; i < duplicados.lenght; i++){
        if (duplicados[i] > mayor)
        {
            mayor = duplicados[i];
        };
    }

    return mayor;
}

 const duplicado = masDuplicado()

 
console.log(duplicado); // [2, 4]



