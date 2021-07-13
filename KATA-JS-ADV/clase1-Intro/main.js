const main = () => {
  console.log("header");
} 

const showIndex = () => {
  for (let index = 0; index < 10000; index++) {
    console.log('indice', index)
  }
} 


// Se manda llamar
main()
showIndex()


const playList = (name) => {
  const songArray = ["november rain", "live and let die", "welcome to the jungle"]
  for(let i = 0; i < songArray.length; i ++) {
    console.log(`canción #${i +1} - ${songArray[i]} de ${name}`)
  }
}

// https:spotify.web/login

// https: facebook.com/webapi/v1/comments 
/**
 * form con data cambio Fabian
 */

// simulando que estamos recuperando info de servidor que tiene esa playlist 
setTimeout(() => { // 0 ,1 2
  console.log('hola desde timeOut')
  playList('guns and roses')
}, 6000)


setTimeout(() => {
  console.log('hola desde timeOut 10 segs')
}, 10000)


const showLetter = () => {
  console.log('SHOW LETTER ==============')
}

const intervalLetter = setInterval(showLetter, 2000)


setTimeout(() => {
// detener setInterval 
clearInterval(intervalLetter)
}, 15000)

console.log("hola");
console.log("amig@s");
console.log("Modulos");
console.log("JS AVANZADO");
