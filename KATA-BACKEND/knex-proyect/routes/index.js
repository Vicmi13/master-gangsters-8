const express = require("express");

const ShoesRoutes = require("../routes/ShoesRoutes");
const GenresRoutes = require("../routes/GenreRoutes");
const UsersRoutes = require("../routes/UsersRoutes");

function mainRouter(app) {
  // instancia de Router
  const router = express.Router();

  // middleware para definir URL_BASE
  app.use("/api/backend-g8/v1", router);

  // DESDE REACT se ejecutar GET localhost:8080/api/backend-g8/v1/shoes
  // DESDE POST se ejecutar POST localhost:8080/api/backend-g8/v1/shoes
  // DESDE POST se ejecutar GET:id localhost:8080/api/backend-g8/v1/shoes
  // DESDE POST se ejecutar DELETE:id localhost:8080/api/backend-g8/v1/shoes
  // DESDE POST se ejecutar PATCH:id localhost:8080/api/backend-g8/v1/shoes

  // DESDE REACT se ejecutar POST localhost:8080/api/backend-g8/v1/genres

  // Definimo rutas
  // api/backend-g8/v1/genres
  router.use("/genres", GenresRoutes);
  router.use("/shoes", ShoesRoutes);
  router.use("/users", UsersRoutes);
}

module.exports = mainRouter;
