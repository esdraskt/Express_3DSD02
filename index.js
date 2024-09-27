const express = require("express");
const app = express();

const PORT = 3333;

app.get("/", function (req, res) {
  res.send("Blá bla bla");
});

app.listen(PORT, () => {
  console.log("running..." + PORT);
});
