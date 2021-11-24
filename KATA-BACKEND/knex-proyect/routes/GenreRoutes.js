const express = require("express");
const ShoesService = require("../services/shoes/shoes.services");
const router = express.Router();

router.post("/", async (req, res) => {
  const { description } = req.body;
  const newGenre = {
    description,
  };
  try {
    const result = await GenreService.create(newGenre);
    res.status(200).json({ message: "Row created", result });
  } catch (error) {
    res.status(400).json({ message: "Error found", error });
  }
});
