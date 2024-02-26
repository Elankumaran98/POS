const express = require("express");
const userRouter = express.Router();
const User = require("../models/userModels");


userRouter.post("/login", async (req, res) => {
  try {
    const { userId, password } = req.body;
    const user = await User.findOne({ userId, password });
    if (user) {
      res.status(200).send(user);
    } else {
      res.json({
        message: "Login Fail",
        user,
      });
    }
  } catch (error) {
    console.log(error);
  }
});

userRouter.post("/register",async (req, res) => {
  try {
    const newUser = new User({ ...req.body, verified: true });
    await newUser.save();
    res.status(200).send("New User Added Successfully!");
  } catch (error) {
    console.log(error);
  }
});

module.exports = userRouter;
