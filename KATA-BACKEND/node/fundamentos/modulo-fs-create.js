const fs = require('fs');

fs.writeFile('./archivo1.txt', 'hola desde el archivo', error => {
    if(error) {
        console.log('error:', error)
    } else {
        console.log('archivo creado exitosamente!!')
    }
})