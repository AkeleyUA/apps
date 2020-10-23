const { Router } = require("express");
const router = Router();
const User = require("../models/user");
const bycript = require("bcrypt");

router.get("/private", async (req, res) => {
  try {

    // create new user (!HARDCODE!);
    // const hasedPassword = await bycript.hash("test", 15);
    // const newUser = new User({ login: "test", password: hasedPassword });
    // await newUser.save();

    const { login, password } = req.query;
    if (!login || !password) {
      return res.status(401).json({ message: "Incorrect authorization data." });
    }

    const findUser = await User.findOne({
      login,
    });

    if (!findUser) {
      return res.status(400).json({ message: "user not found" });
    }

    const isMatch = bycript.compare(password, findUser.password);

    if (!isMatch) {
      return res
        .status(400)
        .json({ message: "password incorrect, please try again" });
    }

    res.json({ message: "Success" });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "server error" });
  }
});

module.exports = router;
