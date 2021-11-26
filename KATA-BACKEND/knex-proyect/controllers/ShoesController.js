const { Shoe } = require("../models");

const create = (req, res) => {
  const { description, sold, quantity } = req.body;

  const newShoes = {
    description,
    sold,
    quantity,
  };

  return Shoe.create(newShoes)
    .then((data) => {
      console.log("result", data.rowCount);
      return res.status(201).json({
        message: "Shoes created succcessfully",
        result: data.rowCount,
      });
    })
    .catch((err) => {
      console.log("error", err);
      return res.status(400).json({ message: "Row not inserted", error: err });
    });
};

const findAll = async (req, res) => {
  try {
    const data = await Shoe.getAll();
    res.json({ message: "Rows recover successfully", result: data });
  } catch (error) {
    console.log(error);
    res.json({ message: "Error recover all rows", error });
  }
};

const findOneById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Shoe.getById(id);
    if (result.length) {
      res.json({ message: "Row recover successfully", result });
    } else {
      res
        .status(404)
        .json({ message: `Row with id ${id} not found`, error: "" });
    }
  } catch (error) {
    res.json({ message: "Error recover row by id", error });
  }
};

const updateById = async (req, res) => {
  const { id } = req.params;
  try {
    const rowUpdated = await Shoe.updateById(id, req.body);
    res.json({ message: "Row updated", result: rowUpdated });
  } catch (error) {
    res.json({ message: "Error", error });
  }
};

const deleteById = async (req, res) => {
  const { id } = req.params;
  try {
    const rowDeleted = await Shoe.deleteById(id);
    res.status(204).json({ message: "Row deleted", result: rowDeleted });
  } catch (error) {
    res.json({ message: "Error in deleted row", error });
  }
};

module.exports = {
  create,
  findAll,
  findOneById,
  updateById,
  deleteById,
};
