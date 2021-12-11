const express = require("express");
const ItemController = require("../controllers/ItemController");

const router = express.Router();

//FIND ALL
router.get("/", ItemController.findAll);

// CREATE
router.post("/", ItemController.create);

//FIND ONE
router.get("/:idItem", ItemController.findOneById);

// UPDATE  ONE  || BULK [id1, id2, id3 ], price: 80000
router.patch("/:idItem", ItemController.updateOneById);

// DELETE FISICO
router.delete("/:idItem", ItemController.deleteById);

// DELETE LOGICO
router.delete("/:idItem/soft-delete", ItemController.softDeletebyId);

module.exports = router;
