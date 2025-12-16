export default function Footer({ setPage }) { 
  return (
    <footer className="app-footer">

      {/* COLONNE GAUCHE */}
      <div className="footer-col left">
        <h3 className="footer-section-title">Équipe</h3>

        <p className="footer-name">
          Saad Youmna  
          <br />
          <small className="leader-role">Leader</small>
        </p>

        <p className="footer-name">Dehichi Mouad</p>
      </div>

      {/* COLONNE CENTRALE */}
      <div className="footer-col center">
        <div className="footer-icon">💻</div>

        <div className="footer-box">
          Nuit de l’informatique : <strong>Escape Game NIRD</strong>
        </div>

        <p className="footer-title">
          Le Village Numérique Résistant — Nuit de l'Info 2025
        </p>
      </div>

      {/* COLONNE DROITE */}
      <div className="footer-col right">
        <p className="footer-name">Bouhrich Manel</p>
        <p className="footer-name">Zidelmal Tassadit</p>

        {/* LIEN MAURITANIE → VERCEL */}
        <a
          href="https://nightshift-h294yspcn-yomnas-projects-85512034.vercel.app/"
          className="mauritanien-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          🇲🇷 Vous êtes Mauritanien ? <strong>Cliquez ici</strong>
        </a>

        <div style={{ marginBottom: "10px" }}>
          <button
            onClick={() => setPage("mentions")}
            style={{
              background: "transparent",
              border: "none",
              color: "#fff",
              textDecoration: "none",
              fontWeight: "bold",
              cursor: "pointer",
              padding: 0,
              fontSize: "14px",
            }}
          >
            Mentions légales
          </button>
        </div>
      </div>

    </footer>
  );
}
