import WhatsAppIcon from "./WhatsAppIcon";
import { WA_LINK } from "../constants";

const beneficios = [
  "Remove o tecido que obstrói com precisão milimétrica",
  "Praticamente elimina o risco de recorrência",
  "Preserva a função sexual e o controle urinário",
  "Alta hospitalar em 24h a 48h",
  "Retorno às atividades em poucos dias",
];

const SolucaoSection = () => (
  <section
    id="solucao"
    className="relative overflow-hidden"
    style={{
      backgroundColor: "#071120",
      fontFamily: "'Montserrat', sans-serif",
    }}
  >
    {/* ── Grade de fundo com listras brancas ── */}
    <div
      className="pointer-events-none absolute inset-0"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
        backgroundSize: "36px 36px",
      }}
    />

    {/* ── Glow dourado central ── */}
    <div
      className="pointer-events-none absolute inset-0"
      style={{
        background:
          "radial-gradient(ellipse 60% 50% at 60% 50%, rgba(245,197,24,0.05) 0%, transparent 70%)",
      }}
    />

    {/* ── Linha dourada no topo ── */}
    <div
      className="absolute top-0 left-0 right-0 h-[3px]"
      style={{
        background:
          "linear-gradient(to right, transparent, #f5c518 20%, #f5c518 80%, transparent)",
      }}
    />

    <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-20 lg:py-28">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* ══════════════════════════
            ESQUERDA — cards de detalhe
        ══════════════════════════ */}
        <div className="order-2 lg:order-1 flex flex-col gap-4" data-aos="fade-right">

          {/* Card principal — destaque */}
          <div
            className="relative overflow-hidden rounded-2xl p-6"
            style={{
              background: "rgba(245,197,24,0.07)",
              border: "0.5px solid rgba(245,197,24,0.25)",
            }}
            data-aos="fade-up" data-aos-delay="100"
          >
            {/* Ícone H */}
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center mb-4"
              style={{ background: "#f5c518" }}
            >
              <span style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 900, fontSize: 18, color: "#071120" }}>H</span>
            </div>
            <h3
              className="font-black text-white leading-snug mb-2"
              style={{ fontSize: "clamp(1rem, 1.5vw, 1.2rem)" }}
            >
              Precisão milimétrica com laser de Hólmio
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
              O HoLEP utiliza um laser de alta energia para enuclear o tecido prostático com precisão cirúrgica, sem cortes externos e com mínimo sangramento.
            </p>
          </div>

          {/* Card 2 */}
          <div
            className="rounded-2xl p-6"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "0.5px solid rgba(255,255,255,0.08)",
            }}
            data-aos="fade-up" data-aos-delay="200"
          >
            <h3
              className="font-bold text-white leading-snug mb-2"
              style={{ fontSize: "clamp(0.9rem, 1.3vw, 1.05rem)" }}
            >
              Resultado definitivo — sem recorrência
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
              Diferente dos remédios, o HoLEP resolve o problema na origem. O tecido removido não volta a crescer, garantindo liberdade duradoura.
            </p>
          </div>

          {/* Card 3 */}
          <div
            className="rounded-2xl p-6"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "0.5px solid rgba(255,255,255,0.08)",
            }}
            data-aos="fade-up" data-aos-delay="300"
          >
            <h3
              className="font-bold text-white leading-snug mb-2"
              style={{ fontSize: "clamp(0.9rem, 1.3vw, 1.05rem)" }}
            >
              Alta em 24h a 48h — retorno rápido à vida normal
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
              Procedimento minimamente invasivo, sem cortes externos. O paciente retorna às atividades em poucos dias com qualidade de vida restaurada.
            </p>
          </div>

        </div>

        {/* ══════════════════════════
            DIREITA — copy principal
        ══════════════════════════ */}
        <div className="order-1 lg:order-2" data-aos="fade-left" data-aos-delay="100">

          {/* Eyebrow */}
          <div
            className="inline-flex items-center gap-2 text-[0.6rem] font-bold tracking-[0.15em] uppercase px-3 py-1.5 rounded-full mb-6"
            style={{
              background: "rgba(245,197,24,0.08)",
              border: "0.5px solid rgba(245,197,24,0.25)",
              color: "rgba(245,197,24,0.75)",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#f5c518" }} />
            A solução definitiva
          </div>

          {/* H2 */}
          <h2
            className="font-black text-white leading-[1.08] mb-6"
            style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}
          >
            HoLEP em Fortaleza:{" "}
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
              o padrão-ouro
            </span>{" "}
            mundial que poucos urologistas dominam
          </h2>

          {/* Texto */}
          <p
            className="leading-relaxed mb-8"
            style={{ fontSize: "clamp(0.82rem, 1.1vw, 0.95rem)", color: "rgba(255,255,255,0.55)" }}
          >
            O HoLEP é hoje o tratamento mais avançado e eficaz para obstrução urinária causada pelo crescimento da próstata — e o{" "}
            <strong className="text-white">Dr. Érico Diógenes</strong> é um dos poucos especialistas em Fortaleza a dominar essa técnica.
          </p>

          {/* Lista de benefícios */}
          <ul className="flex flex-col mb-8" style={{ gap: "10px" }}>
            {beneficios.map((item, i) => (
              <li
                key={item}
                className="flex items-start gap-3"
                data-aos="fade-up"
                data-aos-delay={i * 70}
              >
                <span
                  className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center"
                  style={{
                    background: "#f5c518",
                    minWidth: "1.25rem",
                  }}
                >
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                    <path d="M1 4L3.5 6.5L9 1" stroke="#071120" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span
                  className="font-semibold leading-snug"
                  style={{ fontSize: "clamp(0.8rem, 1.05vw, 0.9rem)", color: "rgba(255,255,255,0.85)" }}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>

          {/* Frase de impacto */}
          <div
            className="relative rounded-xl px-5 py-4 mb-8"
            style={{
              background: "rgba(245,197,24,0.06)",
              border: "0.5px solid rgba(245,197,24,0.2)",
            }}
          >
            {/* Linha de acento esquerda */}
            <div
              className="absolute left-0 top-4 bottom-4 w-[3px] rounded-full"
              style={{
                background:
                  "linear-gradient(to bottom, transparent, #f5c518 20%, #f5c518 80%, transparent)",
              }}
            />
            <p
              className="font-black text-white leading-snug"
              style={{ fontSize: "clamp(0.9rem, 1.3vw, 1.05rem)", paddingLeft: "1rem" }}
            >
              Você volta a dormir a noite toda.{" "}
              <span style={{ color: "#f5c518" }}>Volta a viver sem limitações.</span>
            </p>
          </div>

          {/* CTA */}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 font-bold text-[.7rem] tracking-[.1em] uppercase px-7 py-4 rounded-full transition-all duration-200 hover:-translate-y-0.5"
            style={{
              background: "#f5c518",
              color: "#071120",
              boxShadow: "0 8px 32px rgba(245,197,24,0.25)",
            }}
          >
            <WhatsAppIcon size={15} />
            Quero saber se sou candidato ao HoLEP
          </a>

        </div>

      </div>
    </div>

    {/* ── Linha dourada no fundo ── */}
    <div
      className="absolute bottom-0 left-0 right-0 h-px"
      style={{
        background:
          "linear-gradient(to right, transparent, rgba(245,197,24,0.15) 30%, rgba(245,197,24,0.15) 70%, transparent)",
      }}
    />

  </section>
);

export default SolucaoSection;