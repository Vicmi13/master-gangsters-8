const User = require("../models/User");

module.exports = {
  // key : value
  findAll: async (req, res) => {
    try {
      const allUser = await User.find();
      res.status(200).json({ message: "All users ", users: allUser });
    } catch (error) {
      res.status(400).json({
        message: "Error recover users",
        error,
      });
    }
  },

  create: async (req, res) => {
    try {
      const newUser = await User.create(req.body);
      res.status(201).json({
        message: "User created ",
        user: newUser,
      });
    } catch (error) {
      res.status(400).json({
        message: "Error creating user",
        error,
      });
    }
  },
};
