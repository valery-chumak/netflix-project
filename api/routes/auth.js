const router = require("express").Router();
const User = require("../models/User");

router.post("/register", async (req, res) => {
  const { username, email, password, profilePic, isAdmin } = req.body;
  const newUser = new User({
    username,
    email,
    password,
  });
  try {
    const user = await newUser.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
