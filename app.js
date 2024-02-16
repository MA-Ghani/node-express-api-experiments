// app.js

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const AutoTelexRouter = require("./routes/autotelex");

const app = express();

// Set up mongoose connection

const mongoDB = process.env.MONGODB_URI

mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/autotelex", AutoTelexRouter);

const port = 3001;

db.once("open", function () {
  console.log("Connected!");
  app.listen(port, () => {
    console.log("Server is up and running on port numner " + port);
  });
});
