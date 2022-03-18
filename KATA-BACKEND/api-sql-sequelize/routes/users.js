const express = require("express");
const { UserController } = require("../controllers");

const router = express.Router();

router.post("/", UserController.create);

router.get("/", UserController.findAll);

router.get("/:id", UserController.findOneById);

module.exports = router;
