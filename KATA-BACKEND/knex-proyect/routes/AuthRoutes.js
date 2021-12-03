const express = require("express");
const { AuthController } = require("../controllers");

const router = express.Router();

router.post("/", AuthController.login);

// POST api-backend-g8/auth/refresh
// router.post("/refresh", AuthController.refreshToken);

module.exports = router;
