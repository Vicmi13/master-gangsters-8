const express = require("express");
const mainRouter = require("./routes");
require("dotenv").config(); // { path: '/custom/path/to/.env' }

const { printtName, printTime } = require("./middleware/consolesMiddleware");

const app = express();

// processs variable global de Node
// por default 3000
const PORT = process.env.PORT || 8080;

// MIDDLEWARES
app.use(express.json());

// // DESDE REACT se ejecutar GET  localhost:8080
app.get("/", printTime, printtName, (req, res) =>
  res.json({ message: "Este es el backend de la G8" })
);

console.log("variable de entorno", process.env.NODE_ENV);

// Index de rutas
mainRouter(app);

app.listen(PORT, () => {
  console.log(`SERVIDOR corriendo en puerto: ${PORT}`);
});
