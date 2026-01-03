const express = require("express");
const cors = require("cors");

const app = express();

// autoriser les requêtes du frontend
app.use(cors());

app.get("/api/test", (req, res) => {
  res.json({ message: "Connexion MERN réussie 🚀" });
});

app.listen(5000, () => {
  console.log("Backend lancé sur http://localhost:5000");
});
