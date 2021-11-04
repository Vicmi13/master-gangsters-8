const express = require('express');
const routerApi = require('./routes')
// 7 EN EL INDEX PRINCIPAL REQUERIMOS LOS MIDDLEWARES DEL ARCHIVO error.middleware.js
const { errorLogger, errorHandler, boomErrors } = require('./middlewares/errors.middleware')

const app = express();
const port = 8080;

app.use(express.json());

app.listen(port, () => {
    console.log(`SERVIDOR OK en puerto: ${port}`)
});

routerApi(app);
// 8 MONTAMOS ESOS MIDDLEWARE SOBRE LA APP, LOS MIDDLEWARE TOMAN COMO NEXT
// EL QUE APAREZCA EN ORDEN EN ESTA SECCION
app.use(errorLogger);
app.use(boomErrors);
app.use(errorHandler);