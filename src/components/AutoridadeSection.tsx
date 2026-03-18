import drErico from "../assets/dr-erico.webp";

const montserrat: React.CSSProperties = { fontFamily: "'Montserrat', sans-serif" };

const NOS = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
      </svg>
    ),
    label: "Formação",
    text: "Graduação pela Universidade\nFederal do Ceará (UFC)",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="3"/><path d="M3 9h18M9 21V9"/>
      </svg>
    ),
    label: "Residência Médica",
    text: "Hospital Geral\nde Fortaleza (HGF)",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
      </svg>
    ),
    label: "Fellowship",
    text: "Cirurgia Robótica — Hospital\nIsraelita Albert Einstein",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
      </svg>
    ),
    label: "Sociedade Brasileira de Urologia",
    text: "Membro Titular —\ncertificação nacional",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z"/>
      </svg>
    ),
    label: "Avaliação",
    text: "5 estrelas no Google —\nreferência em Fortaleza",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z"/>
      </svg>
    ),
    label: "21 anos de experiência",
    text: "Referência em cirurgias\nurológicas complexas",
  },
];

const AutoridadeSection = () => (
  <section
    id="sobre"
    className="relative overflow-hidden"
    style={{ ...montserrat, backgroundColor: "#071120" }}
  >
    {/* Grade listras brancas */}
    <div
      className="pointer-events-none absolute inset-0"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
        backgroundSize: "36px 36px",
      }}
    />
    {/* Glow dourado */}
    <div
      className="pointer-events-none absolute inset-0"
      style={{
        background:
          "radial-gradient(ellipse 60% 70% at 30% 50%, rgba(245,197,24,0.05) 0%, transparent 65%)",
      }}
    />
    {/* Linha topo */}
    <div
      className="absolute top-0 left-0 right-0 h-[3px]"
      style={{
        background: "linear-gradient(to right, transparent, #f5c518 20%, #f5c518 80%, transparent)",
      }}
    />

    <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-20 lg:py-28">
      <div className="grid grid-cols-1 lg:grid-cols-[480px_1fr] gap-10 lg:gap-16 items-start">

        {/* ══════════════════════
            ESQUERDA — foto
        ══════════════════════ */}
        <div className="relative" data-aos="fade-right" data-aos-delay="100">

          {/* Linha de acento vertical dourada */}
          <div
            className="hidden lg:block absolute -left-6 top-[10%] bottom-[10%] w-[3px] rounded-full"
            style={{
              background: "linear-gradient(to bottom, transparent, #f5c518 25%, #f5c518 75%, transparent)",
            }}
          />

          {/* Foto */}
          <div
            className="w-full overflow-hidden"
            style={{
              borderRadius: 20,
              border: "0.5px solid rgba(245,197,24,0.25)",
              aspectRatio: "4/5",
              boxShadow: "0 32px 80px rgba(0,0,0,0.4)",
            }}
          >
            <img
              src={drErico}
              alt="Dr. Érico Diógenes — Urologista em Fortaleza"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center 10%",
                display: "block",
              }}
            />
          </div>

          {/* Badge sobreposto */}
          <div
            className="absolute flex flex-col items-center justify-center"
            style={{
              bottom: -16,
              right: -16,
              width: 100,
              height: 100,
              borderRadius: 16,
              background: "#f5c518",
              boxShadow: "0 16px 48px rgba(245,197,24,0.35)",
            }}
          >
            <span style={{ ...montserrat, color: "#071120", fontSize: 38, fontWeight: 900, lineHeight: 1 }}>21</span>
            <span style={{ ...montserrat, color: "#071120", fontSize: 9, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", textAlign: "center", marginTop: 3 }}>
              anos de{"\n"}exp.
            </span>
          </div>
        </div>

        {/* ══════════════════════
            DIREITA — copy + cards
        ══════════════════════ */}
        <div className="flex flex-col gap-6" data-aos="fade-left" data-aos-delay="150">

          {/* Eyebrow */}
          <div
            className="inline-flex items-center gap-2 text-[0.6rem] font-bold tracking-[0.15em] uppercase px-3 py-1.5 rounded-full w-fit"
            style={{
              background: "rgba(245,197,24,0.08)",
              border: "0.5px solid rgba(245,197,24,0.25)",
              color: "rgba(245,197,24,0.75)",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#f5c518" }} />
            Quem cuidará de você
          </div>

          {/* H2 */}
          <div>
            <h2
              className="font-black text-white leading-[1.08] mb-3"
              style={{ fontSize: "clamp(1.5rem, 2.8vw, 2.2rem)" }}
            >
              Olá, eu sou o{" "}
              <span
                style={{
                  display: "inline-block",
                  background: "#f5c518",
                  color: "#071120",
                  padding: "1px 10px",
                  borderRadius: 5,
                  lineHeight: 1.25,
                }}
              >
                Dr. Érico Diógenes
              </span>
            </h2>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "rgba(255,255,255,0.5)", maxWidth: 480 }}
            >
              Urologista com 21 anos de atuação e referência em Fortaleza para cirurgias urológicas complexas.
            </p>
          </div>

          {/* Cards — 2 colunas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
            {NOS.map((no, i) => (
              <div
                key={no.label}
                className="relative rounded-2xl p-5 flex flex-col gap-3 group"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "0.5px solid rgba(255,255,255,0.09)",
                  transition: "border-color 0.2s, background 0.2s",
                }}
                data-aos="fade-up"
                data-aos-delay={i * 80}
              >
                {/* Linha de acento no topo do card */}
                <div
                  className="absolute top-0 left-6 right-6 h-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "linear-gradient(to right, transparent, #f5c518, transparent)" }}
                />

                {/* Ícone */}
                <div
                  className="flex items-center justify-center w-9 h-9 rounded-lg flex-shrink-0"
                  style={{
                    background: "rgba(245,197,24,0.1)",
                    border: "0.5px solid rgba(245,197,24,0.25)",
                    color: "#f5c518",
                  }}
                >
                  {no.icon}
                </div>

                {/* Texto */}
                <div>
                  <p
                    className="font-bold text-white mb-1"
                    style={{ fontSize: "clamp(0.8rem, 1.1vw, 0.9rem)" }}
                  >
                    {no.label}
                  </p>
                  <p
                    className="leading-relaxed whitespace-pre-line"
                    style={{ fontSize: "clamp(0.75rem, 0.95vw, 0.82rem)", color: "rgba(255,255,255,0.5)" }}
                  >
                    {no.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Frase de fechamento */}
          <div
            className="relative rounded-xl px-5 py-4 mt-2"
            style={{
              background: "rgba(245,197,24,0.06)",
              border: "0.5px solid rgba(245,197,24,0.2)",
            }}
          >
            <div
              className="absolute left-0 top-4 bottom-4 w-[3px] rounded-full"
              style={{
                background: "linear-gradient(to bottom, transparent, #f5c518 20%, #f5c518 80%, transparent)",
              }}
            />
            <p
              className="font-bold text-white leading-relaxed"
              style={{ fontSize: "clamp(0.82rem, 1.05vw, 0.92rem)", paddingLeft: "1rem" }}
            >
              Mais do que operar, minha missão é que você entenda cada etapa do tratamento e se sinta{" "}
              <span style={{ color: "#f5c518" }}>completamente seguro antes, durante e depois.</span>
            </p>
          </div>

        </div>
      </div>
    </div>

    {/* Linha rodapé */}
    <div
      className="absolute bottom-0 left-0 right-0 h-px"
      style={{
        background: "linear-gradient(to right, transparent, rgba(245,197,24,0.15) 30%, rgba(245,197,24,0.15) 70%, transparent)",
      }}
    />
  </section>
);

export default AutoridadeSection;