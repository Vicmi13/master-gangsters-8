const array = [10, 4, 40, 32, 67, 12, 43, 31, 65, 1]

function insertionSort(array){ // Recorrer el array
    for (let i = 0; i < array.length; i++) {//Izquierda vacia porque inicia en 0
        let position = i;
        //Izquierda vacia
        //El de la Izquierda tiene que ser mayor al de la derecha
        while(position >= 0 && array[position - 1] > array[position]){
            //almacenar el valor temporal
            let aux = array[position - 1]
            //Hacer el cambio
            array[position - 1] = array[position]
            array[position] = aux

            //para movernos al elemento anterior
            position = position - 1
        }
        
    }
    return array
}

const result = insertionSort(array)
console.log(result);