const express = require("express");
const { AuthController } = require("../controllers");

const router = express.Router();

router.post("/", AuthController.login);

module.exports = router;
