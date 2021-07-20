// Ejemplo con cumpleaños
// Si tengo el dinero 📲
// Si no tengo dinero 🤗

// Usando un dato aleatorio

const promesaCumple = new Promise((resolve, reject)=>{
    const dinero = Math.floor(Math.random() * 1000);
    console.log("Revisando cuanto dinero tengo...");

    setTimeout(()=>{
        dinero >= 500
        ? resolve('Toma tu regalo 📲')// Estado fulfilled(promesa cumplida)
        : reject('No complete el dinero, te doy un abrazo 🤗') //Estado rejected   
    }, 5000)
})
promesaCumple
.then(result => console.log(result)) // Recibe result
.catch(error => console.log(error)) // Recibe los errores