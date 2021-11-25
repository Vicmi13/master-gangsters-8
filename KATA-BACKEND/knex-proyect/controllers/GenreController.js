const { Genre } = require("../models");

const create = (req, res) => {
  const { description } = req.body;

  const newGenre = {
    description, // 'male'
  };

  return Genre.create(newGenre)
    .then((data) => {
      console.log("result", data.rowCount);
      return res
        .status(201)
        .json({ message: "Row created succcessfully", result: data.rowCount });
    })
    .catch((err) => {
      console.log("error", err);
      return res.status(400).json({ message: "Row not inserted", error: err });
    });
};

const findAll = async (req, res) => {
  try {
    const data = await Genre.getAll();
    res.json({ message: "Rows recover successfully", result: data });
  } catch (error) {
    res.json({ message: "Error recover all rows", error });
  }
};

const findOneById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Genre.getById(id);
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
    const rowUpdated = await Genre.updateById(id, req.body);
    res.json({ message: "Row updated", result: rowUpdated });
  } catch (error) {
    res.json({ message: "Error", error });
  }
};

module.exports = {
  create,
  findAll,
  findOneById,
  updateById,
};
