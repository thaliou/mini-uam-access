const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/api/test", (req, res) => {
  res.json({ message: "Backend en ligne 🚀" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Serveur lancé sur le port", PORT);
});
