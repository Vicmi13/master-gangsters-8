const express = require("express");

const { UserController } = require("../controllers");
const router = express.Router();

router.post("/", UserController.create);

router.get("/", UserController.findAll);

router.get("/:id", UserController.findOneById);

router.patch("/:id", UserController.updateById);

router.delete("/:id", UserController.deleteById);

module.exports = router;
