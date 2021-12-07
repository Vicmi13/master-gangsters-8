const express = require("express");
const { RoleController } = require("../controllers");

const router = express.Router();

router.post("/", RoleController.create);

router.get("/", RoleController.findAll);

router.patch("/:id", RoleController.updateById);

router.delete("/:id", RoleController.deleteById);

module.exports = router;
