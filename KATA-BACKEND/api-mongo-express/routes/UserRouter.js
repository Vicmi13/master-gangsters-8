const express = require("express");
const UserController = require("../controllers/UserController");

const router = express.Router();

//FIND ALL
router.get("/", UserController.findAll);

// CREATE
router.post("/", UserController.create);

//FIND ONE
router.get("/:idUser", UserController.findOneById);

// UPDATE  ONE  || BULK [id1, id2, id3 ], price: 80000
router.patch("/:idUser", UserController.updateOneById);

// DELETE FISICO
router.delete("/:idUser", UserController.deleteById);

// DELETE LOGICO
router.delete("/:idUser/soft-delete", UserController.softDeletebyId); // cambiar flag is_active

/**
 * Router de modelo Post
 */

router.post("/:id/posts", UserController.createPost);

module.exports = router;
