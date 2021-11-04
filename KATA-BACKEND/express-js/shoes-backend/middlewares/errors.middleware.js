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

function boomErrors(err, req, res, next) {
    if(err.isBoom) {
        const { statusCode } = err.output;
        const { message } = err.output.payload;
        res.status(statusCode).json({ message });
    }
}

module.exports = { errorLogger, errorHandler, boomErrors };