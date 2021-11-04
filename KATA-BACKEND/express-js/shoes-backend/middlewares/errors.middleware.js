// 5 ¿DONDE ESTA EL MIDDLEWARE?
// 6 HABRIA QUE CREARLO

function errorLogger(err, req, res, next) {
    console.log('hubo un error....', err);
    next(err);
}

function errorHandler(err, req, res, next) {
    console.log('errorHandler....');
    res.status(500).json({ message: err.message, description: err.stack})
}


module.exports = { errorLogger, errorHandler };