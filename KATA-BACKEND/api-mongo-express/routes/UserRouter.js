const express = require("express");
const UserController = require("../controllers/UserController");
const { multer } = require("../middlewares");
const validateFile = require("../middlewares/validateFile");

const router = express.Router();

//FIND ALL
router.get("/", UserController.findAll);

// CREATE
router.post(
  "/",
  multer.single("profile_picture"),
  validateFile,
  UserController.create
);

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

// Create
router.post("/:id/posts", UserController.createPost);

// Find all
router.get("/:id/posts", UserController.findAllPosts);

// Find one
router.get("/:id/posts/:idPost", UserController.findOnePostById);

// Update one
router.patch("/:id/posts/:idPost", UserController.updateOnePost);

// Soft Delete
router.delete("/:id/posts/:idPost", UserController.softPostDelete);

module.exports = router;
