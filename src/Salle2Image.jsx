import { useState } from "react";
import ServeurImage from "./Serveur.jpg";
import HintImage from "./hint_queen.jpg"; // ← ton image "I WIN"

export default function Salle2Image({ onSuccess }) {
  const [error, setError] = useState("");
  const [showHint, setShowHint] = useState(false);

  function playDing() {
    const audio = new Audio("/ding.mp3");
    audio.volume = 0.4;
    audio.play();
  }

  function toggleHint() {
    const newState = !showHint;
    setShowHint(newState);
    if (newState) playDing();
  }

  function handleClick(e) {
    const rect = e.target.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    // ----------- ZONE CLIQUABLE = Angleterre -----------
    const inEngland =
      x > 0.53 && x < 0.60 &&
      y > 0.23 && y < 0.33;

    if (inEngland) {
      onSuccess();
    } else {
      setError("😵 Tu sais même pas où tes données vont…");
    }
  }

  return (
    <div>
      <h2>🌍 Salle 2 — Où stocker les données ?</h2>
      <p className="game-subtitle">
        Clique sur le serveur qui garantit la souveraineté numérique 🇪🇺.
      </p>

      <img
        src={ServeurImage}
        onClick={handleClick}
        alt="Carte des serveurs"
        className="enigme-image"
        style={{
          width: "95%",
          borderRadius: "12px",
          cursor: "crosshair",
          boxShadow: "0 0 25px cyan",
        }}
      />

      {/* bouton indice */}
      <div
        style={{
          marginTop: "8px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "6px",
        }}
      >
        <button onClick={toggleHint} className="hintButton">💡</button>
        <span onClick={toggleHint} className="hintWord">indice</span>
      </div>

      {/* zone hint : maintenant uniquement l’image */}
      <div
        style={{
          maxHeight: showHint ? "260px" : "0px",
          opacity: showHint ? 1 : 0,
          overflow: "hidden",
          transition: "max-height 0.5s ease, opacity 0.5s ease",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          src={HintImage}
          alt="hint"
          style={{
            width: "220px",
            marginTop: "12px",
            borderRadius: "10px",
            boxShadow: "0 0 20px #ffea00aa",
          }}
        />
      </div>

      {error && (
        <p style={{ color: "salmon", marginTop: "10px", fontSize: "18px" }}>
          {error}
        </p>
      )}
    </div>
  );
}
