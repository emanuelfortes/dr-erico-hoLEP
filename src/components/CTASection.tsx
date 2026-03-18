const DoctorSVG = () => (
  <svg className="w-[60%] opacity-25" viewBox="0 0 200 280" fill="none">
    <ellipse cx="100" cy="60" rx="45" ry="55" fill="white" />
    <path d="M10 280 C10 180 40 160 100 155 C160 160 190 180 190 280Z" fill="white" />
    <rect x="75" y="130" width="50" height="40" rx="4" fill="white" fillOpacity="0.6" />
  </svg>
);

const CheckIcon = () => (
  <svg
    className="w-5 h-5 text-[#f5c518] flex-shrink-0 mt-0.5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const credentials = [
  "Fellowship em Cirurgia Robótica – Hospital Israelita Albert Einstein",
  "Residência Médica – Hospital Geral de Fortaleza (HGF)",
  "Graduação – Universidade Federal do Ceará (UFC)",
  "Membro Titular da Sociedade Brasileira de Urologia",
];

const CTASection = () => {
  return (
    <section id="sobre" className="bg-[#0a1628] py-24 px-6 lg:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

        {/* ── LEFT: image ── */}
        <div className="relative">
          <div
            className="w-full rounded-3xl flex items-center justify-center overflow-hidden"
            style={{
              aspectRatio: "4/5",
              background: "linear-gradient(135deg, #162447 0%, #0a1628 100%)",
            }}
          >
            <DoctorSVG />
          </div>

          {/* Gold accent card */}
          <div className="absolute -bottom-5 -right-5 w-44 h-44 rounded-2xl bg-[#f5c518] flex flex-col items-center justify-center gap-1 shadow-[0_20px_60px_rgba(245,197,24,0.3)]">
            <span
              className="text-[#0a1628] text-5xl font-black leading-none"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              21
            </span>
            <span className="text-[#0a1628] text-[0.68rem] font-bold uppercase tracking-wide text-center px-3">
              anos de experiência
            </span>
          </div>
        </div>

        {/* ── RIGHT: copy ── */}
        <div>
          <span className="text-[#f5c518] text-[0.72rem] font-semibold tracking-[0.14em] uppercase block mb-4">
            Quem cuidará de você
          </span>

          <h2
            className="text-4xl lg:text-5xl font-black leading-[1.2] mb-3 text-white"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Olá, eu sou o
            <br />
            <em className="not-italic text-[#f5c518]">Dr. Érico Diógenes</em>
          </h2>

          <p className="text-white/80 font-semibold mb-6">
            Uma trajetória dedicada à excelência urológica.
          </p>

          <p className="text-[#8a9bb5] text-[0.92rem] leading-[1.8] mb-4">
            Com 21 anos de atuação, o Dr. Érico Diógenes combina a experiência clínica sólida com o
            que há de mais inovador na medicina mundial.
          </p>

          <p className="text-[#8a9bb5] text-[0.92rem] leading-[1.8] mb-4">
            Sua formação foi desenhada para oferecer segurança máxima em cirurgias complexas.
          </p>

          <p className="text-[#8a9bb5] text-[0.92rem] leading-[1.8] mb-8">
            Mais do que operar, sua missão é oferecer um atendimento didático, onde o paciente{" "}
            <strong className="text-white">
              entende seu tratamento e se sente seguro em cada etapa.
            </strong>
          </p>

          {/* Credentials */}
          <ul className="flex flex-col gap-3">
            {credentials.map((c) => (
              <li key={c} className="flex items-start gap-3 text-white/75 text-[0.88rem] leading-snug">
                <CheckIcon />
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CTASection;