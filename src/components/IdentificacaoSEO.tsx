import imgFoto from "../assets/laser.webp";

const SYMPTOMS = [
  { n: "01", text: "Acorda 2, 3 ou mais vezes por noite para urinar" },
  { n: "02", text: "Sente que a bexiga nunca esvazia completamente" },
  { n: "03", text: "O jato urinário é fraco, lento ou interrompido" },
  { n: "04", text: "Remédios ajudam, mas o alívio é parcial ou temporário" },
  { n: "05", text: "Sono ruim, cansaço e qualidade de vida caindo" },
];

export default function IdentificacaoSEO() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        fontFamily: "'Montserrat', sans-serif",
        background: "#071120",
      }}
    >
      {/* ── Grade fina com listras azul ── */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />
      {/* Vinheta suave nas bordas */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 90% 80% at 50% 50%, transparent 40%, rgba(0,0,0,0.25) 100%)",
        }}
      />

      {/* ══════════════════════════════════════
          BLOCO SUPERIOR — título
      ══════════════════════════════════════ */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 pt-16 lg:pt-24 pb-8 lg:pb-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">

          {/* Título */}
          <div className="max-w-xl">
            <p
              className="text-[0.58rem] font-black tracking-[0.28em] uppercase mb-3"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              Diagnóstico rápido
            </p>
            <h2
              className="font-black leading-[1.04]"
              style={{ fontSize: "clamp(2rem, 4.2vw, 3.2rem)", color: "#ffffff" }}
            >
              Você reconhece<br />
              algum desses{" "}
              <span style={{ position: "relative", display: "inline-block" }}>
                sintomas?
                <span
                  style={{
                    position: "absolute",
                    bottom: 3,
                    left: 0,
                    right: 0,
                    height: 5,
                    background: "#f5c518",
                    borderRadius: 3,
                    zIndex: -1,
                  }}
                />
              </span>
            </h2>
          </div>

          {/* Subtexto lateral */}
          <p
            className="text-xs leading-relaxed max-w-[240px] lg:text-right"
            style={{ color: "rgba(255,255,255,0.42)" }}
          >
            Se você se identificou com{" "}
            <strong style={{ color: "#ffffff" }}>pelo menos um</strong>,
            continue lendo — existe uma saída definitiva.
          </p>
        </div>
      </div>

      {/* ══════════════════════════════════════
          BLOCO PRINCIPAL — lista + foto
      ══════════════════════════════════════ */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-6 lg:gap-12 items-end">

          {/* Lista densa */}
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
            {SYMPTOMS.map(({ n, text }, i) => (
              <div
                key={n}
                className="flex items-center gap-4 group cursor-default"
                data-aos="fade-up"
                data-aos-delay={i * 60}
                style={{
                  padding: "14px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.08)",
                  transition: "background 0.15s",
                }}
              >
                {/* Número */}
                <span
                  className="flex-shrink-0 font-black tabular-nums"
                  style={{
                    fontSize: "clamp(0.95rem, 1.6vw, 1.25rem)",
                    color: "rgba(255,255,255,0.15)",
                    minWidth: "2.2rem",
                    lineHeight: 1,
                  }}
                >
                  {n}
                </span>

                {/* Divisor vertical */}
                <span
                  className="flex-shrink-0 w-px self-stretch"
                  style={{ background: "rgba(255,255,255,0.1)" }}
                />

                {/* Texto */}
                <span
                  className="font-semibold leading-tight flex-1"
                  style={{
                    fontSize: "clamp(0.82rem, 1.1vw, 0.95rem)",
                    color: "rgba(255,255,255,0.75)",
                  }}
                >
                  {text}
                </span>

                {/* Chevron dourado no hover */}
                <svg
                  width="16" height="16" viewBox="0 0 16 16" fill="none"
                  className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-150"
                >
                  <path d="M5.5 3.5L10.5 8L5.5 12.5" stroke="#f5c518" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            ))}
          </div>

          {/* Foto — sem padding no fundo, encosta na base */}
          <div
            className="relative self-end"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            {/* Pedestal dourado */}
            <div
              className="absolute bottom-0 left-6 right-6 rounded-t-2xl"
              style={{
                height: "90%",
                background: "linear-gradient(to top, rgba(245,197,24,0.3) 0%, rgba(245,197,24,0.08) 100%)",
              }}
            />
            <img
              src={imgFoto}
              alt="Dr. Érico Diógenes — Urologista em Fortaleza"
              className="relative w-full object-cover object-center rounded-2xl"
              style={{ aspectRatio: "4/5", width: "100%" }}
            />
            {/* Badge sobre a foto */}
            <div
              className="absolute bottom-4 left-4 right-4 flex items-center gap-3 rounded-xl px-4 py-3"
              style={{
                background: "rgba(7,17,32,0.82)",
                border: "0.5px solid rgba(245,197,24,0.25)",
                backdropFilter: "blur(8px)",
              }}
            >
              <div
                className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center"
                style={{ background: "#f5c518" }}
              >
                <span style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 900, fontSize: 12, color: "#071120" }}>H</span>
              </div>
              <div>
                <p className="font-bold text-white leading-none" style={{ fontSize: 10 }}>Dr. Érico Diógenes</p>
                <p className="font-medium leading-tight mt-0.5" style={{ fontSize: 9, color: "rgba(245,197,24,0.7)" }}>
                  Especialista em HoLEP · Fortaleza
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ══════════════════════════════════════
          FAIXA INFERIOR — branca com listras
      ══════════════════════════════════════ */}
      <div
        className="relative z-10 mt-10 lg:mt-14"
        style={{ background: "#f4f2ed" }}
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
        {/* Linha dourada topo */}
        <div
          className="absolute top-0 left-0 right-0 h-[3px]"
          style={{
            background: "linear-gradient(to right, transparent, #f5c518 20%, #f5c518 80%, transparent)",
          }}
        />

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-8 lg:py-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5">

          <div className="max-w-2xl">
            <p
              className="font-black leading-snug mb-1.5"
              style={{ fontSize: "clamp(0.95rem, 1.6vw, 1.2rem)", color: "#071120" }}
            >
              Isso não é normal. Não é "coisa da idade".{" "}
              <span style={{ color: "#d4a800" }}>E tem solução.</span>
            </p>
            <p className="text-xs leading-relaxed" style={{ color: "rgba(7,17,32,0.45)" }}>
              Uma solução <strong style={{ color: "#071120" }}>definitiva, segura</strong> e com{" "}
              <strong style={{ color: "#071120" }}>tecnologia de ponta</strong> — disponível aqui em Fortaleza.
            </p>
          </div>

          <div className="flex gap-8 flex-shrink-0">
            {[
              { num: "21+", label: "anos\nde experiência" },
              { num: "HoLEP", label: "padrão-ouro\nmundial" },
            ].map(({ num, label }) => (
              <div key={num}>
                <div
                  className="font-black leading-none"
                  style={{ fontSize: "clamp(1.2rem, 1.8vw, 1.6rem)", color: "#071120" }}
                >
                  {num}
                </div>
                <div
                  className="text-[0.6rem] mt-1 leading-snug whitespace-pre-line"
                  style={{ color: "rgba(7,17,32,0.38)" }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

    </section>
  );
}