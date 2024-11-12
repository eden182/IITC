const express = require("express");
const mongoose = require("mongoose");
require("dotnev").config();

const PORT = 3000;
const dbUri = process.DB_URI;

const app = express();

app.use(express.json());

app.use("api/users", userRoutes);

mongoose.connect(dbUri).then(() => {
  console.log("DB connected");
});

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/user", () => {
  res.send({
    name: "john doe",
    age: 30,
  });
});

app.listen(PORT, () => {
  console.log("server running at port ${port}");
});
