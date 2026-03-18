import { useEffect, useRef } from "react";
import WhatsAppIcon from "./WhatsAppIcon";
import { WA_LINK } from "../constants";
import imgLogo from "../assets/logo_1.png";
import imgBg from "../assets/dr-erico-holep.webp";
import imgBgMobile from "../assets/dr-erico-holep.webp";

/* ─── CSS injetado uma vez ─── */
const STYLES = `
@keyframes hero-fade-up {
  from { opacity: 0; transform: translateY(22px); }
  to   { opacity: 1; transform: translateY(0);    }
}
@keyframes hero-fade-in {
  from { opacity: 0; }
  to   { opacity: 1; }
}
@keyframes pulse-ring {
  0%   { transform: translate(-50%,-50%) scale(1);   opacity: .35; }
  70%  { transform: translate(-50%,-50%) scale(1.18); opacity: 0;   }
  100% { transform: translate(-50%,-50%) scale(1);   opacity: 0;   }
}
@keyframes float-pill {
  0%, 100% { transform: translateY(0px);  }
  50%       { transform: translateY(-6px); }
}
@keyframes scan-line {
  0%   { top: 0%;   opacity: 0; }
  10%  { opacity: 1; }
  90%  { opacity: 1; }
  100% { top: 100%; opacity: 0; }
}
@keyframes draw-circle {
  from { stroke-dashoffset: 565; }
  to   { stroke-dashoffset: 0;   }
}
@keyframes counter-flicker {
  0%,100% { opacity: 1; }
  50%     { opacity: .7; }
}

.hero-fade-up   { animation: hero-fade-up  .7s cubic-bezier(.22,1,.36,1) both; }
.hero-fade-in   { animation: hero-fade-in  .9s ease both; }

.hero-left-content > * { opacity: 0; animation: hero-fade-up .65s cubic-bezier(.22,1,.36,1) both; }
.hero-left-content > *:nth-child(1) { animation-delay: .05s; }
.hero-left-content > *:nth-child(2) { animation-delay: .15s; }
.hero-left-content > *:nth-child(3) { animation-delay: .25s; }
.hero-left-content > *:nth-child(4) { animation-delay: .35s; }
.hero-left-content > *:nth-child(5) { animation-delay: .45s; }
.hero-left-content > *:nth-child(6) { animation-delay: .55s; }
.hero-left-content > *:nth-child(7) { animation-delay: .65s; }

.pill-float-1 { animation: float-pill 4s ease-in-out infinite; }
.pill-float-2 { animation: float-pill 5s ease-in-out infinite .8s; }
.pill-float-3 { animation: float-pill 4.5s ease-in-out infinite 1.6s; }

.draw-circle-anim {
  stroke-dasharray: 565;
  stroke-dashoffset: 565;
  animation: draw-circle 1.8s cubic-bezier(.4,0,.2,1) .6s forwards;
}

.scan {
  position: absolute; left: 0; right: 0; height: 2px;
  background: linear-gradient(to right, transparent, rgba(245,197,24,.35), transparent);
  animation: scan-line 4s linear infinite 1.2s;
  pointer-events: none;
}

.hero-stat-num {
  animation: counter-flicker .15s ease .9s 2;
}

.cta-primary:hover {
  background: #1a2f4a !important;
  transform: translateY(-2px);
  box-shadow: 0 16px 48px rgba(7,17,32,.28) !important;
}
.cta-secondary:hover {
  background: rgba(0,0,0,.04) !important;
  border-color: rgba(0,0,0,.3) !important;
}
`;

/* ─── Dados dos stats ─── */
const STATS = [
  { num: "21 +", label: "anos de\nexperiência" },
  { num: "5★",  label: "avaliação\nno Google"  },
  { num: "48h", label: "alta após\ncirurgia"    },
];

/* ─── Pills do painel direito ─── */
const PILLS = [
  { text: "Padrão-ouro mundial",  cls: "pill-float-1", top: "28%",  right: "8%",  left: "auto", bottom: "auto", gold: true },
  { text: "Sem cortes externos",  cls: "pill-float-2", top: "auto", right: "auto", left: "6%",  bottom: "28%",  gold: true },
  { text: "Alta em 48h",          cls: "pill-float-3", top: "auto", right: "6%",  left: "auto", bottom: "14%",  gold: true },
];

const HeroSection = () => {
  useEffect(() => {
    if (!document.getElementById("hero-styles")) {
      const tag = document.createElement("style");
      tag.id = "hero-styles";
      tag.textContent = STYLES;
      document.head.appendChild(tag);
    }
  }, []);

  return (
    <section
      id="hero"
      className="relative flex flex-col lg:flex-row overflow-hidden"
      style={{ fontFamily: "'Montserrat', sans-serif", minHeight: "100svh" }}
    >

      {/* ══════════════════════════════════════
          MOBILE — foto em cima (só aparece em mobile)
      ══════════════════════════════════════ */}
      <div
        className="block lg:hidden w-full relative flex-shrink-0"
        style={{ height: "60vw" }}
      >
        {/* Foto */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${imgBgMobile})`,
            backgroundSize: "cover",
            backgroundPosition: "center top",
          }}
        />
        {/* Overlay inferior para fundir com o branco abaixo */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, transparent 55%, #ffffff 100%)",
          }}
        />
        {/* Overlay lateral esquerdo sutil */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to right, rgba(255,255,255,.15) 0%, transparent 50%)",
          }}
        />
      </div>

      {/* ══════════════════════════════════════
          PAINEL ESQUERDO — branco
          · Mobile: abaixo da foto
          · Desktop: ocupa 55% da largura, altura 100vh
      ══════════════════════════════════════ */}
      <div
        className="relative flex flex-col justify-start lg:justify-center w-full lg:w-[55%]
                   px-6 sm:px-10 lg:px-16 pt-6 pb-12 lg:py-20 bg-white lg:min-h-screen"
        style={{ zIndex: 2 }}
      >
        {/* Linha de acento vertical — desktop only */}
        <div
          className="hidden lg:block absolute left-0 top-[15%] bottom-[15%] w-[3px] rounded-full"
          style={{ background: "linear-gradient(to bottom, transparent, #f5c518 30%, #f5c518 70%, transparent)" }}
        />

        <div className="hero-left-content flex flex-col gap-0">

          {/* Logo */}
          <div className="mb-8 lg:mb-10">
            <img src={imgLogo} alt="Dr. Érico Diógenes — Urologista" className="h-10 sm:h-12 lg:h-14 w-auto" />
          </div>

          {/* Eyebrow + badge */}
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <div
              className="inline-flex items-center gap-2 text-[0.6rem] font-bold tracking-[0.15em] uppercase px-3 py-1.5 rounded-full w-fit"
              style={{ background: "rgba(0,0,0,.05)", border: "0.5px solid rgba(0,0,0,.1)", color: "rgba(0,0,0,.5)" }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              Urologista em Fortaleza
            </div>
            <span style={{ color: "rgba(0,0,0,.2)", fontSize: 12 }}>·</span>
            <span
              className="text-[0.6rem] font-bold tracking-[0.15em] uppercase"
              style={{ color: "rgba(0,0,0,.3)" }}
            >
              Especialista em HoLEP
            </span>
          </div>

          {/* H1 */}
          <h1
            className="font-black leading-[1.08] mb-6"
            style={{ fontSize: "clamp(1.9rem, 3.8vw, 2.75rem)", color: "#071120" }}
          >
            Chega de acordar<br />
            toda hora à noite.{" "}
            <span
              style={{
                display: "inline-block",
                background: "#071120",
                color: "#f5c518",
                padding: "2px 10px",
                borderRadius: 6,
                lineHeight: 1.2,
              }}
            >
              Existe solução.
            </span>
          </h1>

          {/* Subtítulo */}
          <p
            className="leading-relaxed mb-8 max-w-[420px]"
            style={{ fontSize: "clamp(.8rem, 1.1vw, .95rem)", color: "rgba(0,0,0,.48)" }}
          >
            O <strong style={{ color: "#071120" }}>HoLEP</strong> é o padrão-ouro mundial para
            obstrução urinária.{" "}
            <strong style={{ color: "#071120" }}>
              Minimamente invasivo, resultado definitivo, recuperação em dias.
            </strong>
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 mb-3">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-primary flex items-center justify-center gap-2.5 font-bold text-[.7rem] tracking-[.1em] uppercase px-7 py-[14px] rounded-full transition-all duration-200"
              style={{
                background: "#071120",
                color: "#fff",
                boxShadow: "0 8px 32px rgba(7,17,32,.18)",
              }}
            >
              <WhatsAppIcon size={15} />
              Quero saber se sou candidato ao HoLEP
            </a>
            <a
              href="#sobre"
              className="cta-secondary flex items-center justify-center px-6 py-[14px] rounded-full font-semibold text-sm transition-all duration-200"
              style={{ border: "0.5px solid rgba(0,0,0,.18)", color: "rgba(0,0,0,.55)" }}
            >
              Conhecer o Dr. Érico
            </a>
          </div>

          {/* Hint */}
          <p style={{ fontSize: 11, color: "rgba(0,0,0,.28)", marginLeft: 2 }}>
            Atendimento via WhatsApp — rápido e discreto
          </p>

          {/* Stats */}
          <div
            className="flex gap-8 sm:gap-12 mt-10 pt-8"
            style={{ borderTop: "0.5px solid rgba(0,0,0,.07)" }}
          >
            {STATS.map(({ num, label }) => (
              <div key={num}>
                <div
                  className="hero-stat-num font-black leading-none"
                  style={{ fontSize: "clamp(1.6rem,2.8vw,2.2rem)", color: "#071120" }}
                >
                  {num}
                </div>
                <div
                  className="text-[.68rem] mt-1 leading-snug whitespace-pre-line"
                  style={{ color: "rgba(0,0,0,.35)" }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* ══════════════════════════════════════
          PAINEL DIREITO — escuro (desktop only)
      ══════════════════════════════════════ */}
      <div
        className="hidden lg:block absolute right-0 top-0 w-[45%] h-full overflow-hidden"
        style={{ background: "#060f1d" }}
      >
        {/* Foto de fundo */}
        <div
          className="absolute inset-0 hero-fade-in"
          style={{
            backgroundImage: `url(${imgBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center top",
            opacity: .28,
          }}
        />

        {/* Gradiente de fusão lateral */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to right, #060f1d 0%, rgba(6,15,29,.4) 35%, transparent 100%)" }}
        />

        {/* Scan line animada */}
        <div className="scan" />

        {/* ── Diagrama SVG central ── */}
        <div
          className="absolute"
          style={{ top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 280, height: 280 }}
        >
          <svg viewBox="0 0 280 280" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
            <circle cx="140" cy="140" r="128" stroke="rgba(245,197,24,.15)" strokeWidth="0.5" className="draw-circle-anim" />
            <circle cx="140" cy="140" r="90"  stroke="rgba(245,197,24,.22)" strokeWidth="0.5" />
            <circle cx="140" cy="140" r="54"  stroke="rgba(245,197,24,.35)" strokeWidth="0.5" />
            {[[140,12],[268,140],[140,268],[12,140]].map(([cx,cy],i) => (
              <circle key={i} cx={cx} cy={cy} r="3" fill="rgba(245,197,24,.5)" />
            ))}
            <line x1="140" y1="12"  x2="140" y2="268" stroke="rgba(245,197,24,.06)" strokeWidth="0.5" />
            <line x1="12"  y1="140" x2="268" y2="140" stroke="rgba(245,197,24,.06)" strokeWidth="0.5" />
            <circle cx="140" cy="140" r="90" stroke="rgba(245,197,24,.3)" strokeWidth="1" style={{ animation: "pulse-ring 2.8s ease-out infinite 1s" }} />
            <circle cx="140" cy="140" r="42" fill="rgba(245,197,24,.1)" stroke="rgba(245,197,24,.3)" strokeWidth="0.5" />
            <circle cx="140" cy="140" r="30" fill="#f5c518" />
            <text x="140" y="147" textAnchor="middle" fontFamily="'Montserrat', sans-serif" fontWeight="900" fontSize="22" fill="#071120">H</text>
            <text x="140" y="198" textAnchor="middle" fontFamily="'Montserrat', sans-serif" fontWeight="700" fontSize="9" letterSpacing="5" fill="rgba(245,197,24,.65)">HOLEP</text>
            {/* Topo: coração */}
            <g transform="translate(128,0)">
              <rect width="24" height="24" rx="6" fill="rgba(255,255,255,.06)" stroke="rgba(255,255,255,.1)" strokeWidth="0.5" />
              <path d="M12 18s-7-4.5-7-9a4 4 0 018 0 4 4 0 018 0c0 4.5-7 9-7 9z" fill="none" stroke="rgba(255,255,255,.5)" strokeWidth="1.2" strokeLinejoin="round" />
            </g>
            {/* Direita: laser */}
            <g transform="translate(256,128)">
              <rect width="24" height="24" rx="6" fill="rgba(255,255,255,.06)" stroke="rgba(255,255,255,.1)" strokeWidth="0.5" />
              <circle cx="12" cy="12" r="4" fill="none" stroke="rgba(255,255,255,.5)" strokeWidth="1.2" />
              <line x1="12" y1="2"  x2="12" y2="6"  stroke="rgba(255,255,255,.5)" strokeWidth="1.2" />
              <line x1="12" y1="18" x2="12" y2="22" stroke="rgba(255,255,255,.5)" strokeWidth="1.2" />
              <line x1="2"  y1="12" x2="6"  y2="12" stroke="rgba(255,255,255,.5)" strokeWidth="1.2" />
              <line x1="18" y1="12" x2="22" y2="12" stroke="rgba(255,255,255,.5)" strokeWidth="1.2" />
            </g>
            {/* Baixo: paciente */}
            <g transform="translate(128,256)">
              <rect width="24" height="24" rx="6" fill="rgba(255,255,255,.06)" stroke="rgba(255,255,255,.1)" strokeWidth="0.5" />
              <circle cx="12" cy="8" r="3" fill="none" stroke="rgba(255,255,255,.5)" strokeWidth="1.2" />
              <path d="M6 22c0-4 2.5-6 6-6s6 2 6 6" fill="none" stroke="rgba(255,255,255,.5)" strokeWidth="1.2" strokeLinecap="round" />
            </g>
            {/* Esquerda: escudo */}
            <g transform="translate(0,128)">
              <rect width="24" height="24" rx="6" fill="rgba(255,255,255,.06)" stroke="rgba(255,255,255,.1)" strokeWidth="0.5" />
              <path d="M12 3l7 3v5c0 4-3 7-7 9-4-2-7-5-7-9V6l7-3z" fill="none" stroke="rgba(255,255,255,.5)" strokeWidth="1.2" strokeLinejoin="round" />
              <path d="M9 12l2 2 4-4" fill="none" stroke="rgba(255,255,255,.5)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </g>
          </svg>
        </div>

        {/* Pills flutuantes */}
        {PILLS.map(({ text, cls, top, right, left, bottom, gold }) => (
          <div
            key={text}
            className={`absolute font-semibold rounded-full px-4 py-2 ${cls}`}
            style={{
              top, right, left, bottom,
              background: "rgba(245,197,24,.12)",
              border: "0.5px solid rgba(245,197,24,.3)",
              color: "rgba(245,197,24,.8)",
              fontSize: 10,
              letterSpacing: "0.07em",
              backdropFilter: "blur(6px)",
              whiteSpace: "nowrap",
            }}
          >
            {text}
          </div>
        ))}

        {/* Marca d'água de fundo */}
        <div
          className="absolute bottom-8 right-8 font-black select-none pointer-events-none"
          style={{
            fontSize: 96,
            lineHeight: 1,
            color: "rgba(245,197,24,.04)",
            fontFamily: "'Montserrat', sans-serif",
            letterSpacing: "-0.04em",
          }}
        >
          HoLEP
        </div>
      </div>
    </section>
  );
};

export default HeroSection;