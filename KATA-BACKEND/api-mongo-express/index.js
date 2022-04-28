require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const UserRouter = require("./routes/UserRouter");
const ItemRouter = require("./routes/ItemRouter");
const TicketRouter = require("./routes/TicketRouter");
const config = require("./config");

console.log("connection mongo_uri ======= ", config.mongo_uri);
console.log("env: ", process.env.NODE_ENV)

mongoose
  .connect(config.mongo_uri)
  .then(() => console.log("Mongo DB connected SUCCESSFULLY"))
  .catch((error) => console.log("Error in connection", error));

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3001;

// get localhost:3300
app.get("/", (__, res) => {
  res.json({ message: "Backend APi-NOSQL G8 running " });
});

// get/post localhost:3300/users
app.use("/users", UserRouter);

app.use("/items", ItemRouter);

app.use("/tickets", TicketRouter);

app.listen(PORT, () => {
  console.log(`App running in PORT ${PORT}`);
});
