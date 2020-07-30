const mongoose = require("mongoose");

const dbConnection = () => {
  mongoose.connect(
    "mongodb+srv://node:USE878cra_*2020@cluster0.u2eav.mongodb.net/noteusers?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
      if (err) {
        console.log("err :".err);
        process.exit(1);
      }
      if (!err) {
        console.log("DB connected...");
      }
    }
  );
};

module.exports = dbConnection;
