const express = require("express");
const UserRouter = require("./routes/UserRouter");

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
