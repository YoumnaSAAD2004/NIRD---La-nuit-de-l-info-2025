import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import EnigmeImage from "./EnigmeImage";
import PopupExplication from "./PopupExplication";
import Salle2Image from "./Salle2Image";
import Salle3Image from "./Salle3Image"; 
import Salle4Image from "./Salle4Image";
import VillageMap from './VillageMap'; // même dossier, donc ./VillageMap
import BatimentCard from "./BatimentCard.jsx";


import MentionsLegales from "./pages/MentionsLegales";

import "./globals.css";

export default function App() {
  const [page, setPage] = useState("home");
  const [popup, setPopup] = useState(null);
  

if (page === "mentions") {
    // page complète pour les mentions
    return <MentionsLegales setPage={setPage} />;
  }
  
  
  // 🔊 Son joué à chaque bonne réponse
  function playClap() {
    const audio = new Audio("/clap.mp3");
    audio.volume = 0.5;
    audio.play();
  }

  return (
  <div className="app-shell">
    <Header setPage={setPage} />
    <div className="animated-bg"></div>


    {/* POPUP EXPLICATIF */}
    {popup && (
      <PopupExplication
        title={popup.title}
        text={popup.text}
        onNext={() => {
          const next = popup.nextPage;
          setPopup(null);
          setPage(next);
        }}
      />
    )}

    {/* FOND LASERS */}
    <div className="laser-bg">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="laser"
          style={{
            left: `${10 + i * 15}%`,
            animationDuration: `${8 + i * 0.9}s`,
            animationDelay: `${i * 0.7}s`,
          }}
        />
      ))}
    </div>

    {/* ZONE DE JEU */}
    <main className="game-container">
      <div className="game-card">

        {/* ACCUEIL */}
        {page === "home" && (
          <>
            <div className="badge">🚨 Mission NIRD • Mode Laser Game activé</div>
            <h1>🎉 Bienvenue dans le Village Numérique Résistant</h1>

            <p className="game-subtitle">
              Ta mission : sauver l'école de la domination des Big Tech 😈
              et l'aider à rejoindre le mouvement NIRD 🌱.
            </p>
            {/* AJOUT DE LA CARTE 3D */}
    <div style={{ width: '100%', height: '400px', margin: '20px 0' }}>
      <VillageMap onCardClick={(salle) => setPage(salle)} />
    </div>
            <button className="primary-btn" onClick={() => setPage("salle1")}>
              🚀 Commencer l'Escape Game
            </button>
          </>
        )}

        {/* SALLE 1 */}
        {page === "salle1" && (
          <EnigmeImage
            onSuccess={() => {
              playClap();
              setPopup({
                title: "🎉 Bonne réponse !",
                text:
                  "Le Big Data est l'analyse de très grandes quantités de données. " +
                  "Les Big Tech l'utilisent massivement, mais le NIRD encourage des solutions plus éthiques et transparentes.",
                nextPage: "salle2",
              });
            }}
          />
        )}

        {/* SALLE 2 */}
        {page === "salle2" && (
          <Salle2Image
            onSuccess={() => {
              playClap();
              setPopup({
                title: "🎉 Bonne réponse !",
                text:
                  "L’hébergement des données en Europe garantit le respect du RGPD, " +
                  "évite que tes données partent dans des pays non sûrs et limite la surveillance massive.",
                nextPage: "salle3",
              });
            }}
          />
        )}

        {/* SALLE 3 */}
        {page === "salle3" && (
          <Salle3Image
            onSuccess={() => {
              playClap();
              setPopup({
                title: "🎉 Bonne réponse !",
                text: "Réemployer + Linux = 40× moins polluant qu’un achat neuf. Bravo !",
                nextPage: "salle4",
              });
            }}
          />
        )}

        {/* SALLE 4 */}
        {page === "salle4" && (
          <>
            <h1 className="final-warning">⚠️ DERNIÈRE QUESTION POUR LIBÉRER VOTRE ÉCOLE ⚠️</h1>

            <Salle4Image
              onSuccess={() => {
                playClap();
                setPopup({
                  title: "🎉 Bonne réponse !",
                  text:
                    "Linux et les logiciels libres rendent l’école indépendante des Big Tech : plus éthique, plus écologique, plus souverain.",
                  nextPage: "fin",
                });
              }}
            />
          </>
        )}

        {/* FIN */}
        {page === "fin" && (
          <div className="final-screen">
            <h1 className="final-title">🏆 Bravo ! Vous avez libéré votre école</h1>

            <p className="final-text">
              En résolvant chaque énigme, vous avez découvert comment les Big Tech
              imposent leurs contraintes aux établissements — obsolescence,
              dépendance logicielle, stockage des données hors Europe…
              <br /><br />
              Grâce au NIRD, votre école devient plus libre, plus éthique, plus écologique
              et capable de reprendre le contrôle de son numérique.
            </p>

            <button className="see-more-btn" onClick={() => setPage("explication")}>
              🌱 Voir pourquoi le NIRD est essentiel
            </button>
          </div>
        )}

        {/* PAGE EXPLICATION */}
        {page === "explication" && (
          <div className="explication-screen">
            <h1 className="explication-title">🌍 Pourquoi le NIRD ?</h1>

            <p className="explication-paragraph">
              De nombreuses écoles dépendent fortement des Big Tech : Windows impose des
              licences coûteuses, les données partent parfois hors d’Europe, et le matériel est
              remplacé alors qu’il pourrait être réemployé grâce au logiciel libre.
              <br /><br />
              Le NIRD propose un modèle plus sain :
            </p>

            <ul>
              <li>✔ Linux redonne vie aux anciens ordinateurs</li>
              <li>✔ Les logiciels libres réduisent les coûts</li>
              <li>✔ Les données restent souveraines</li>
              <li>✔ Les équipes deviennent autonomes</li>
            </ul>

            <p className="explication-paragraph">
              Le but n’est pas de se couper du numérique, mais d’en reprendre le contrôle.
              Une école résistante est une école qui choisit son avenir.
            </p>

            <button className="primary-btn" onClick={() => setPage("home")}>
              🔁 Retour à l'accueil
            </button>
          </div>
        )}

      </div> {/* FIN game-card */}
    </main>

    <Footer setPage={setPage} />
  </div>
);
}