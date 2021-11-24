const express = require("express");
const { GenreController } = require("../controllers");

const router = express.Router();

// object.atributo.create()
router.post("/", GenreController.create);

module.exports = router;
