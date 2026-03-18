import WhatsAppIcon from "./WhatsAppIcon";
import { WA_LINK } from "../constants";

const comoRealizado = [
  "Visão 3D ampliada",
  "Movimentos extremamente precisos",
  "Controle total do cirurgião",
];

const beneficios = [
  "Menos dor após a cirurgia",
  "Cortes menores e mais delicados",
  "Recuperação acelerada",
  "Maior preservação de funções",
];

const cardStyle = {
  borderRadius: "1rem",
  backgroundColor: "#0f1f3d",
  border: "1px solid rgba(255,255,255,0.08)",
  padding: "2rem",
};

const SolucaoSection = () => (
  <section
    id="solucao"
    style={{
      backgroundColor: "#0a1628",
      padding: "6rem 1.5rem",
      fontFamily: "'Montserrat', sans-serif",
    }}
  >
    <div
      className="grid grid-cols-1 lg:grid-cols-2"
      style={{ maxWidth: "72rem", margin: "0 auto", gap: "3rem" }}
    >
      {/* RIGHT: copy — aparece primeiro no mobile */}
      <div className="order-1 lg:order-2">
        <div style={{ width: "3rem", height: "3px", backgroundColor: "#f5c518", marginBottom: "2rem" }} />

        <h2
          style={{
            color: "#ffffff",
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
            fontWeight: 900,
            lineHeight: 1.2,
            marginBottom: "1.5rem",
          }}
        >
          Cirurgia Robótica em Fortaleza: mais precisão,{" "}
          <span style={{ color: "#f5c518" }}>menos impacto no seu corpo</span>
        </h2>

        <p style={{ color: "#ffffff", fontSize: "0.875rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
          A cirurgia robótica representa o nível mais avançado da medicina urológica atual.
          Com ela, o procedimento é realizado com:
        </p>

        <ul style={{ listStyle: "none", padding: 0, margin: "0 0 2rem 0", display: "flex", flexDirection: "column", gap: "0.625rem" }}>
          {comoRealizado.map((item) => (
            <li key={item} style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "#ffffff", fontSize: "0.875rem" }}>
              <span
                style={{
                  width: "1.25rem",
                  height: "1.25rem",
                  borderRadius: "50%",
                  backgroundColor: "rgba(245,197,24,0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#f5c518",
                  fontSize: "0.75rem",
                  flexShrink: 0,
                }}
              >›</span>
              {item}
            </li>
          ))}
        </ul>

        <p style={{ color: "#ffffff", fontSize: "0.875rem", lineHeight: 1.7, marginBottom: "1.25rem" }}>
          Isso proporciona:
        </p>

        <ul
          className="grid grid-cols-1 sm:grid-cols-2"
          style={{ listStyle: "none", padding: 0, margin: "0 0 2rem 0", gap: "0.75rem" }}
        >
          {beneficios.map((b) => (
            <li key={b} style={{ display: "flex", alignItems: "center", gap: "0.625rem", color: "#ffffff", fontWeight: 600, fontSize: "0.875rem" }}>
              <span
                style={{
                  width: "1.25rem",
                  height: "1.25rem",
                  borderRadius: "50%",
                  backgroundColor: "#f5c518",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#0a1628",
                  fontSize: "0.7rem",
                  fontWeight: 900,
                  flexShrink: 0,
                }}
              >✓</span>
              {b}
            </li>
          ))}
        </ul>

        <p style={{ color: "#ffffff", fontSize: "0.875rem", lineHeight: 1.7, marginBottom: "2rem" }}>
          Para pacientes que buscam excelência e tecnologia, essa é hoje a{" "}
          <strong style={{ color: "#ffffff" }}>melhor escolha disponível.</strong>
        </p>

        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.625rem",
            backgroundColor: "#f5c518",
            color: "#0a1628",
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 700,
            fontSize: "0.75rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            padding: "1rem 2rem",
            borderRadius: "9999px",
            textDecoration: "none",
            boxShadow: "0 8px 32px rgba(245,197,24,0.25)",
          }}
        >
          <WhatsAppIcon size={16} />
          Quero Saber Mais
        </a>
      </div>

      {/* LEFT: cards — aparece segundo no mobile */}
      <div className="order-2 lg:order-1" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <div style={cardStyle} data-aos="fade-right" data-aos-delay="500">
          <h3 style={{ color: "#ffffff", fontWeight: 700, fontSize: "1.2rem", marginBottom: "0.5rem" }}>
            Visão 3d ampliada + instrumentos articulados
          </h3>
          <p style={{ color: "#ffffff", fontSize: "0.875rem", lineHeight: 1.6, margin: 0 }}>
            Visão 3D com ampliação de até 10x e instrumentos articulados com 7 graus de liberdade —
            superando os limites da mão humana.
          </p>
        </div>

        <div style={cardStyle} data-aos="fade-right" data-aos-delay="700">
          <h3 style={{ color: "#ffffff", fontWeight: 700, fontSize: "1.2rem", marginBottom: "0.5rem" }}>
            Movimentos extremamente precisos
          </h3>
          <p style={{ color: "#ffffff", fontSize: "0.875rem", lineHeight: 1.6, margin: 0 }}>
            Os instrumentos realizam movimentos altamente precisos e delicados, superando as limitações naturais das mãos humanas. Essa precisão permite intervenções mais controladas, reduzindo impactos nos tecidos e favorecendo uma recuperação mais rápida.
          </p>
        </div>

        <div style={cardStyle} data-aos="fade-right" data-aos-delay="900">
          <h3 style={{ color: "#ffffff", fontWeight: 700, fontSize: "1.2rem", marginBottom: "0.5rem" }}>
            Controle total do cirurgião
          </h3>
          <p style={{ color: "#ffffff", fontSize: "0.875rem", lineHeight: 1.6, margin: 0 }}>
            Todo o sistema é totalmente controlado pelo cirurgião em tempo real. Cada movimento é reproduzido com fidelidade pelos instrumentos cirúrgicos, garantindo segurança, estabilidade e máxima confiança durante todo o procedimento.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default SolucaoSection;