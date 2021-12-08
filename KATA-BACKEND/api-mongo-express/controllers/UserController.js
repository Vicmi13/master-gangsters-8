const User = require("../models/User");

module.exports = {
  // key : value
  findAll: (req, res, next) => {
    // User.find()
    res.status(200).json({ message: "All users ", users: [] });
  },

  create: (req, res) => {
    // User.create(req.body)
    res.status(201).json({
      message: "User created ",
      user: { name: "Victor", email: "victor@devf.com", age: 23 },
    });
  },
};
