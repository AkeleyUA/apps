const { Router } = require("express");
const router = Router();

router.get("/public", async (req, res) => {
  try {
    res.json("I am public route!");
  } catch (e) {
    res.status(500).json({ message: "server error" });
  }
});

module.exports = router;
