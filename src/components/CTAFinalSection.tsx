import WhatsAppIcon from "./WhatsAppIcon";
import { WA_LINK } from "../constants";
import imgLogo from "../assets/logo_1.png";

const montserrat: React.CSSProperties = { fontFamily: "'Montserrat', sans-serif" };

/* ══════════════════════════════════════
   CTA FINAL
══════════════════════════════════════ */
export const CTAFinalSection = () => (
  <section
    id="contato"
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

    {/* Glow dourado centralizado */}
    <div
      className="pointer-events-none absolute inset-0"
      style={{
        background:
          "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(245,197,24,0.07) 0%, transparent 70%)",
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

    <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-24 lg:py-32">
      <div className="flex flex-col items-center text-center max-w-2xl mx-auto gap-8">

        {/* Logo */}
        <img
          src={imgLogo}
          alt="Dr. Érico Diógenes — Urologista"
          className="h-12 sm:h-14 w-auto"
          style={{ filter: "brightness(0) invert(1)" }}
        />

        {/* Eyebrow */}
        <div
          className="inline-flex items-center gap-2 text-[0.6rem] font-bold tracking-[0.15em] uppercase px-3 py-1.5 rounded-full"
          style={{
            background: "rgba(245,197,24,0.08)",
            border: "0.5px solid rgba(245,197,24,0.25)",
            color: "rgba(245,197,24,0.75)",
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#f5c518" }} />
          Agende sua avaliação
        </div>

        {/* H2 */}
        <h2
          className="font-black text-white leading-[1.06]"
          style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
        >
          Dê o primeiro passo{" "}
          <span
            style={{
              display: "inline-block",
              background: "#f5c518",
              color: "#071120",
              padding: "2px 12px",
              borderRadius: 6,
              lineHeight: 1.25,
            }}
          >
            hoje.
          </span>
        </h2>

        {/* Texto */}
        <p
          className="text-sm leading-relaxed max-w-lg"
          style={{ color: "rgba(255,255,255,0.5)" }}
        >
          Minha equipe está pronta para encontrar o melhor horário para você em Fortaleza.{" "}
          <strong className="text-white">Atendimento rápido, discreto e humanizado</strong>{" "}
          via WhatsApp.
        </p>

        {/* Divisor decorativo */}
        <div className="flex items-center gap-4 w-full max-w-xs">
          <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.08)" }} />
          <div
            className="w-2 h-2 rounded-full"
            style={{ background: "#f5c518" }}
          />
          <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.08)" }} />
        </div>

        {/* CTA principal */}
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 font-black text-sm tracking-[0.1em] uppercase px-10 py-5 rounded-full transition-all duration-200 hover:-translate-y-1"
          style={{
            background: "#f5c518",
            color: "#071120",
            boxShadow: "0 12px 48px rgba(245,197,24,0.3)",
            fontSize: "clamp(0.65rem, 1vw, 0.75rem)",
          }}
        >
          <WhatsAppIcon size={18} />
          👉 Quero agendar minha avaliação com Dr. Érico
        </a>

        {/* Hint */}
        <p style={{ fontSize: 11, color: "rgba(255,255,255,0.22)" }}>
          Atendimento via WhatsApp — rápido e discreto
        </p>

      </div>
    </div>
  </section>
);

/* ══════════════════════════════════════
   FOOTER
══════════════════════════════════════ */
export const Footer = () => (
  <footer
    className="relative overflow-hidden"
    style={{ ...montserrat, background: "#040c18" }}
  >
    {/* Linha topo */}
    <div
      className="absolute top-0 left-0 right-0 h-px"
      style={{
        background:
          "linear-gradient(to right, transparent, rgba(245,197,24,0.2) 30%, rgba(245,197,24,0.2) 70%, transparent)",
      }}
    />

    {/* Grade muito sutil */}
    <div
      className="pointer-events-none absolute inset-0"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)",
        backgroundSize: "36px 36px",
      }}
    />

    <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">

      {/* Bloco principal */}
      <div
        className="grid grid-cols-1 lg:grid-cols-[1fr_auto_auto] gap-10 lg:gap-16 items-start py-12 lg:py-16"
        style={{ borderBottom: "0.5px solid rgba(255,255,255,0.06)" }}
      >

        {/* Identidade */}
        <div className="flex flex-col gap-4 max-w-xs">
          <img
            src={imgLogo}
            alt="Dr. Érico Diógenes"
            style={{ height: 44, width: "auto", maxWidth: 200, objectFit: "contain", opacity: 0.9 }}
          />
          <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.35)" }}>
            Urologista em Fortaleza especialista em HoLEP e cirurgia robótica. Mais de 21 anos dedicados à excelência urológica.
          </p>
          {/* CRM */}
          <p style={{ fontSize: 10, color: "rgba(255,255,255,0.2)", letterSpacing: "0.08em" }}>
            CRM-CE · Membro SBU
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-3">
          <p
            className="text-[0.6rem] font-bold tracking-[0.15em] uppercase mb-2"
            style={{ color: "rgba(245,197,24,0.6)" }}
          >
            Navegação
          </p>
          {[
            ["#hero",         "Início"      ],
            ["#solucao",      "O HoLEP"     ],
            ["#sobre",        "Dr. Érico"   ],
            ["#prova-social", "Avaliações"  ],
            ["#faq",          "Perguntas"   ],
            ["#contato",      "Contato"     ],
          ].map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="text-xs transition-colors duration-200 hover:text-white w-fit"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              {label}
            </a>
          ))}
        </div>

        {/* Contato */}
        <div className="flex flex-col gap-3">
          <p
            className="text-[0.6rem] font-bold tracking-[0.15em] uppercase mb-2"
            style={{ color: "rgba(245,197,24,0.6)" }}
          >
            Contato
          </p>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
            Fortaleza — CE
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-semibold transition-colors duration-200 hover:text-white w-fit"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            <WhatsAppIcon size={13} />
            WhatsApp
          </a>
          <a
            href="https://www.instagram.com/agenciaacev/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-semibold transition-colors duration-200 hover:text-white w-fit"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
            </svg>
            Instagram
          </a>

          {/* Selos */}
          <div className="flex flex-col gap-2 mt-3">
            {[
              { num: "+40", label: "avaliações Google" },
              { num: "5,0", label: "nota média" },
            ].map(({ num, label }) => (
              <div key={num} className="flex items-center gap-2">
                <span
                  className="font-black"
                  style={{ fontSize: 13, color: "#f5c518" }}
                >
                  {num}
                </span>
                <span style={{ fontSize: 10, color: "rgba(255,255,255,0.3)" }}>{label}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Rodapé inferior */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 py-6">
        <p style={{ fontSize: 10, color: "rgba(255,255,255,0.2)" }}>
          © {new Date().getFullYear()} Dr. Érico Diógenes · Todos os direitos reservados
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <p style={{ fontSize: 10, color: "rgba(255,255,255,0.15)" }}>
            As informações deste site têm caráter informativo e não substituem consulta médica.
          </p>
          <span style={{ fontSize: 10, color: "rgba(255,255,255,0.08)" }} className="hidden sm:block">·</span>
          <p style={{ fontSize: 10, color: "rgba(255,255,255,0.18)" }}>
            Desenvolvido por{" "}
            <a href="https://www.instagram.com/agenciaacev/" target="_blank" rel="noopener noreferrer" style={{ color: "rgba(245,197,24,0.5)", fontWeight: 700, textDecoration: "none" }}>Agência ACEV</a>
          </p>
        </div>
      </div>

    </div>
  </footer>
);