const express = require("express");
const { ShoesController } = require("../controllers");
const router = express.Router();

router.post("/", ShoesController.create);

router.get("/", ShoesController.findAll);

router.get("/:id", ShoesController.findOneById);

router.patch("/:id", ShoesController.updateById);

router.delete("/:id", ShoesController.deleteById);

module.exports = router;
