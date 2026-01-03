const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Backend OK 🚀");
});

app.listen(5000, () => {
  console.log("Serveur backend lancé sur http://localhost:5000");
});

