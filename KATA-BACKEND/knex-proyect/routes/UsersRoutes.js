const express = require("express");
const { UserController } = require("../controllers");
const validateJWT = require("../middleware/validateToken");
const { UserValidator } = require("../validators");
const { validateRole } = require("../middleware/userMiddleware");
const router = express.Router();

// POST api-g8-backend/users
router.post(
  "/",
  validateJWT,
  UserValidator.createUser,
  validateRole("Admin"),
  UserController.create
);

router.get("/", UserController.findAll);

router.get("/:id", UserController.findOneById);

router.patch("/:id", UserController.updateById);

router.delete("/:id", UserController.deleteById);

module.exports = router;
