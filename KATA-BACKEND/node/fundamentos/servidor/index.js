const http = require('http');
const url = require('url');
const fs = require('fs');

const server = http.createServer((request, response) => {
    
    const objectPath = url.parse(request.url);
    const path = objectPath.pathname;
    let completePath = '';

    console.log('path', path);
    
    if(path == '/') {
        completePath = 'static/index.html';
    } else {
        completePath = `static/${path}`;
    }

    fs.stat(completePath, error => {
        if(!error) {
            fs.readFile(completePath, (error, pagina) => {
                if(!error) {
                    response.writeHead(200, { 'Content-Type': 'text/html' } );
                    response.write(pagina);
                    response.end();
                } else {
                    response.writeHead(500, { 'Content-Type': 'text/plain' } );
                    response.write('error en mi servidor');
                    response.end();
                }
            })
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