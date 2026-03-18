import GoogleReviews from "./GoogleReviews";

const montserrat: React.CSSProperties = { fontFamily: "'Montserrat Variable', sans-serif" };

const SELOS = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z"/>
      </svg>
    ),
    num: "+40",
    label: "avaliações no Google",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
      </svg>
    ),
    num: "5,0",
    label: "nota média",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 21c-4-4-8-7.5-8-11a8 8 0 0116 0c0 3.5-4 7-8 11z"/><circle cx="12" cy="10" r="2"/>
      </svg>
    ),
    num: "Fortaleza",
    label: "referência em CE",
  },
];

const ProvaSocialSection = () => (
  <section
    id="prova-social"
    className="relative overflow-hidden"
    style={{ ...montserrat, backgroundColor: "#f4f2ed" }}
  >
    {/* Grade listras escuras */}
    <div
      className="pointer-events-none absolute inset-0"
      style={{
        backgroundImage:
          "linear-gradient(rgba(7,17,32,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(7,17,32,0.05) 1px, transparent 1px)",
        backgroundSize: "36px 36px",
      }}
    />
    {/* Vinheta */}
    <div
      className="pointer-events-none absolute inset-0"
      style={{
        background:
          "radial-gradient(ellipse 90% 80% at 50% 50%, transparent 40%, rgba(7,17,32,0.06) 100%)",
      }}
    />
    {/* Linha topo dourada */}
    <div
      className="absolute top-0 left-0 right-0 h-[3px]"
      style={{
        background:
          "linear-gradient(to right, transparent, #f5c518 20%, #f5c518 80%, transparent)",
      }}
    />

    <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 pt-20 lg:pt-28 pb-16 lg:pb-24">

      {/* ── Header ── */}
      <div className="text-center mb-12 lg:mb-16" data-aos="fade-up">

        {/* Eyebrow */}
        <div
          className="inline-flex items-center gap-2 text-[0.6rem] font-bold tracking-[0.15em] uppercase px-3 py-1.5 rounded-full mb-6"
          style={{
            background: "rgba(7,17,32,0.06)",
            border: "0.5px solid rgba(7,17,32,0.15)",
            color: "rgba(7,17,32,0.45)",
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#071120" }} />
          Prova social
        </div>

        {/* H2 */}
        <h2
          className="font-black leading-[1.08] mb-4 max-w-2xl mx-auto"
          style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", color: "#071120" }}
        >
          O que os pacientes dizem sobre o{" "}
          <span
            style={{
              display: "inline-block",
              background: "#071120",
              color: "#f5c518",
              padding: "1px 10px",
              borderRadius: 5,
              lineHeight: 1.25,
            }}
          >
            Dr. Érico Diógenes
          </span>
        </h2>

        {/* Subtítulo */}
        <p
          className="text-sm leading-relaxed max-w-md mx-auto"
          style={{ color: "rgba(7,17,32,0.45)" }}
        >
          Avaliações reais do Google —{" "}
          <strong style={{ color: "#071120" }}>pacientes de Fortaleza e região</strong>
        </p>

        {/* Estrelas */}
        <div className="flex items-center justify-center gap-1 mt-4">
          {[...Array(5)].map((_, i) => (
            <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="#f5c518">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z"/>
            </svg>
          ))}
          <span
            className="font-bold ml-2"
            style={{ fontSize: 13, color: "rgba(7,17,32,0.5)" }}
          >
            5,0 · Google
          </span>
        </div>
      </div>

      {/* ── Google Reviews ── */}
      <div className="mt-2" data-aos="fade-up" data-aos-delay="100">
        <GoogleReviews placeId="ChIJ-RHmBn5IxwcRyI2kNHjMWKA" />
      </div>

      {/* ── Selos de autoridade ── */}
      <div
        className="mt-12 lg:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {SELOS.map(({ icon, num, label }) => (
          <div
            key={label}
            className="flex items-center gap-4 rounded-2xl px-6 py-5"
            style={{
              background: "#071120",
              border: "0.5px solid rgba(245,197,24,0.2)",
            }}
          >
            {/* Ícone */}
            <div
              className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl"
              style={{
                background: "rgba(245,197,24,0.12)",
                border: "0.5px solid rgba(245,197,24,0.3)",
                color: "#f5c518",
              }}
            >
              {icon}
            </div>

            {/* Texto */}
            <div>
              <p
                className="font-black leading-none text-white"
                style={{ fontSize: "clamp(1.1rem, 1.8vw, 1.4rem)" }}
              >
                {num}
              </p>
              <p
                className="text-xs mt-1 leading-tight"
                style={{ color: "rgba(255,255,255,0.45)" }}
              >
                {label}
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>

    {/* Linha rodapé */}
    <div
      className="absolute bottom-0 left-0 right-0 h-px"
      style={{
        background:
          "linear-gradient(to right, transparent, rgba(7,17,32,0.12) 30%, rgba(7,17,32,0.12) 70%, transparent)",
      }}
    />
  </section>
);

export default ProvaSocialSection;