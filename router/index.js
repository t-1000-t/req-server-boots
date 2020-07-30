const router = require("express").Router();

router.get("/list", (req, res) => {
  res.status(200).json({ send: "OKay!" });
});

router.all("/", (req, res) => {
  res.status(404).json({ error: "Path not found" });
});

module.exports = router;
