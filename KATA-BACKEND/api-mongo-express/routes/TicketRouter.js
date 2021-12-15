const express = require("express");
const TicketController = require("../controllers/TicketController");

const router = express.Router();

//FIND ALL
router.get("/", TicketController.findAll);

// CREATE
router.post("/", TicketController.create);

//FIND ONE
router.get("/:idTicket", TicketController.findOneById);

// UPDATE  ONE  || BULK [id1, id2, id3 ], price: 80000
router.patch("/:idTicket", TicketController.updateOneById); // updateOneById(req, res)

// DELETE FISICO
router.delete("/:idTicket", TicketController.deleteById);

// DELETE LOGICO
router.delete("/:idTicket/soft-delete", TicketController.softDeletebyId);

// Calcular subtotal, taxes, total
router.patch("/taxes/:idTicket", TicketController.calculateTaxes);

module.exports = router;
