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

function showNumbers(...args) {
  for(value of args) {
    console.log("value of args", value)
  }
}

showNumbers(1,3,4,5,6,7)