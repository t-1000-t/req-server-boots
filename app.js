const express = require("express");
const app = express();
const path = require("path");
port = process.env.PORT || 5000;
const logger = require("morgan");
const router = require("./router");

// логирование запросов
app.use(logger("dev"));

// обработчик на / и ответ на запрос по этому пути "Weather Web-Craft-House"
app.get("/", (req, res) => {
  res.send("We are on the Web-Craft-House server");
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
