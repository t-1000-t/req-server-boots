const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
const logger = require("morgan");
const router = require("./router");
const dbConnection = require("./services/db/dbConnection");
const User = require("./services/model/user");

dbConnection();

// логирование запросов
app.use(logger("dev"));
app.use(cors("*"));
app.use(express.json());

// обработчик на / и ответ на запрос по этому пути "Weather Web-Craft-House"
app.get("/", (req, res) => {
  res.send("We are on the Web-Craft-House server");
});

app.get("/list", async (req, res) => {
  try {
    const users = await User.find();
    res.json({
      users,
    });
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

app.post("/list", async (req, res) => {
  try {
    const userData = req.body;

    console.log("userData", userData);

    const newUser = new User(userData);

    const result = await newUser.save();

    res.status(201).json({
      user: result,
    });
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

// обработчик для других запрсоов с вставкой /rest
app.use("/client", router);

// обработчик для других роутов или сервистов в программе
app.use("*", (req, res) => {
  res.status(404).send(`This path ${req.url} cant found`);
});

app.use((err, req, res) => {
  res.status(500).json({
    error: err.message,
  });
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Server startted on ${port}`);
});
