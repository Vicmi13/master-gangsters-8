const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({ message: "All users ", users: [] });
});

router.post("/", (req, res, next) => {
  res.status(201).json({
    message: "User created ",
    users: { name: "Victor", email: "victor@devf.com", age: 23 },
  });
});

module.exports = router;
