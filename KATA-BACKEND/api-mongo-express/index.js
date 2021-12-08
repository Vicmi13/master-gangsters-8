require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const UserRouter = require("./routes/UserRouter");

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Mongo DB connected"))
  .catch(() => console.log("Error in connection"));

const app = express();
const PORT = process.env.PORT || 3300;

// get localhost:3300
app.get("/", (__, res) => {
  res.json({ message: "Backend running" });
});

// get/post localhost:3300/users
app.use("/users", UserRouter);

app.listen(PORT, () => {
  console.log(`App running in PORT ${PORT}`);
});
