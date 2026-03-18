import { useState } from "react";
import WhatsAppIcon from "./WhatsAppIcon";
import { WA_LINK } from "../constants";

const montserrat: React.CSSProperties = { fontFamily: "'Montserrat Variable', sans-serif" };

const FAQS = [
  {
    n: "01",
    q: "O HoLEP é feito com robô?",
    a: "Não. O HoLEP é realizado com laser de alta precisão, sem uso de robô. Todo o procedimento é feito por via natural (uretra), sem cortes externos.",
  },
  {
    n: "02",
    q: "Qual o tempo de recuperação?",
    a: "A maioria dos pacientes recebe alta entre 24h e 48h. Em poucos dias já é possível retomar atividades leves, com melhora progressiva do fluxo urinário.",
  },
  {
    n: "03",
    q: "O procedimento dói?",
    a: "Não. A cirurgia é feita com anestesia (geral ou raquidiana), e o desconforto no pós-operatório costuma ser leve e controlado.",
  },
  {
    n: "04",
    q: "Existe risco de impotência ou incontinência?",
    a: "Como em qualquer cirurgia, existe risco. Porém, o HoLEP foi desenvolvido para minimizar esses efeitos, preservando ao máximo os nervos responsáveis pela função urinária e sexual.",
  },
  {
    n: "05",
    q: "O HoLEP é melhor que a cirurgia tradicional?",
    a: "Para muitos casos, sim. Ele permite tratar próstatas grandes com menos sangramento, menor tempo de internação e recuperação mais rápida.",
  },
  {
    n: "06",
    q: "Vou precisar de sonda?",
    a: "Sim, geralmente por um curto período (1 a 2 dias), sendo retirada ainda durante a internação na maioria dos casos.",
  },
  {
    n: "07",
    q: "O plano de saúde cobre?",
    a: "Na maioria dos casos, cobre os custos hospitalares e internação. Equipamentos e honorários podem variar — a equipe médica analisa cada caso individualmente.",
  },
];

const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative overflow-hidden"
      style={{ ...montserrat, backgroundColor: "#ffffff" }}
    >

      {/* Linha topo dourada */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px]"
        style={{
          background:
            "linear-gradient(to right, transparent, #f5c518 20%, #f5c518 80%, transparent)",
        }}
      />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 lg:gap-20 items-start">

          {/* ══════════════════════
              ESQUERDA — FAQ
          ══════════════════════ */}
          <div data-aos="fade-right">

            {/* Eyebrow */}
            <div
              className="inline-flex items-center gap-2 text-[0.6rem] font-bold tracking-[0.15em] uppercase px-3 py-1.5 rounded-full mb-6"
              style={{
                background: "rgba(7,17,32,0.06)",
                border: "0.5px solid rgba(7,17,32,0.15)",
                color: "rgba(7,17,32,0.4)",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#071120" }} />
              Tire suas dúvidas
            </div>

            {/* H2 */}
            <h2
              className="font-black leading-[1.08] mb-3"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", color: "#071120" }}
            >
              Perguntas{" "}
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
                frequentes
              </span>
            </h2>
            <p
              className="text-sm leading-relaxed mb-10"
              style={{ color: "rgba(7,17,32,0.45)", maxWidth: 440 }}
            >
              Respondidas pelo Dr. Érico — para que você tome sua decisão com total segurança e clareza.
            </p>

            {/* Acordeão */}
            <div style={{ borderTop: "1px solid rgba(7,17,32,0.08)" }}>
              {FAQS.map((item, i) => {
                const isOpen = open === i;
                return (
                  <div
                    key={item.n}
                    className="group cursor-pointer"
                    onClick={() => setOpen(isOpen ? null : i)}
                    style={{ borderBottom: "1px solid rgba(7,17,32,0.08)" }}
                  >
                    <div className="flex items-center gap-5 py-4">

                      {/* Número */}
                      <span
                        className="flex-shrink-0 font-black tabular-nums"
                        style={{
                          fontSize: "clamp(0.85rem, 1.3vw, 1rem)",
                          color: isOpen ? "#f5c518" : "rgba(7,17,32,0.2)",
                          minWidth: "2rem",
                          transition: "color 0.2s",
                        }}
                      >
                        {item.n}
                      </span>

                      {/* Divisor */}
                      <span
                        className="flex-shrink-0 w-px self-stretch"
                        style={{ background: "rgba(7,17,32,0.1)" }}
                      />

                      {/* Pergunta */}
                      <p
                        className="flex-1 font-bold leading-snug transition-colors duration-200"
                        style={{
                          fontSize: "clamp(0.82rem, 1.1vw, 0.95rem)",
                          color: isOpen ? "#071120" : "rgba(7,17,32,0.65)",
                        }}
                      >
                        {item.q}
                      </p>

                      {/* Toggle */}
                      <div
                        className="flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-200"
                        style={{
                          background: isOpen ? "#071120" : "rgba(7,17,32,0.06)",
                          border: isOpen ? "none" : "0.5px solid rgba(7,17,32,0.12)",
                          transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                        }}
                      >
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path
                            d="M6 2v8M2 6h8"
                            stroke={isOpen ? "#f5c518" : "rgba(7,17,32,0.5)"}
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Resposta */}
                    <div
                      style={{
                        maxHeight: isOpen ? 200 : 0,
                        overflow: "hidden",
                        transition: "max-height 0.35s cubic-bezier(0.4,0,0.2,1)",
                      }}
                    >
                      <p
                        className="text-sm leading-relaxed pb-5"
                        style={{
                          color: "rgba(7,17,32,0.55)",
                          paddingLeft: "calc(2rem + 1px + 1.25rem)",
                        }}
                      >
                        {item.a}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ══════════════════════
              DIREITA — CTA sticky
          ══════════════════════ */}
          <div
            className="lg:sticky lg:top-24 flex flex-col gap-5"
            data-aos="fade-left"
            data-aos-delay="150"
          >

            {/* Card principal */}
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                background: "#071120",
                border: "0.5px solid rgba(245,197,24,0.2)",
              }}
            >
              {/* Faixa dourada topo */}
              <div style={{ height: 4, background: "#f5c518" }} />

              <div className="p-7 flex flex-col gap-5">

                {/* Ícone H */}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{ background: "#f5c518" }}
                >
                  <span style={{ ...montserrat, fontWeight: 900, fontSize: 20, color: "#071120" }}>H</span>
                </div>

                <div>
                  <p
                    className="font-black text-white leading-snug mb-2"
                    style={{ fontSize: "clamp(1rem, 1.6vw, 1.25rem)" }}
                  >
                    Ainda tem dúvidas?
                    <br />
                    <span style={{ color: "#f5c518" }}>Fale comigo agora.</span>
                  </p>
                  <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
                    Minha equipe responde via WhatsApp de forma rápida, discreta e sem compromisso.
                  </p>
                </div>

                {/* Checklist */}
                <ul className="flex flex-col gap-2">
                  {[
                    "Agendamento direto, sem filas",
                    "Atendimento humanizado",
                    "Avaliação individual do seu caso",
                  ].map((it) => (
                    <li key={it} className="flex items-start gap-3">
                      <span
                        className="flex-shrink-0 mt-0.5 w-4 h-4 rounded-full flex items-center justify-center"
                        style={{
                          background: "rgba(245,197,24,0.12)",
                          border: "0.5px solid rgba(245,197,24,0.3)",
                        }}
                      >
                        <svg width="8" height="6" viewBox="0 0 10 8" fill="none">
                          <path d="M1 4L3.5 6.5L9 1" stroke="#f5c518" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <span className="text-xs font-medium" style={{ color: "rgba(255,255,255,0.65)" }}>{it}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 font-bold text-[.68rem] tracking-[.1em] uppercase px-6 py-4 rounded-full transition-all duration-200 hover:-translate-y-0.5"
                  style={{
                    background: "#f5c518",
                    color: "#071120",
                    boxShadow: "0 8px 32px rgba(245,197,24,0.2)",
                  }}
                >
                  <WhatsAppIcon size={14} />
                  Quero ser candidato ao HoLEP
                </a>

                <p className="text-center" style={{ fontSize: 10, color: "rgba(255,255,255,0.2)" }}>
                  Atendimento via WhatsApp — rápido e discreto
                </p>
              </div>
            </div>

            {/* Mini card de urgência */}
            <div
              className="rounded-2xl px-5 py-4 flex items-start gap-4"
              style={{
                background: "rgba(7,17,32,0.06)",
                border: "0.5px solid rgba(7,17,32,0.1)",
              }}
            >
              <div
                className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center mt-0.5"
                style={{
                  background: "rgba(245,197,24,0.1)",
                  border: "0.5px solid rgba(245,197,24,0.25)",
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f5c518" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/>
                </svg>
              </div>
              <div>
                <p className="font-bold text-xs mb-1" style={{ color: "#071120" }}>
                  Não deixe para depois.
                </p>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(7,17,32,0.45)" }}>
                  Sintomas urinários tendem a piorar com o tempo. Quanto mais cedo o diagnóstico, mais simples o tratamento.
                </p>
              </div>
            </div>

          </div>
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
};

export default FAQSection;