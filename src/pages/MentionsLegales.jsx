// src/pages/MentionsLegales.jsx
import React from "react";

export default function MentionsLegales({ setPage }) {
  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        padding: "60px 20px",
        backgroundColor: "#171a51ff",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          width: "100%",
          backgroundColor: "#171a51ff",  // carte légèrement plus clair
          padding: "40px 30px",
          borderRadius: "15px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.6)",
          color: "#ffffffff",   // texte vert clair
          lineHeight: "1.6",
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        }}
      >
        <h1 style={{ fontSize: "2.5rem", marginBottom: "30px", textAlign: "center" }}>
          Mentions légales
        </h1>

        {/** Sections */}
        {[
          {
            title: "1. Éditeur du site",
            content: (
              <>
                Nom du site : <strong>Village Numérique Résistant</strong><br />
                Responsable de publication : <strong>[Nom / Organisation]</strong><br />
                Adresse : <strong>[Adresse postale]</strong><br />
                Email : <strong>[contact@exemple.com]</strong>
              </>
            ),
          },
          {
            title: "2. Hébergeur",
            content: (
              <>
                Hébergeur : <strong>[Nom de l'hébergeur]</strong><br />
                Adresse : <strong>[Adresse de l'hébergeur]</strong><br />
                Site : <strong>[https://hebergeur.com]</strong>
              </>
            ),
          },
          {
            title: "3. Propriété intellectuelle",
            content: "Tous les contenus présents sur ce site (textes, images, modèles 3D, code) sont protégés par le droit d’auteur. Toute reproduction non autorisée est interdite.",
          },
          {
            title: "4. Données personnelles",
            content: "Conformément au RGPD, vous pouvez demander l’accès ou la suppression de vos données : [contact@exemple.com].",
          },
          {
            title: "5. Cookies",
            content: "Le site peut utiliser des cookies techniques ou de mesure anonyme. Vous pouvez les désactiver dans votre navigateur.",
          },
          {
            title: "6. Responsabilités",
            content: "L’éditeur ne peut être tenu responsable de l’utilisation du site ou d’éventuelles erreurs techniques.",
          },
          {
            title: "7. Crédits / modèles 3D",
            content: (
              <>
                Exemple : <br />
                « Modèle 3D <em>NomDuModele</em> créé par <strong>Auteur</strong>, utilisé sous licence <strong>CC BY 4.0</strong>. »
              </>
            ),
          },
        ].map((section, idx) => (
          <section key={idx} style={{ marginBottom: "30px" }}>
            <h2 style={{ fontSize: "1.5rem", marginBottom: "10px", color: "#8dc0f3ff" }}>
              {section.title}
            </h2>
            <p>{section.content}</p>
          </section>
        ))}

        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <button
            onClick={() => setPage("home")}
            style={{
              background: "#ffffffff",
              color: "#171a51ff",
              border: "none",
              borderRadius: "5px",
              padding: "10px 20px",
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: "16px",
            }}
          >
            ← Retour à l'accueil
          </button>
        </div>
      </div>
    </div>
  );
}