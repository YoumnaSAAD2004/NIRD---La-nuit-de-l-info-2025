import { useState } from "react";
import Salle3ImageFile from "./Souris.jpg"; // ton image Windows 98

export default function Salle3Image({ onSuccess }) {
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

  // 🎯 Zone cliquable = tout l'écran Windows 98
  const isScreen =
    x > 0.11 && x < 0.37 &&
    y > 0.22 && y < 0.57;

  if (isScreen) {
    onSuccess();
  } else {
    setError("❌ Concentre‑toi… c’est évident !");
  }
}


  return (
    <div>
      <h2>💾 Salle 3 — Réemploi & Durabilité</h2>
      <p className="game-subtitle">
        Clique sur l’élément qui représente ce qu’on veut éviter à tout prix…
      </p>

      <img
        src={Salle3ImageFile}
        onClick={handleClick}
        alt="Windows 98 setup"
        style={{
          width: "90%",
          borderRadius: "12px",
          cursor: "crosshair",
          boxShadow: "0 0 25px cyan",
        }}
      />

      {/* Bouton + mot “indice” cliquables */}
      <div
        style={{
          marginTop: "6px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "6px",
        }}
      >
        <button className="hintButton" onClick={toggleHint}>💡</button>
        <span className="hintWord" onClick={toggleHint}>indice</span>
      </div>

      {/* Zone de hint */}
      <div
        style={{
          maxHeight: showHint ? "140px" : "0px",
          opacity: showHint ? 1 : 0,
          overflow: "hidden",
          transition: "max-height 0.5s ease, opacity 0.5s ease",
        }}
      >
        <p
          style={{
            textAlign: "center",
            width: "90%",
            margin: "auto",
            marginTop: "10px",
            color: "#dff9ff",
            fontSize: "14px",
            fontStyle: "italic",
          }}
        >
          🪟 Indice : Regarde bien… une vieille fenêtre t’appelle 👀
        </p>
      </div>

      {error && (
        <p style={{ color: "salmon", marginTop: "10px", fontSize: "18px" }}>
          {error}
        </p>
      )}
    </div>
  );
}
