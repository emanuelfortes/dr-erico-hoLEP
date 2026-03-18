const TopBar = () => (
  <div
    style={{
      backgroundColor: "#0a1628",
      borderBottom: "1px solid rgba(255,255,255,0.08)",
      padding: "15px 24px",
      textAlign: "center",
      fontFamily: "'Montserrat', sans-serif",
    }}
  >
    <h1
      style={{
        color: "rgba(255,255,255,0.55)",
        fontSize: "0.78rem",
        letterSpacing: "0.02em",
        margin: 0,
        lineHeight: 1.5,
      }}
    >
      Urologista em Fortaleza especialista em HoLEP —{" "}
      <span style={{ color: "rgba(255,255,255,0.8)" }}>
        Dr. Érico Diógenes
      </span>
    </h1>
  </div>
);

export default TopBar;