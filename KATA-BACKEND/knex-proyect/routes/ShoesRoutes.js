const express = require("express");
const { ShoesController } = require("../controllers");
const router = express.Router();
const validateJWT = require("../middleware/validateToken");

// Esta ruta debe de estar protegida
router.post("/", validateJWT, ShoesController.create);

router.get("/", ShoesController.findAll);

router.get("/:id", ShoesController.findOneById);

router.patch("/:id", ShoesController.updateById);

router.delete("/:id", ShoesController.deleteById);

module.exports = router;
