export default function PopupExplication({ title, text, onNext }) {
  return (
    <div style={styles.overlay}>
      <div style={styles.popup}>
        <h2>{title}</h2>
        <p style={{ marginTop: "10px", fontSize: "18px" }}>{text}</p>

        <button style={styles.btn} onClick={onNext}>
          👉 Question suivante
        </button>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    background: "rgba(0,0,0,0.7)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
  },
  popup: {
    background: "#111",
    padding: "30px",
    borderRadius: "12px",
    color: "white",
    width: "60%",
    maxWidth: "600px",
    textAlign: "center",
    boxShadow: "0 0 25px cyan",
    border: "1px solid cyan",
  },
  btn: {
    marginTop: "25px",
    padding: "12px 22px",
    background: "cyan",
    border: "none",
    color: "#111",
    cursor: "pointer",
    fontWeight: "bold",
    borderRadius: "8px",
    fontSize: "18px",
  },
};
