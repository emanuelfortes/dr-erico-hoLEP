import SeoHead from "../seo/SeoHead";
import TopBar from "../components/topBar";
import HeroSection from "../components/HeroSection"; // 1️⃣ Headline
import IdentificacaoSEO from "../components/IdentificacaoSEO"; // 2️⃣ Identificação + SEO
import SolucaoSection from "../components/SolucaoSection"; // 3️⃣ Solução
import AutoridadeSection from "../components/AutoridadeSection"; // 4️⃣ Autoridade
import ProvaSocialSection from "../components/ProvaSocialSection"; // 5️⃣ Prova Social
import FAQSection from "../components/FAQSection"; // 6️⃣ Quebra de Objeções
import { CTAFinalSection, Footer } from "../components/CTAFinalSection";

const UrologistaFortaleza = () => (
  <div className="font-sans bg-[#0a1628] text-white overflow-x-hidden">
    <SeoHead
      title="Urologista em Fortaleza | Dr. Érico Diógenes"
      description="o que há de mais moderno em inovação e tecnologia para cuidar da sua saúde."
    />
    <TopBar />
    <HeroSection />
    <IdentificacaoSEO />
    <SolucaoSection />
    <AutoridadeSection />
    <ProvaSocialSection />
    <FAQSection />
    <CTAFinalSection />
    <Footer />
  </div>
);

export default UrologistaFortaleza;
