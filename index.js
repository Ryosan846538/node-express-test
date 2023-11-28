const express = require("express");
const app = express();
const coronaData = require("./coronaData");

app.get("/", function (req, res) {
  res.send(coronaData);
});

app.listen(5000, function () {
  console.log("Server is running on port 5000");
});
