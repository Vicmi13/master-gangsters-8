const array = [10, 4, 40, 32 , 67, 12, 43, 31, 65, 1]

function bubbleSort(array){
    // Recorrer el arreglo basado en su tamaño total
    for (let i = 0; i < array.length; i++) {
        for(let j = 0; j < array.length; j++) {
            //Comprobar el valor actual con el valor siguiente
            if(array[j] > array[j+1]){
                let currentNumber = array[j] // variable auxiliar para almacenar el estado y evitar que se pierda

                //Ahora la posicion actual obtiene el valor de la siguiente posición
                array[j] = array[j+1]
                //Ahora la siguiente posición obtiene el valor de la posición actual
                array[j+1] = currentNumber;
            }
        }
    }
    return array;
}

const result = bubbleSort(array)
console.log(result)