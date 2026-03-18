import WhatsAppIcon from "./WhatsAppIcon";
import { WA_LINK } from "../constants";
import imgLogo from "../assets/logo_1.png";
import imgBg from "../assets/bg-inicio-2.jpg";
import imgBgMobile from "../assets/bg-inicio-mobile-1.jpg";

const HeroSection = () => (
  <section
    id="hero"
    className="relative min-h-screen flex overflow-hidden"
    style={{
      fontFamily: "'Montserrat', sans-serif",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    }}
  >
    {/* Background — mobile usa imagem vertical, desktop usa horizontal */}
    <div
      className="absolute inset-0 block lg:hidden"
      style={{
        backgroundImage: `url(${imgBgMobile})`,
        backgroundSize: "cover",
        backgroundPosition: "center top",
      }}
    />
    <div
      className="absolute inset-0 hidden lg:block"
      style={{
        backgroundImage: `url(${imgBg})`,
        backgroundSize: "cover",
        backgroundPosition: "right top",
      }}
    />

    {/* Overlay desktop */}
    <div className="absolute inset-0 hidden lg:block bg-gradient-to-r from-[#071120]/90 via-[#071120]/50 to-transparent z-0" />

    {/* Overlay mobile — escurece só a parte de baixo onde fica o texto */}
    <div className="absolute inset-0 block lg:hidden bg-gradient-to-b from-transparent via-[#071120]/60 to-[#071120] z-0" />

    {/* CONTENT */}
    <div className="relative z-10 flex flex-col w-full">

      {/* Mobile: texto fica na metade inferior */}
      {/* Desktop: texto fica à esquerda em 52% */}
      <div className="flex flex-col justify-end lg:justify-center px-6 sm:px-10 lg:px-16 pt-[55vw] sm:pt-[45vw] lg:pt-28 pb-12 lg:pb-20 w-full lg:w-[52%] min-h-screen">

        {/* Logo */}
        <div className="mb-6 lg:mb-10">
          <img
            src={imgLogo}
            alt="Dr. Érico Diógenes — Urologista"
            className="h-10 sm:h-12 lg:h-14 w-auto"
          />
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-[0.65rem] sm:text-[0.7rem] font-semibold tracking-[0.12em] uppercase px-4 py-1.5 rounded-full mb-5 lg:mb-7 w-fit">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
          </span>
          Urologista em Fortaleza
        </div>

        {/* H1 */}
        <h1 className="text-[1.75rem] sm:text-3xl lg:text-3xl font-black leading-[1.15] mb-5 lg:mb-6 text-white">
          Urologista em Fortaleza com{" "}
          <em className="not-italic text-white">
            Tecnologia de Cirurgia Robótica Avançada
          </em>
        </h1>

        {/* Subtítulo */}
        <p className="text-white/60 text-sm sm:text-base leading-relaxed mb-8 lg:mb-10 max-w-sm sm:max-w-lg">
          Atendimento com o{" "}
          <strong className="text-white">Dr. Érico Diógenes</strong>, referência em urologia em
          Fortaleza, com foco em{" "}
          <strong className="text-white">
            precisão, recuperação rápida e segurança máxima.
          </strong>
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 bg-[#f5c518] hover:bg-[#d4a800] text-[#0a1628] font-bold text-xs tracking-[0.1em] uppercase px-8 py-4 rounded-full shadow-[0_8px_32px_rgba(245,197,24,0.30)] hover:shadow-[0_12px_40px_rgba(245,197,24,0.45)] transition-all duration-200 hover:-translate-y-0.5"
          >
            <WhatsAppIcon size={16} />
            Agendar Consulta Agora
          </a>
          <a
            href="#sobre"
            className="flex items-center justify-center px-7 py-4 rounded-full border border-white/20 text-white font-medium text-sm hover:border-white/40 hover:bg-white/5 transition-all duration-200"
          >
            Conhecer o Dr. Érico
          </a>
        </div>

        {/* Stats */}
        <div className="flex gap-6 sm:gap-8 mt-10 lg:mt-14 pt-8 lg:pt-10 border-t border-white/[0.08]">
          {[
            { num: "21+", label: "anos de\nexperiência" },
            { num: "5★",  label: "avaliação\nno Google"  },
            { num: "48h", label: "alta após\ncirurgia"    },
          ].map(({ num, label }) => (
            <div key={num}>
              <div className="text-white text-3xl sm:text-4xl font-black leading-none">{num}</div>
              <div className="text-white/50 text-xs mt-1 leading-snug whitespace-pre-line">{label}</div>
            </div>
          ))}
        </div>

      </div>
    </div>

  </section>
);

export default HeroSection;