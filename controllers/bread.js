const router = require("express").Router();
const Bread = require("../models/bread");

//get all the bread
router.get("/", (req, res) => {
  res.send(Bread);
});

//get bread by
router.get("/:index", (req, res) => {
  const { index } = req.params;
  res.send(Bread[index]);
});

module.exports = router;
