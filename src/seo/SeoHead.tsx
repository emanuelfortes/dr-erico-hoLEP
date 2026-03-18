import { Helmet } from "react-helmet-async";

interface SeoProps {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
}

const DEFAULT_TITLE = "Dr. Érico Diógenes | Urologista em Fortaleza | Cirurgia Robótica";
const DEFAULT_DESCRIPTION =
  "Urologista em Fortaleza especializado em cirurgia robótica e Laser HoLEP. Mais de 21 anos de experiência. Fellowship no Hospital Albert Einstein. Agende sua consulta: (85) 98178-1020.";
const DEFAULT_URL = "https://www.drericodiogenes.com.br/";
const DEFAULT_IMAGE = "https://www.drericodiogenes.com.br/og-image.jpg";

const schemaJSON = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Physician",
      "@id": "https://www.drericodiogenes.com.br/#physician",
      name: "Dr. Érico Diógenes",
      description: DEFAULT_DESCRIPTION,
      url: DEFAULT_URL,
      image: DEFAULT_IMAGE,
      telephone: "+55-85-98178-1020",
      medicalSpecialty: ["Urology", "RoboticSurgery"],
      knowsAbout: [
        "Cirurgia Robótica",
        "Laser HoLEP",
        "Prostatectomia Radical",
        "Urologia Oncológica",
      ],
      alumniOf: [
        { "@type": "EducationalOrganization", name: "Universidade Federal do Ceará", alternateName: "UFC" },
        { "@type": "Hospital", name: "Hospital Israelita Albert Einstein", description: "Fellowship em Cirurgia Robótica" },
      ],
      memberOf: { "@type": "MedicalOrganization", name: "Sociedade Brasileira de Urologia" },
      worksFor: { "@id": "https://www.drericodiogenes.com.br/#clinic" },
      address: {
        "@type": "PostalAddress",
        streetAddress: "Avenida Dom Luís, 1200 - Sala 705 - Torre 2",
        addressLocality: "Fortaleza",
        addressRegion: "CE",
        postalCode: "60160-230",
        addressCountry: "BR",
      },
      sameAs: [
        "https://www.drericodiogenes.com.br/",
      ],
    },
    {
      "@type": "MedicalBusiness",
      "@id": "https://www.drericodiogenes.com.br/#clinic",
      name: "Dr. Érico Diógenes — Urologia e Cirurgia Robótica",
      url: DEFAULT_URL,
      image: DEFAULT_IMAGE,
      telephone: "+55-85-98178-1020",
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Avenida Dom Luís, 1200 - Sala 705 - Torre 2",
        name: "Shopping Pátio Dom Luís",
        addressLocality: "Fortaleza",
        addressRegion: "CE",
        postalCode: "60160-230",
        addressCountry: "BR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: -3.7358141758249754,
        longitude: -38.49018225659571,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "08:00",
          closes: "18:00",
        },
      ],
      medicalSpecialty: "Urology",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "O robô faz a cirurgia sozinho?",
          acceptedAnswer: { "@type": "Answer", text: "Não. O procedimento é 100% controlado pelo Dr. Érico. O robô apenas amplia precisão e visão, oferecendo instrumentos com amplitude de movimentos superior e visualização 3D ampliada." },
        },
        {
          "@type": "Question",
          name: "Qual o tempo de recuperação da cirurgia robótica?",
          acceptedAnswer: { "@type": "Answer", text: "Alta entre 24h e 48h, com retorno gradual em poucos dias. A cirurgia robótica proporciona recuperação muito mais rápida que técnicas tradicionais." },
        },
        {
          "@type": "Question",
          name: "Existe risco de impotência ou incontinência na cirurgia robótica?",
          acceptedAnswer: { "@type": "Answer", text: "Sim, mas a técnica robótica reduz drasticamente esses riscos comparada às técnicas convencionais, graças à maior precisão dos movimentos e preservação das estruturas." },
        },
        {
          "@type": "Question",
          name: "O plano de saúde cobre cirurgia robótica?",
          acceptedAnswer: { "@type": "Answer", text: "Grande parte cobre hospital e internação. A equipe avalia cada caso individualmente e orienta sobre as coberturas disponíveis para o seu plano." },
        },
      ],
    },
  ],
};

export default function SeoHead({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  url = DEFAULT_URL,
  image = DEFAULT_IMAGE,
}: SeoProps) {
  return (
    <Helmet>
      <html lang="pt-BR" />
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content="urologista fortaleza, cirurgia robótica fortaleza, dr erico diogenes, holep fortaleza, urologia robotica ceara, urologista aldeota fortaleza" />
      <meta name="author" content="Dr. Érico Diógenes" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:site_name" content="Dr. Érico Diógenes — Urologista" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Schema.org */}
      <script type="application/ld+json">
        {JSON.stringify(schemaJSON)}
      </script>
    </Helmet>
  );
}