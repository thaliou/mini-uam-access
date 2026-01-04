import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("Chargement...");

  useEffect(() => {
    fetch("http://localhost:5000/api/test")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch(() => setMessage("Erreur de connexion ❌"));
  }, []);

  return (
    <div style={{ padding: "40px", fontSize: "24px", color: "red" }}>
      <h1>Mini projet MERN</h1>
      <h2>Petite Modification pour la branche de travail feature/frontend</h2>
      <p>{message}</p>
    </div>
  );
}

export default App;
