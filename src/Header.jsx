export default function Header({ setPage }) {
  return (
    <header className="app-header">
      
      {/* Logo cliquable */}
      <img
        src="/logo.gif"
        alt="Logo NIRD"
        className="header-logo"
        onClick={() => setPage("home")}
      />

      {/* Titre centré */}
      <h1 className="header-title-centered">
        Le Village Numérique Résistant
      </h1>
    </header>
  );
}
