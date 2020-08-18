const express = require("express");
const User = require("../models/User");
const getToken = require("../utils/auth");

const router = express.Router();

router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({
      email,
      password,
    });

    if (user) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        imgUrl: user.imgUrl,
        token: getToken(user),
      });
    } else {
      res.status(401).json({ msg: "Invalid Email or Password" });
    }
  } catch (error) {
    console.error(error.message);
    res.json({ msg: error.message });
  }
});

router.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const user = new User({
      name,
      email,
      password,
    });

    const newUser = await user.save();

    if (newUser) {
      res.json({
        _id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        isAdmin: newUser.isAdmin,
        imgUrl: newUser.imgUrl,
        token: getToken(newUser),
      });
    }
  } catch (error) {
    console.error(error.message);
    res.status(401).json({ msg: "Invalid User data" });
  }
});

router.post("/create-admin", async (req, res) => {
  try {
    const user = new User({
      name: "john",
      email: "john@doe.com",
      password: "12345",
      isAdmin: true,
    });

    await user.save();
    res.json(user);
  } catch (error) {
    console.error(error.message);
    res.json({ msg: error.message });
  }
});

module.exports = router;
