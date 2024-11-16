const express = require("express");
const router = express.router();

router.post("/", (req, res) => {
  res.send("its working!");
});

module.exports = router;
