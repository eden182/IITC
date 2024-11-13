const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const User = require("./models/userModel.js");

const PORT = 3000;

const app = express();

app.use(express.json());

// app.use("api/users", userRoutes);

mongoose.connect(process.env.URI).then(() => {
  console.log("DB connected");
});

// get
app.get("/api/users", (req, res) => {
  res.send({ message: "hello world" });
});

app.get("/api/users/all", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).send({ users: users });
  } catch (error) {
    res.status(500).send("server error");
  }
});

app.get("/api/users/user/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id);
    res.status(200).send({ user, message: "great job" });
  } catch (error) {
    res.status(500).send("not a good job");
  }
});

// post
app.post("/api/users", async (req, res) => {
  try {
    // const firstN = req.body.firstN;
    // const lastN = req.body.lastN;
    // const email = req.body.email;
    // const age = req.body.age;
    // const userN = req.body.userN;
    // const password = req.body.password;
    const { firstN, lastN, age, email, password, userN } = req.body;

    if (!firstN || !lastN || !age || !password || !email || !userN) {
      return res.status(401).send({ message: "fields missing" });
    }

    const newUser = new User({
      firstN,
      lastN,
      age,
      email,
      password,
      userN,
    });

    const savedUser = await newUser.save();

    console.log(req.body);
    res.status(201).send("finish process");
  } catch (error) {}
});

// LISTEN
app.listen(PORT, () => {
  console.log(`server running at port ${PORT}`);
});
