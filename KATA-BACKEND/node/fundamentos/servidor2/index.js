const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {

    const objectPath = url.parse(req.url);
    console.log('objectPath => ', objectPath);
    const path = objectPath.pathname;
    console.log('SOLICITANDO => ', path);

    /*
    / OK => 200
    /permisos => 403 Forbidden
    /loquesea.txt => 404 Not found
    */

    let responseJson = { message: 'internal server error' };
    let status = 500;
    
    if(path == '/') {
        responseJson = { message: 'OK' }
        status = 200;
    } else if(path == '/permisos') {
        responseJson = { message: 'Forbidden' }
        status = 403;
    } else if(path == '/loquesea.txt') {
        responseJson = { message: 'Not found' }
        status = 404;
    }
    const responseStr = JSON.stringify(responseJson);

    res.writeHead(status, { 'Content-Type': 'application/json' } );
    res.write(responseStr);
    res.end();

});

server.listen(8080);
console.log('servidor iniciado...');