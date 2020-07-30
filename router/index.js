const router = require("express").Router();
const User = require("../services/model/user");

// router.get("/list", async (req, res) => {
//   try {
//     const users = await User.find();
//     res.json({
//       users,
//     });
//   } catch (error) {
//     res.status(400).json({ error: error });
//   }
// });

// router.post("/list", async (req, res) => {
//   try {
//     const userData = req.body;

//     console.log("userData", userData);

//     const newUser = new User(userData);

//     const result = await newUser.save();

//     res.status(201).json({
//       user: result,
//     });
//   } catch (error) {
//     res.status(400).json({ error: error });
//   }
// });

router.all("/", (req, res) => {
  res.status(404).json({ error: "Path not found" });
});

module.exports = router;
