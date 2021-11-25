const express = require("express");
const { GenreController } = require("../controllers");

const router = express.Router();

// object.atributo.create()
router.post("/", GenreController.create);

router.get("/", GenreController.findAll);

router.get("/:id", GenreController.findOneById);

router.patch("/:id", GenreController.updateById);

module.exports = router;
