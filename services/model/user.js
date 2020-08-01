const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    initialValue: {
      agreed: Boolean,
      areaFinish: Number,
      areaStart: Number,
      equipment: String,
      nameCompany: String,
      products: String,
      subscriptionHood: String,
      subscriptionSewerage: String,
      subscriptionStock: String,
      subscriptionWater: String,
      phoneNumber: Number,
      date: Date,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("Client", userSchema, "listusers");

module.exports = User;
