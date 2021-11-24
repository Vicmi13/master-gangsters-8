const express = require("express");

const app = express();

// processs variable global de Node
// por default 3000
const PORT = process.env.PORT || 8080;

// MIDDLEWARES
app.use(express.json());

app.listen(PORT, () => {
  console.log(`SERVIDOR corriendo en puerto: ${PORT}`);
});
