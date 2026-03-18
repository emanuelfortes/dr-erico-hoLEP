import imgFoto from "../assets/dr-erico-urologista.webp";

export default function IdentificacaoSEO() {
  return (
    <section
      className="relative py-16 lg:py-24 bg-[#071120] overflow-hidden"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(245,197,24,0.04) 0%, transparent 70%)" }} />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_520px] gap-6 lg:gap-12 items-center">

          {/* CONTEÚDO — esquerda */}
          <div className="order-1" data-aos="fade-right" data-aos-delay="100">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-black leading-[1.15] text-white mb-5">
              Procurando um urologista em Fortaleza com{" "}
              <em className="not-italic text-[#f5c518]">alta tecnologia e confiança?</em>
            </h2>

            <p className="text-white/60 text-sm leading-relaxed mb-7">
              Se você está buscando um urologista em Fortaleza para tratar sua condição com segurança e o que há de mais moderno na medicina, provavelmente está preocupado com:
            </p>

            <ul className="space-y-3 mb-7">
              {[
                "Dor no pós-operatório",
                "Tempo de recuperação",
                "Riscos de sequelas",
                "Escolher o profissional certo",
              ].map((item, i) => (
                <li key={item} className="flex items-center gap-3" data-aos="fade-up" data-aos-delay={200 + i * 80}>
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#f5c518]/10 border border-[#f5c518]/30 flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#f5c518]" />
                  </span>
                  <span className="text-white font-semibold text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <div className="border-t border-white/[0.08] pt-7 space-y-2" data-aos="fade-up" data-aos-delay="500">
              <p className="text-white font-bold text-base leading-snug">E essa preocupação é totalmente válida.</p>
              <p className="text-white/60 text-sm leading-relaxed">A escolha do especialista impacta diretamente no seu resultado.</p>
            </div>
          </div>

          {/* FOTO — direita */}
          <div className="flex justify-center lg:block order-2" data-aos="fade-left" data-aos-delay="200">
            <img
              src={imgFoto}
              alt="Dr. Érico Diógenes — Urologista em Fortaleza"
              className="w-72 sm:w-96 lg:w-full rounded-2xl object-cover object-top aspect-[3/4]"
            />
          </div>

        </div>
      </div>
    </section>
  );
}