import GoogleReviews from "./GoogleReviews";
const montserrat = { fontFamily: "'Montserrat', sans-serif" };

const Stars = () => (
  <div className="flex gap-0.5 text-[#f5c518] text-base mb-4">★★★★★</div>
);

const ProvaSocialSection = () => (
  <section id="prova-social" className="bg-[#0a1628] py-24 px-6 lg:px-16">
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-14">
        <div className="w-12 h-[3px] bg-[#f5c518] mx-auto mb-8" />
        <h2
          className="text-3xl lg:text-4xl font-black text-white leading-tight mb-4"
          style={montserrat}
        >
          O que os pacientes dizem no Google
        </h2>
        <div className="flex items-center justify-center gap-2">
          <div className="flex gap-1 text-[#f5c518] text-xl">★★★★★</div>
          <span className="text-[#8a9bb5] text-sm" style={montserrat}>
            · Avaliação média Google
          </span>
        </div>
      </div>     
      {/* GoogleReviews agora dentro do container centralizado */}
      <div className="mt-10">
        <GoogleReviews placeId="ChIJ-RHmBn5IxwcRyI2kNHjMWKA" />
      </div>
    </div>
  </section>
);

export default ProvaSocialSection;