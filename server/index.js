const express = require("express");
const mongoose = require("mongoose");
const app = express();

const FoodModel = require("./models/Food");

app.use(express.json());

mongoose.connect(
  "mongodb+srv://admin:admin@crud.qqivmj2.mongodb.net/food?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
  }
);

app.get("/", async (req, res) => {
  const food = new FoodModel({
    foodName: "Pizza",
    daysSinceIAte: 2,
  });

  try {
    await food.save();
  } catch (err) {
    console.log(err);
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
