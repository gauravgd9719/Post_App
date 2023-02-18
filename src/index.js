const express = require("express");
const mongoose = require("mongoose");
const route = require("./routes/route");

mongoose.set('strictQuery', true) // mongoose issue

const app = express();
app.use(express.json()); // ?

mongoose
  .connect(
    "mongodb+srv://gauravdhiman123:hiFunctionUp@gd-cluster.kufg7lx.mongodb.net/PostApp",
    { useNewUrlParser: true }
  )
  .then(() => console.log("mongoDB is connected"))
  .catch((error) => console.log(error));

app.use("/", route);

app.listen(process.env.PORT || 3000, function () {
  console.log("Express app running on PORT" + (process.env.PORT || 3000));
});
