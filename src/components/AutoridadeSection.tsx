import drErico from "../assets/dr-erico.webp";
import bgImage from "../assets/bf-autoridade.jpg";

const formacao = [
  "Fellowship em Cirurgia Robótica – Hospital Israelita Albert Einstein",
  "Residência Médica – Hospital Geral de Fortaleza (HGF)",
  "Graduação – Universidade Federal do Ceará (UFC)",
  "Membro Titular da Sociedade Brasileira de Urologia",
];

const diferenciais = [
  "Atendimento claro, direto e humanizado",
  "Foco total na segurança do paciente",
  "Uso das tecnologias mais modernas disponíveis",
];

const montserrat: React.CSSProperties = { fontFamily: "'Montserrat', sans-serif" };

const CheckIcon = () => (
  <svg
    style={{ width: 20, height: 20, color: "#f5c518", flexShrink: 0, marginTop: 2 }}
    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
    strokeLinecap="round" strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const AutoridadeSection = () => (
  <section
    id="sobre"
    style={{ ...montserrat, position: "relative", padding: "96px 24px", overflow: "hidden" }}
  >
    {/* Background */}
    <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${bgImage})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", zIndex: 0 }} />
    <div style={{ position: "absolute", inset: 0, background: "rgba(10, 22, 40, 0.82)", zIndex: 1 }} />

    <div
      style={{
        position: "relative", zIndex: 2, maxWidth: 1152, margin: "0 auto",
        display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "80px", alignItems: "center",
      }}
    >
      {/* LEFT: foto */}
      <div style={{ position: "relative" }} data-aos="fade-right" data-aos-delay="1000">
        <div style={{ width: "100%", aspectRatio: "4/5", borderRadius: "24px", overflow: "hidden", background: "linear-gradient(135deg, #162447 0%, #0a1628 100%)" }}>
          <img
            src={drErico}
            alt="Dr. Érico Diógenes – Urologista em Fortaleza"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", display: "block" }}
          />
        </div>
        {/* Badge */}
        <div
          data-aos="zoom-in" data-aos-delay="400"
          style={{ position: "absolute", bottom: -20, right: -20, width: 100, height: 100, borderRadius: 16, background: "#f5c518", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 4, boxShadow: "0 20px 60px rgba(245,197,24,0.3)" }}
        >
          <span style={{ color: "#0a1628", fontSize: 50, fontWeight: 900, lineHeight: 1, ...montserrat }}>21</span>
          <span style={{ color: "#0a1628", fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", textAlign: "center", padding: "0 12px", ...montserrat }}>
            anos de experiência
          </span>
        </div>
      </div>

      {/* RIGHT: copy */}
      <div data-aos="fade-left" data-aos-delay="200">
        <span style={{ color: "#f5c518", fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", display: "block", marginBottom: 16, ...montserrat }}>
          Quem cuidará de você
        </span>
        <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 900, color: "#fff", lineHeight: 1.25, marginBottom: 12, ...montserrat }}>
          Dr. Érico Diógenes –{" "}
          <span style={{ color: "#f5c518" }}>Urologista em Fortaleza</span>{" "}
          referência em cirurgia robótica
        </h2>
        <p style={{ color: "rgba(255,255,255,0.85)", fontWeight: 600, fontSize: 13, marginBottom: 20, ...montserrat }}>
          Uma trajetória dedicada à excelência urológica.
        </p>
        <p style={{ color: "#8a9bb5", fontSize: 13, lineHeight: 1.7, marginBottom: 24, ...montserrat }}>
          Com mais de <strong style={{ color: "#fff" }}>21 anos de experiência</strong>, o Dr. Érico Diógenes é reconhecido como um dos principais nomes da urologia em Fortaleza. Sua formação reúne instituições de alto prestígio:
        </p>

        <ul style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 28, padding: 0, listStyle: "none" }}>
          {formacao.map((f, i) => (
            <li key={f} data-aos="fade-up" data-aos-delay={300 + i * 80}
              style={{ display: "flex", alignItems: "flex-start", gap: 12, color: "rgba(255,255,255,0.75)", fontSize: 13, lineHeight: 1.5, ...montserrat }}
            >
              <CheckIcon />{f}
            </li>
          ))}
        </ul>

        <p style={{ color: "#8a9bb5", fontSize: 13, lineHeight: 1.7, marginBottom: 16, ...montserrat }}>
          Seu diferencial vai além da técnica:
        </p>

        <ul style={{ display: "flex", flexDirection: "column", gap: 12, padding: 0, listStyle: "none" }}>
          {diferenciais.map((d, i) => (
            <li key={d} data-aos="fade-up" data-aos-delay={600 + i * 80}
              style={{ display: "flex", alignItems: "center", gap: 12, color: "#fff", fontWeight: 600, fontSize: 13, ...montserrat }}
            >
              <span style={{ color: "#f5c518", fontSize: 18, lineHeight: 1 }}>›</span>{d}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default AutoridadeSection;