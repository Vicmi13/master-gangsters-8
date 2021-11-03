// 5 ¿DONDE ESTA EL MIDDLEWARE?
// 6 HABRIA QUE CREARLO

function errorLogger(err, req, res, next) {
    console.log('hubo un error....');
}

function errorHandler(err, req, res, next) {
    console.log('errorHandler....');
    res.status(500).json({ message: err.message })
}


module.exports = { errorLogger, errorHandler };