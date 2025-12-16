import { useState } from "react";
import EnigmeImageFile from "./EnigmeImage.jpg";

export default function EnigmeImage({ onSuccess }) {
  const [error, setError] = useState("");
  const [showHint, setShowHint] = useState(false);

  // -- Petit son ding --
  function playDing() {
    const audio = new Audio("/ding.mp3");
    audio.volume = 0.4; // doux
    audio.play();
  }

  function handleClick(e) {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // ZONE CLIQUABLE : PC bas gauche
    if (
      x > 0 &&
      x < rect.width * 0.35 &&
      y > rect.height * 0.55 &&
      y < rect.height * 0.95
    ) {
      onSuccess();
    } else {
      setError(
        "😱 Oh non ! Vous n'échappez pas aux Big Data… continuez à chercher !"
      );
    }
  }

  function toggleHint() {
    const newState = !showHint;
    setShowHint(newState);
    if (newState) playDing();
  }

  return (
    <div>
      <h2>🖥️ Salle 1 — Les Licences Maudites</h2>

      <p className="game-subtitle">
        Tous ces ordinateurs semblent identiques… pourtant l’un d’eux renferme
        un secret sur l’avenir numérique durable de l’école.
        <br />
        <strong>Clique sur l’écran qui semble “différent”…</strong>
      </p>

      {/* IMAGE */}
      <img
        src={EnigmeImageFile}
        onClick={handleClick}
        alt="Salle informatique"
        style={{
          width: "85%",
          borderRadius: "12px",
          boxShadow: "0 0 25px cyan",
          cursor: "crosshair",
          marginTop: "10px",
        }}
      />

      {/* LIGNE BOUTON + TEXTE INDICE */}
      <div
        style={{
          marginTop: "6px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "4px",
        }}
      >
        <button
          onClick={toggleHint}
          className="hintButton"
          title="Voir un indice"
        >
          💡
        </button>

        {/* ICI le mot 'indice' avec contour lumineux */}
        <span
  onClick={toggleHint}
  className="hintWord"
>
  indice
</span>

      </div>

      {/* TEXTE D’INDICE ANIMÉ */}
      <div
        style={{
          maxHeight: showHint ? "120px" : "0px",
          opacity: showHint ? 1 : 0,
          overflow: "hidden",
          transition: "max-height 0.5s ease, opacity 0.5s ease",
        }}
      >
        <p
          className="hintText"
          style={{
            marginTop: "8px",
            width: "85%",
            marginLeft: "auto",
            marginRight: "auto",
            fontSize: "14px",
            color: "#dff9ff",
            textAlign: "center",
            fontStyle: "italic",
          }}
        >
          🔎 Indice : regarde plutôt du côté <strong>gauche</strong>…  
          un écran n’est pas comme les autres 👀
        </p>
      </div>

      {/* MESSAGE D’ERREUR */}
      {error && (
        <p style={{ color: "salmon", marginTop: "10px", fontSize: "18px" }}>
          {error}
        </p>
      )}
    </div>
  );
}
