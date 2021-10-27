const fs = require('fs');

fs.readFile('./archivo1.txt', (error, contenido) => {
    if(error) {
        console.log('error:', error)
    } else {
        console.log('contenido:', contenido.toString())
    }
})