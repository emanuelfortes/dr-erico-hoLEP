import { useState } from "react";

const faqs = [
  {
    question: "O robô faz a cirurgia sozinho?",
    answer:
      "Não. O procedimento é 100% controlado pelo Dr. Érico. O robô apenas amplia precisão e visão, oferecendo instrumentos com amplitude de movimentos superior e visualização 3D ampliada.",
  },
  {
    question: "Qual o tempo de recuperação?",
    answer:
      "Alta entre 24h e 48h, com retorno gradual em poucos dias. A cirurgia robótica proporciona recuperação muito mais rápida que técnicas tradicionais.",
  },
  {
    question: "Existe risco de impotência ou incontinência?",
    answer:
      "Sim, mas a técnica robótica reduz drasticamente esses riscos comparada às técnicas convencionais, graças à maior precisão dos movimentos e preservação das estruturas.",
  },
  {
    question: "O plano de saúde cobre?",
    answer:
      "Grande parte cobre hospital e internação. A equipe avalia cada caso individualmente e orienta sobre as coberturas disponíveis para o seu plano.",
  },
];

const montserrat: React.CSSProperties = { fontFamily: "'Montserrat', sans-serif" };

const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-[#0f1f3d] py-24 px-6 lg:px-16" style={montserrat}>
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="w-12 h-[3px] bg-[#f5c518] mx-auto mb-8" />
          <h2
            className="text-3xl lg:text-4xl font-black text-white leading-tight"
            style={montserrat}
          >
            Dúvidas frequentes sobre
            <br />
            <span className="text-[#f5c518]">cirurgia robótica</span>
          </h2>
        </div>

        {/* Accordion */}
        <div className="max-w-3xl mx-auto flex flex-col gap-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={faq.question}
                className={`border rounded-2xl overflow-hidden transition-colors duration-200 ${
                  isOpen
                    ? "border-[#f5c518]/30 bg-[#f5c518]/[0.03]"
                    : "border-white/[0.08] bg-white/[0.02]"
                }`}
              >
                <button
                  className="w-full flex items-center justify-between gap-4 px-7 py-5 text-left"
                  style={montserrat}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span className="font-semibold text-white text-[0.96rem]" style={montserrat}>
                    {faq.question}
                  </span>
                  <span
                    className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-xs transition-all duration-300 ${
                      isOpen
                        ? "bg-[#f5c518] text-[#0a1628] rotate-180"
                        : "bg-[#f5c518]/10 text-[#f5c518]"
                    }`}
                  >
                    ▼
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-48 pb-5" : "max-h-0"
                  }`}
                >
                  <p className="px-7 text-[#8a9bb5] text-sm leading-relaxed" style={montserrat}>
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;