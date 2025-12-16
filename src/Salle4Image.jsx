import { useState } from "react";
import Salle4ImageFile from "./LinuxMeme.jpg"; // ← renomme ton fichier ici

export default function Salle4Image({ onSuccess }) {
  const [error, setError] = useState("");
  const [showHint, setShowHint] = useState(false);

  function playDing() {
    const audio = new Audio("/ding.mp3");
    audio.volume = 0.4;
    audio.play();
  }

  function toggleHint() {
    const state = !showHint;
    setShowHint(state);
    if (state) playDing();
  }

  function handleClick(e) {
    const rect = e.target.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    // 🎯 Zone cliquable = partie "LINUX" (tiers inférieur)
    const isLinuxZone =
      y > 0.62 && y < 1 &&
      x > 0 && x < 1;

    if (isLinuxZone) {
      onSuccess();
    } else {
      setError("❌ Non… ici c’est du Big Tech !");
    }
  }

  return (
    <div>
      <h2>🐧 Salle 4 — Souveraineté Logicielle</h2>

      <p className="game-subtitle">
        Clique sur l’option qui n’appartient PAS aux Big Tech…
      </p>

      <img
        src={Salle4ImageFile}
        onClick={handleClick}
        alt="Comparatif Linux iOS Windows"
        style={{
          width: "95%",
          borderRadius: "12px",
          cursor: "crosshair",
          boxShadow: "0 0 25px cyan",
        }}
      />

      {/* Indice */}
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
          🐧 Indice : Celui qui n’a pas un immense siège social…  
          c’est lui le vrai libre ✨
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
