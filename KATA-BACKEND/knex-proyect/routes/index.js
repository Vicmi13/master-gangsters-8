const express = require("express");

// SE va a ocupar ruta de Shoes

function mainRouter(app) {
  // instancia de Router
  const router = express.Router();

  // middleware para definir URL_BASE
  app.use("api/backend-g8/v1", router);

  // Definimo rutas
  router.use("/shoes");
}

module.exports = mainRouter;
