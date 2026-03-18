import { Helmet } from "react-helmet-async";

interface SeoProps {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
}

const DEFAULT_TITLE =
  "Dr. Érico Diógenes | Urologista em Fortaleza | Especialista em HoLEP e Cirurgia Robótica";

const DEFAULT_DESCRIPTION =
  "Urologista em Fortaleza especialista em HoLEP — o padrão-ouro mundial para obstrução urinária. Mais de 21 anos de experiência, Fellowship no Hospital Albert Einstein. Chega de acordar toda hora à noite: existe solução definitiva. Agende: (85) 98178-1020.";

const DEFAULT_URL  = "https://www.drericodiogenes.com.br/";
const DEFAULT_IMAGE = "https://www.drericodiogenes.com.br/og-image.jpg";

const schemaJSON = {
  "@context": "https://schema.org",
  "@graph": [
    /* ── Médico ── */
    {
      "@type": "Physician",
      "@id": "https://www.drericodiogenes.com.br/#physician",
      name: "Dr. Érico Diógenes",
      description:
        "Urologista em Fortaleza com mais de 21 anos de experiência, especialista em HoLEP (Holmium Laser Enucleation of the Prostate) — o padrão-ouro mundial para tratamento da Hiperplasia Prostática Benigna (HPB). Fellowship em Cirurgia Robótica pelo Hospital Israelita Albert Einstein. Membro Titular da Sociedade Brasileira de Urologia.",
      url: DEFAULT_URL,
      image: DEFAULT_IMAGE,
      telephone: "+55-85-98178-1020",
      medicalSpecialty: ["Urology", "RoboticSurgery", "LaserSurgery"],
      knowsAbout: [
        "HoLEP — Holmium Laser Enucleation of the Prostate",
        "Hiperplasia Prostática Benigna (HPB)",
        "Obstrução urinária",
        "Cirurgia Robótica Urológica",
        "Prostatectomia Radical Robótica",
        "Urologia Oncológica",
        "Laser de Holmium para Próstata",
        "Sintomas do Trato Urinário Inferior (LUTS)",
      ],
      alumniOf: [
        {
          "@type": "EducationalOrganization",
          name: "Universidade Federal do Ceará",
          alternateName: "UFC",
        },
        {
          "@type": "Hospital",
          name: "Hospital Geral de Fortaleza",
          alternateName: "HGF",
          description: "Residência Médica em Urologia",
        },
        {
          "@type": "Hospital",
          name: "Hospital Israelita Albert Einstein",
          description: "Fellowship em Cirurgia Robótica",
        },
      ],
      memberOf: {
        "@type": "MedicalOrganization",
        name: "Sociedade Brasileira de Urologia",
        alternateName: "SBU",
      },
      worksFor: { "@id": "https://www.drericodiogenes.com.br/#clinic" },
      address: {
        "@type": "PostalAddress",
        streetAddress: "Avenida Dom Luís, 1200 — Sala 705, Torre 2",
        name: "Shopping Pátio Dom Luís — Aldeota",
        addressLocality: "Fortaleza",
        addressRegion: "CE",
        postalCode: "60160-230",
        addressCountry: "BR",
      },
      sameAs: [DEFAULT_URL],
    },

    /* ── Clínica ── */
    {
      "@type": "MedicalBusiness",
      "@id": "https://www.drericodiogenes.com.br/#clinic",
      name: "Dr. Érico Diógenes — Urologia, HoLEP e Cirurgia Robótica",
      url: DEFAULT_URL,
      image: DEFAULT_IMAGE,
      telephone: "+55-85-98178-1020",
      priceRange: "$$",
      currenciesAccepted: "BRL",
      paymentAccepted: "Plano de saúde, Dinheiro, Cartão",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Avenida Dom Luís, 1200 — Sala 705, Torre 2",
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
      hasMap: "https://maps.google.com/?q=Shopping+Patio+Dom+Luis+Fortaleza",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5.0",
        reviewCount: "40",
        bestRating: "5",
      },
    },

    /* ── FAQ Page ── */
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "O HoLEP é feito com robô?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Não. O HoLEP é realizado com laser de holmium de alta precisão, sem uso de robô. Todo o procedimento é feito por via natural (uretra), sem cortes externos.",
          },
        },
        {
          "@type": "Question",
          name: "Qual o tempo de recuperação do HoLEP?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A maioria dos pacientes recebe alta entre 24h e 48h. Em poucos dias já é possível retomar atividades leves, com melhora progressiva do fluxo urinário.",
          },
        },
        {
          "@type": "Question",
          name: "O HoLEP dói?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Não. A cirurgia é feita com anestesia (geral ou raquidiana), e o desconforto no pós-operatório costuma ser leve e controlado.",
          },
        },
        {
          "@type": "Question",
          name: "Existe risco de impotência ou incontinência no HoLEP?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Como em qualquer cirurgia, existe risco. O HoLEP foi desenvolvido para minimizar esses efeitos, preservando ao máximo os nervos responsáveis pela função urinária e sexual.",
          },
        },
        {
          "@type": "Question",
          name: "O HoLEP é melhor que a cirurgia tradicional para próstata?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Para muitos casos, sim. O HoLEP é reconhecido como o padrão-ouro pelas Sociedades Americana e Europeia de Urologia. Permite tratar próstatas de todos os tamanhos com menos sangramento, menor tempo de internação e recuperação mais rápida.",
          },
        },
        {
          "@type": "Question",
          name: "O plano de saúde cobre o HoLEP?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Na maioria dos casos cobre os custos hospitalares e internação. Equipamentos e honorários podem variar — a equipe médica analisa cada caso individualmente.",
          },
        },
      ],
    },

    /* ── MedicalProcedure ── */
    {
      "@type": "MedicalProcedure",
      name: "HoLEP — Holmium Laser Enucleation of the Prostate",
      alternateName: "Enucleação Endoscópica da Próstata com Laser Holmium",
      description:
        "O HoLEP é o tratamento padrão-ouro mundial para Hiperplasia Prostática Benigna (HPB), reconhecido pelas Sociedades Americana (AUA) e Europeia (EAU) de Urologia. Remove completamente o tecido obstrutivo por via endoscópica, sem cortes externos, com alta em 24h a 48h e resultado definitivo.",
      procedureType: "Surgical",
      bodyLocation: "Próstata",
      indication: {
        "@type": "MedicalIndication",
        name: "Hiperplasia Prostática Benigna (HPB) — obstrução urinária",
      },
      followup:
        "Alta hospitalar em 24h a 48h. Retorno às atividades leves em poucos dias.",
      howPerformed:
        "Procedimento endoscópico realizado pela uretra com laser de holmium de alta potência. Sem cortes externos. Remove completamente o adenoma prostático preservando a cápsula.",
      performedBy: { "@id": "https://www.drericodiogenes.com.br/#physician" },
    },
  ],
};

export default function SeoHead({
  title       = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  url         = DEFAULT_URL,
  image       = DEFAULT_IMAGE,
}: SeoProps) {
  return (
    <Helmet>
      <html lang="pt-BR" />
      <title>{title}</title>
      <meta name="title"       content={title} />
      <meta name="description" content={description} />

      {/* Keywords — long-tail HoLEP + Fortaleza */}
      <meta
        name="keywords"
        content="urologista fortaleza, holep fortaleza, cirurgia holep fortaleza, especialista holep ceara, enucleação próstata laser fortaleza, hiperplasia prostática benigna fortaleza, hpb tratamento fortaleza, cirurgia próstata laser holmium fortaleza, urologista aldeota fortaleza, dr erico diogenes urologista, cirurgia robótica fortaleza, prostatectomia fortaleza, jato urinário fraco tratamento, nictúria tratamento fortaleza, holep padrão ouro próstata, urologia oncológica fortaleza, urologista shopping patio dom luis fortaleza"
      />

      <meta name="author"  content="Dr. Érico Diógenes" />
      <meta name="robots"  content="index, follow" />
      <meta name="theme-color" content="#071120" />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type"        content="website" />
      <meta property="og:url"         content={url} />
      <meta property="og:title"       content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image"       content={image} />
      <meta property="og:image:width"  content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale"      content="pt_BR" />
      <meta property="og:site_name"   content="Dr. Érico Diógenes — Urologista HoLEP Fortaleza" />

      {/* Twitter */}
      <meta name="twitter:card"        content="summary_large_image" />
      <meta name="twitter:title"       content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image"       content={image} />

      {/* Geolocation — ajuda SEO local */}
      <meta name="geo.region"      content="BR-CE" />
      <meta name="geo.placename"   content="Fortaleza, Ceará, Brasil" />
      <meta name="geo.position"    content="-3.7358;-38.4902" />
      <meta name="ICBM"            content="-3.7358, -38.4902" />

      {/* Schema.org */}
      <script type="application/ld+json">
        {JSON.stringify(schemaJSON, null, 2)}
      </script>
    </Helmet>
  );
}