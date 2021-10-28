// BLOQUE 1
/*
console.log('INICIANDO');
console.log('EJECTUTANDO');
console.log('TERMINANDO');
*/

// BLOQUE 2
/*
console.log('INICIANDO');
setTimeout(() => {
    console.log('EJECTUTANDO');
}, 1000);
console.log('TERMINANDO');
*/

// BLOQUE 3 CALLBACKS
/*
function run() {
    console.log('INICIANDO');
    asincrona(callbackFunction);
    console.log('TERMINANDO');
}

function asincrona(callbackFunction) {
    setTimeout(() => {
        callbackFunction();
        console.log('ejecutando 2');
    }, 1000);
}

function callbackFunction() {
    console.log('EJECTUTANDO');
}
run();
*/

// BLOQUE 4
/*
function asincrona() {
    // Promise: Es algo que se ejecuta y no sabemos cuando, pero sabemos que va a tener una respuesta.
    // ESTADOS: Pendiente, resuelto, rechazado
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // console.log('EJECTUTANDO')
            // resolve();
            // reject(new Error('mi error'))
            const respuesta = getDataBD();
            if(respuesta) {
            // if(respuesta != null && respuesta != undefined) {
                resolve();
            } else {
                reject();
            }
        }, 1000);
    })
}

function asincrona2() {
    // promise
    // setTimeout = creamos el txt
}

console.log('INICIO');
asincrona().then(() => {
    // se ejecuta si hay un resolve en la promise
    asincrona2().then(respuesta => { 
        console.log(respuesta) 
    })
    console.log('FIN');
}).catch(error => {
    // se ejecuta si hay un reject en la promise
    console.log(error);
}).finally(() => {
    // se ejecuta al final de la promise tanto en reject como en resolve
    console.log('esto siempre sera lo ultimo');
})
*/

// BLOQUE 5

function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('EJECTUTANDO')
            resolve();
        }, 1000);
    })
};

function generateReport() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('EJECTUTANDO asincrona2')
            resolve();
        }, 5000);
    })
};

async function run() {
    console.log('INICIANDO');
    await getData();
    await generateReport();
    console.log('TERMINANDO');
}

// sincrono => Una linea despues de otra
// asincrono => No necesariamente una linea despues de otra
// callback, promise, await => vuelven sincrono el codigo que tienen dentro

run();









