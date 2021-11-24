const express = require("express");
const ShoesService = require("../services/shoes/shoes.services");

const router = express.Router();

router.get("/", (req, res) => {
  // Debe de regresar todos los zapatos

  // HARDCODEADO
  const result = ShoesService.find();
  res.status(200).json({ message: "OK", shoes: result });
});

router.post("/", async (req, res) => {
  const { price, brand, color } = req.body;
  const newShoe = {
    price,
    brand,
    color,
  };

  try {
    const result = await ShoesService.create(newShoe);
    res.status(200).json({ message: "New shoe created", shoes: result });
  } catch (error) {
    res.status(400).json({ message: "Error found", error });
  }
});

module.exports = router;
