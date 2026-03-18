import WhatsAppIcon from "./WhatsAppIcon";
import { WA_LINK } from "../constants";

// ── Substitua pelos imports das fotos reais ──
// import foto1 from "../assets/foto-consultorio.jpg";
// import foto2 from "../assets/foto-hospital.jpg";
// import foto3 from "../assets/foto-robo.jpg";
import foto1 from "../assets/dr-erico-escritorio.webp"; // <- caminho da foto grande (esquerda)
import foto2 from "../assets/dr-erico-luzes.webp"; // <- caminho da foto pequena (direita cima)
import foto3 from "../assets/dr-erico-blusa-social.webp"; // <- caminho da foto pequena (direita baixo)

const bullets = [
  "Clique no botão abaixo e fale com nossa equipe via WhatsApp",
  "Atendimento rápido e personalizado",
  "Avaliação completa do seu caso",
];

const montserrat = { fontFamily: "'Montserrat', sans-serif" };

/* ── CTA Final ── */
export const CTAFinalSection = () => (
  <section id="contato" className="bg-[#0a1628] py-24 px-6 lg:px-16" style={montserrat}>
    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

      {/* Copy */}
      <div>
        <span
          className="inline-block border border-[#f5c518] text-[#f5c518] text-[0.7rem] font-semibold tracking-[0.1em] uppercase px-4 py-1.5 rounded-full mb-5"
          style={montserrat}
        >
          Agende uma avaliação
        </span>

        <h2
          className="text-3xl lg:text-[2.6rem] font-black text-white leading-tight mb-4"
          style={montserrat}
        >
          Agende sua consulta com um{" "}
          <span className="text-[#f5c518]">urologista referência</span> em Fortaleza
        </h2>

        <p className="text-[#8a9bb5] text-sm leading-relaxed mb-8" style={montserrat}>
          Se você busca{" "}
          <strong className="text-white">segurança, tecnologia e um atendimento de alto nível</strong>
          , este é o próximo passo.
        </p>

        {/* Bullets */}
        <ul className="flex flex-col gap-3.5 mb-10">
          {bullets.map((b) => (
            <li key={b} className="flex items-start gap-3 text-white/80 text-sm leading-snug" style={montserrat}>
              <span className="w-5 h-5 rounded-full bg-[#f5c518]/15 flex items-center justify-center text-[#f5c518] text-xs flex-shrink-0 mt-0.5">›</span>
              {b}
            </li>
          ))}
        </ul>

        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-[#f5c518] hover:bg-[#d4a800] text-[#0a1628] font-black text-sm tracking-[0.08em] uppercase px-10 py-5 rounded-full shadow-[0_8px_32px_rgba(245,197,24,0.25)] hover:shadow-[0_12px_40px_rgba(245,197,24,0.35)] transition-all duration-200 hover:-translate-y-0.5"
          style={montserrat}
        >
          <WhatsAppIcon size={18} />
          Agendar Consulta Agora
        </a>
      </div>

      {/* Image grid */}
      <div
        className="grid gap-3.5 h-[440px]"
        style={{ gridTemplateColumns: "1fr 1fr", gridTemplateRows: "1fr 1fr" }}
      >
        {/* Card grande — esquerda */}
        <div className="row-span-2 rounded-2xl overflow-hidden" style={{ background: "linear-gradient(160deg, #1a3060, #0a1628)" }}>
          {foto1 ? (
            <img src={foto1} alt="Consultório Dr. Érico" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center gap-2" style={{ opacity: 0.25 }}>
              <svg className="w-[40%]" viewBox="0 0 200 280" fill="none">
                <ellipse cx="100" cy="60" rx="45" ry="55" fill="white" />
                <path d="M10 280 C10 180 40 160 100 155 C160 160 190 180 190 280Z" fill="white" />
                <rect x="75" y="130" width="50" height="40" rx="4" fill="white" fillOpacity="0.6" />
              </svg>
              <span style={{ color: "#fff", fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", ...montserrat }}>Foto 1</span>
            </div>
          )}
        </div>

        {/* Card pequeno — direita cima */}
        <div className="rounded-2xl overflow-hidden" style={{ background: "linear-gradient(135deg, #0f1f3d, #091525)" }}>
          {foto2 ? (
            <img src={foto2} alt="Hospital" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center gap-1" style={{ opacity: 0.25 }}>
              <span style={{ fontSize: 32 }}>🏥</span>
              <span style={{ color: "#fff", fontSize: 10, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", ...montserrat }}>Foto 2</span>
            </div>
          )}
        </div>

        {/* Card pequeno — direita baixo */}
        <div className="rounded-2xl overflow-hidden" style={{ background: "linear-gradient(135deg, #162040, #0a1628)" }}>
          {foto3 ? (
            <img src={foto3} alt="Robô cirúrgico" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center gap-1" style={{ opacity: 0.25 }}>
              <span style={{ fontSize: 32 }}>🤖</span>
              <span style={{ color: "#fff", fontSize: 10, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", ...montserrat }}>Foto 3</span>
            </div>
          )}
        </div>
      </div>

    </div>
  </section>
);

/* ── Footer ── */
export const Footer = () => (
  <footer className="bg-[#060e1c] border-t border-white/[0.08] px-6 lg:px-16 py-12" style={montserrat}>
    <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-6">
      <div>
        <p className="text-[1.05rem] font-black text-white" style={montserrat}>
          Dr. <span className="text-[#f5c518]">Érico Diógenes</span>
        </p>
        <p className="text-[#8a9bb5] text-xs mt-1" style={montserrat}>
          Urologista em Fortaleza · Cirurgia Robótica & Laser HoLEP
        </p>
      </div>

      <ul className="flex gap-7 list-none flex-wrap">
        {[
          ["#hero",         "Início"    ],
          ["#solucao",      "Tecnologia"],
          ["#sobre",        "Dr. Érico" ],
          ["#prova-social", "Avaliações"],
          ["#faq",          "FAQ"       ],
        ].map(([href, label]) => (
          <li key={href}>
            <a
              href={href}
              className="text-[#8a9bb5] hover:text-[#f5c518] text-sm transition-colors duration-200"
              style={montserrat}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-[#f5c518] hover:bg-[#d4a800] text-[#0a1628] font-bold text-xs tracking-widest uppercase px-6 py-3 rounded-full transition-all duration-200"
        style={montserrat}
      >
        <WhatsAppIcon size={14} />
        Falar no WhatsApp
      </a>
    </div>
  </footer>
);