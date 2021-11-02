const express = require('express');
const routerApi = require('./routes')

const app = express();
const port = 8080;

app.use(express.json());

app.listen(port, () => {
    console.log(`SERVIDOR OK en puerto: ${port}`)
});

routerApi(app);