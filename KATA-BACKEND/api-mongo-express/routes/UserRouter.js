const express = require("express");
const UserController = require("../controllers/UserController");

const router = express.Router();

router.get("/", UserController.findAll);

router.post("/", UserController.create);

module.exports = router;
