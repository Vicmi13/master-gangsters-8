// Arreglo ordenado
const array = [1,2,3,4,5,6,7,8,9,10,11,12,60]

function binarySearch(array, element){
    let min = 0 // El valor minimo del arreglo
    let max = array.length; // El valor máximo del arreglo que se define por el length total
    let aux; //Encargada de partir el arreglo a la mitad y en general de mover la posición

    while(min <= max) {
        aux = Math.floor((min+max)/2) // divide nuestro arreglo y lo aproxima a su valor cercano hacia abajo
        if(array[aux] === element){ //encontre el elemento
            return aux
        }else if (array[aux] < element){
            //El elemento está en la segunda mitad
            min = aux +1
        }else{
            //El elemento está en la primera mitad
            max = aux - 1
        }
    }
    return -1 // Posiciones negativas en un arreglo no son validas
}

const result = binarySearch(array, 60)
console.log(result)