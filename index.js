const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.listen(5000, function () {
  console.log("Server is running on port 5000");
});
