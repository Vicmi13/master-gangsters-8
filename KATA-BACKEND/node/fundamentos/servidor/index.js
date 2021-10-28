const http = require('http');
const url = require('url');
const fs = require('fs');

const server = http.createServer((request, response) => {
    
    // 1 Identificar la path que estaba llegando
    const objectPath = url.parse(request.url);
    const path = objectPath.pathname;
    let fileSystemPath = '';

    console.log('path', path);
    
    // 2 Validar la path que estabamos solicitando
    if(path == '/') {
        // 3 setear la ruta donde esta el archivo
        fileSystemPath = 'static/index.html';
    } else {
        // 3 setear la ruta donde esta el archivo
        fileSystemPath = `static/${path}`;
    }

    // valida que la ruta del archivo exista
    fs.stat(fileSystemPath, error => {
        // si existe la ruta has esto
        if(!error) {
            // 4 Leer el archivo
            fs.readFile(fileSystemPath, (error, archivo) => {
                if(!error) {
                    // 5 Generar una response con el archivo solicitado (el que fue leido en fs.readFile)
                    response.writeHead(200, { 'Content-Type': 'text/html' } );
                    response.write(archivo);
                    response.end();
                } else {
                    response.writeHead(500, { 'Content-Type': 'text/plain' } );
                    response.write('error en mi servidor');
                    response.end();
                }
            })
        // si no existe la ruta has esto
        } else {
            // RETO
            response.writeHead(404, { 'Content-Type': 'text/plain' } );
            response.write('Not Found!');
            response.end();
        }
    })

});

server.listen(8080);
console.log('servidor iniciado...');