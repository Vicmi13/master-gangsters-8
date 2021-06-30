var name = "Victor"

// ===================== let y const ===================== 
let age = 28
const myName = "V Torres"
console.log('age', age)
console.log('myName', myName)
age= 30
// myName = "Mig" ERROR TypeError: Assignment to constant variable
console.log('age reasigned', age)

function myPet() {
  let dog = "Bob"
  console.log('nombre del perro' , dog)
}
// console.log('nombre del perro' , dog)  Uncaught ReferenceError: dog is not defined

const myHouse = { color: "white", bedrooms: 4, withKitchen: true}
console.log('color', myHouse["color"]) //myHouse.color

myHouse.color = "red"
console.log('color', myHouse.color)





// ===================== Spread operator ... ===================== 

function katas (name1, nam2, ...args) { 
  // console.log('nombre 1', name1)
  // console.log('nombre 2', name2)
  console.log('args', args)
  args.push("ultimo valor")
  console.log('args length', args.length)
}

katas('HTML', 'Intro JS', true, undefined, {}, "Node", false)

const numeros = [1,2,3,4]

// function showNumbers(...args) {
//   for(value of args) {
//     console.log("value of args", value)
//   }
// }

//showNumbers(1,3,4,5,6,7)

// const city = "Queretaro"
// for(letter of city) {
//   console.log("letter ", letter)
// }


const object1  = { nombre1: "hola", edad: 30}
const object2  = { nombre: "que tal", hora: "18:43"}

const finalObject = { ...object1, ...object2 } // concatenando uniendo objetos
console.log('final object', finalObject);

let value1 = "welcome"
let value2 = "estamos en"
let value3 = "la g-8"
console.log(`${value1} ${value2} ${value3}`)

function isCorrectName (name) {
  return name.length >= 3 ? true : false // true : false -> 20 : 0 || "Regresa valor" : ""
  // if (name.length >= 3) {
  //   return true
  // } else {
  //   return false
  // }
}

if (isCorrectName("Alex")) {
  console.log("Function true")
}  else {
  console.log("Function false")
}

/**
 * const isCorrectName = (name) => {
 *  console.log('name')
 * } 
 * 
 */

const sumaNumeros = (x, y, z) => {
  const total = x + y + z
  return total
  // return (x + y + z);
}

const sumaNumeros1 = (x,y,z) => x + y + z // return
const mostrarNombre = name => `Tu nombre es ${name}` 

//arrow function que regresa objetos
const objectResult = { size: 20, width: "30cm" } 
const showObject = () => ({ size: 20, width: "30cm" }) // objectResult

const suma = sumaNumeros(10, 30, 40)
console.log('suma de numeros', sumaNumeros(10, 30, 40))
console.log(`suma de numeros ${suma}`)
console.log('suma de numeros', sumaNumeros1(10, 30, 50))
console.log('show Object', showObject())
console.log(` ${mostrarNombre('Victor')} `)


const restaNumeros = (a, b, c=0) => a-b-c
console.log('resta de numeros ', restaNumeros(10, 30))



/** ========== Object manipulation =========== */
const personObject = { name1: "Vic", lastName: "Torres", age1: 30, country: "Mexico"}

// ===============================================
const { name1, lastName, age1, country, } = personObject

console.log('name', name1)
console.log('lastname', lastName)
console.log('age', age1)
console.log('country', country)


const neurona = "1000"
const vasosSanguineos = "muchos"
const hemisferio = "izquierdo"

// ES 5  
// var objectSistemaNerv = {
//   neurona: neurona,
//   vasosSanguineos: vasosSanguineos, 
//   hemisferio: hemisferio 
// } 

// ES 6
const objectSistemaNerv = {
  neurona, 
  vasosSanguineos1: 'muchos', 
  hemisferio
}

console.log("sistema nervioso", objectSistemaNerv)
