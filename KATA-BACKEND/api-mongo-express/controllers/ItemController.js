const Item = require("../models/Item");

module.exports = {
  findAll: async (req, res) => {
    try {
      // const allItem = await Item.find();
      const allActiveItems = await Item.find({ is_active: true });
      if (!allActiveItems.length) res.json({ message: "No items found" });
      res.status(200).json({ message: "All Items ", items: allActiveItems });
    } catch (error) {
      res.status(400).json({
        message: "Error recover Items",
        error,
      });
    }
  },

  create: async (req, res) => {
    try {
      const newItem = await Item.create(req.body);
      res.status(201).json({
        message: "Item created ",
        Item: newItem,
      });
    } catch (error) {
      res.status(400).json({
        message: "Error creating Item",
        error,
      });
    }
  },

  findOneById: async (req, res) => {
    const { idItem } = req.params;

    try {
      const ItemFound = await Item.findById(idItem);
      console.log("ItemFound", ItemFound);
      if (!ItemFound) {
        res.status(404).json({ message: "Item not found" });
      } else {
        res.status(200).json({
          message: "Item found ",
          item: ItemFound,
        });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "Error Item not found",
        error,
      });
    }
  },

  updateOneById: async (req, res) => {
    const id = req.params.idItem;

    try {
      const itemUpdated = await Item.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.status(200).json({
        message: "Item updated successfully ",
        item: itemUpdated,
      });
    } catch (error) {
      res.status(500).json({
        message: "Error update Item",
        error,
      });
    }
  },

  deleteById: async (req, res) => {
    const id = req.params.idItem;

    try {
      const itemDeleted = await Item.findByIdAndDelete(id);
      console.log("item deleted", itemDeleted);
      res.status(200).json({
        message: "Item deleted successfully ",
        item: itemDeleted._id,
      });
    } catch (error) {
      res.status(500).json({
        message: "Error delete Item",
        error,
      });
    }
  },

  softDeletebyId: async (req, res) => {
    const id = req.params.idItem;
    try {
      const itemSoftDeleted = await Item.findByIdAndUpdate(
        id,
        { is_active: false },
        { new: true }
      );
      res.status(200).json({
        message: "Item soft deleted successfully ",
        item: itemSoftDeleted,
      });
    } catch (error) {
      res.status(500).json({
        message: "Error update Item",
        error,
      });
    }
  },
};
