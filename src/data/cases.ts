import type { AppLocale } from "@/lib/i18n";

export type CaseCategory = "saude" | "automotivo" | "corporativo" | "industria";

export interface CaseStudy {
  id: string;
  slug: string;
  cliente: string;
  categoria: CaseCategory;
  segmento: string;
  tagline: string;
  resumoHome: string;
  resumo: string;
  imagemBanner: string;
  imagemPrint: string;
  tecnologias: string[];
  desafio: string;
  entrega: string;
  impacto: string;
  resultados: string[];
  destaqueHome: boolean;
  ordemHome?: number;
  ordemPortfolio: number;
  seoTitle: string;
  metaDescription: string;
  heroSubtitle?: string;
}

type LocalizedText = Record<AppLocale, string>;

type CaseSeed = {
  id: string;
  slug: string;
  cliente: string;
  categoria: CaseCategory;
  segmento: LocalizedText;
  foco: LocalizedText;
  imagemBanner: string;
  imagemPrint?: string;
  tecnologias: string[];
  destaqueHome: boolean;
  ordemHome?: number;
  ordemPortfolio: number;
};

function text(pt: string, en: string, es: string): LocalizedText {
  return { pt, en, es };
}

export function getCaseCategoryThemes(locale: AppLocale) {
  const labels = {
    pt: { saude: "Saúde", automotivo: "Automotivo", corporativo: "Corporativo", industria: "Indústria & Varejo" },
    en: { saude: "Healthcare", automotivo: "Automotive", corporativo: "Corporate", industria: "Industry & Retail" },
    es: { saude: "Salud", automotivo: "Automotriz", corporativo: "Corporativo", industria: "Industria & Retail" }
  }[locale];

  return {
    saude: {
      label: labels.saude,
      placeholder: "/images/cases/placeholders/saude.svg",
      badgeClassName: "border-sky-200 bg-sky-500/10 text-sky-700",
      accentClassName: "bg-sky-500"
    },
    automotivo: {
      label: labels.automotivo,
      placeholder: "/images/cases/placeholders/automotivo.svg",
      badgeClassName: "border-blue-200 bg-blue-500/10 text-blue-700",
      accentClassName: "bg-blue-600"
    },
    corporativo: {
      label: labels.corporativo,
      placeholder: "/images/cases/corp.svg",
      badgeClassName: "border-violet-200 bg-violet-500/10 text-violet-700",
      accentClassName: "bg-violet-600"
    },
    industria: {
      label: labels.industria,
      placeholder: "/images/cases/industria.svg",
      badgeClassName: "border-amber-200 bg-amber-500/10 text-amber-700",
      accentClassName: "bg-amber-500"
    }
  };
}

export const caseCategoryThemes = getCaseCategoryThemes("pt");

const caseSeeds: CaseSeed[] = [
  { id: "grupo-savol", slug: "grupo-savol", cliente: "Grupo Savol", categoria: "automotivo", segmento: text("Ecossistema automotivo", "Automotive ecosystem", "Ecosistema automotriz"), foco: text("marcas, operação e captação regional", "brands, operations, and regional demand generation", "marcas, operación y captación regional"), imagemBanner: "/images/cases/grupo-savol/unti-digital-cases-grupo-savol-banner.webp", imagemPrint: "/images/cases/grupo-savol/unti-digital-cases-grupo-savol-print-site.webp", tecnologias: ["Next.js", "Tailwind CSS", "CRM"], destaqueHome: true, ordemHome: 1, ordemPortfolio: 1 },
  { id: "toriba", slug: "toriba", cliente: "Toriba", categoria: "automotivo", segmento: text("Plataforma de leads", "Lead platform", "Plataforma de leads"), foco: text("velocidade comercial e captação", "commercial response speed and lead capture", "velocidad comercial y captación"), imagemBanner: "/images/cases/toriba/unti-digital-cases-toriba-banner.webp", imagemPrint: "/images/cases/toriba/unti-digital-cases-toriba-print-site.webp", tecnologias: ["Next.js", "Framer Motion", "CRM"], destaqueHome: true, ordemHome: 2, ordemPortfolio: 2 },
  { id: "auto-shopping-tiquatira", slug: "auto-shopping-tiquatira", cliente: "Auto Shopping Tiquatira", categoria: "automotivo", segmento: text("Integração de estoque", "Inventory integration", "Integración de inventario"), foco: text("catálogo conectado ao estoque real", "catalog connected to real inventory", "catálogo conectado al inventario real"), imagemBanner: "/images/cases/auto-shopping-tiquatira/auto-shopping-tiquatira-banner.webp", imagemPrint: "/images/cases/auto-shopping-tiquatira/auto-shopping-tiquatira-print-site.webp", tecnologias: ["API", "Catálogo web", "SEO"], destaqueHome: true, ordemHome: 3, ordemPortfolio: 3 },
  { id: "dr-eduardo-ursolino", slug: "dr-eduardo-ursolino", cliente: "Dr. Eduardo Ursolino", categoria: "saude", segmento: text("Saúde & odontologia", "Healthcare & dentistry", "Salud y odontología"), foco: text("autoridade clínica e agendamento premium", "clinical authority and premium scheduling", "autoridad clínica y agendamiento premium"), imagemBanner: "/images/cases/dr-eduardo-ursulino/unti-digital-cases-dr-eduardo-ursolino-banner.webp", imagemPrint: "/images/cases/dr-eduardo-ursulino/unti-digital-cases-dr-eduardo-ursolino-print-site.webp", tecnologias: ["Next.js", "SEO", "Framer Motion"], destaqueHome: true, ordemHome: 4, ordemPortfolio: 4 },
  { id: "dr-alessandro-linder", slug: "dr-alessandro-linder", cliente: "Dr. Alessandro Linder", categoria: "saude", segmento: text("Saúde & estética", "Healthcare & aesthetics", "Salud y estética"), foco: text("confiança clínica e geração de consultas", "clinical trust and appointment generation", "confianza clínica y captación de consultas"), imagemBanner: "/images/cases/placeholders/saude.svg", tecnologias: ["Next.js", "SEO local", "UX"], destaqueHome: false, ordemPortfolio: 5 },
  { id: "uroclinica-de-joinville", slug: "uroclinica-de-joinville", cliente: "Uroclínica de Joinville", categoria: "saude", segmento: text("Clínica especializada", "Specialized clinic", "Clínica especializada"), foco: text("clareza institucional e contato qualificado", "institutional clarity and qualified contact", "claridad institucional y contacto calificado"), imagemBanner: "/images/cases/uroclinica-de-joinville/unti-digital-cases-uroclinica-de-joinville-banner.webp", imagemPrint: "/images/cases/uroclinica-de-joinville/unti-digital-cases-uroclinica-de-joinville-print-site.webp", tecnologias: ["Next.js", "Tailwind CSS", "SEO local"], destaqueHome: false, ordemPortfolio: 6 },
  { id: "hospital-thereza-mussi", slug: "hospital-thereza-mussi", cliente: "Hospital Thereza Mussi", categoria: "saude", segmento: text("Instituição hospitalar", "Hospital institution", "Institución hospitalaria"), foco: text("organização de serviços e confiança digital", "service organization and digital trust", "organización de servicios y confianza digital"), imagemBanner: "/images/cases/hospital-thereza-mussi/unti-digital-cases-hospital-thereza-mussi-banner.webp", imagemPrint: "/images/cases/hospital-thereza-mussi/unti-digital-cases-hospital-thereza-mussi-print-site].webp", tecnologias: ["Next.js", "Conteúdo", "SEO local"], destaqueHome: false, ordemPortfolio: 7 },
  { id: "human-clinic", slug: "human-clinic", cliente: "Human Clinic", categoria: "saude", segmento: text("Clínica premium", "Premium clinic", "Clínica premium"), foco: text("refinamento visual e contato mais objetivo", "visual refinement and clearer contact", "refinamiento visual y contacto más objetivo"), imagemBanner: "/images/cases/human-clinic/unti-digital-cases-human-clinic-banner.webp", imagemPrint: "/images/cases/human-clinic/unti-digital-cases-human-clinic-print-site.webp", tecnologias: ["Next.js", "UX premium", "Tailwind CSS"], destaqueHome: false, ordemPortfolio: 8 },
  { id: "dra-isabel-borelli", slug: "dra-isabel-borelli", cliente: "Dra. Isabel Borelli", categoria: "saude", segmento: text("Saúde & estética", "Healthcare & aesthetics", "Salud y estética"), foco: text("posicionamento profissional e proximidade", "professional positioning and proximity", "posicionamiento profesional y cercanía"), imagemBanner: "/images/cases/dra-isabel-borelli/unti-digital-cases-dra-isabel-borelli-banner.webp", imagemPrint: "/images/cases/dra-isabel-borelli/unti-digital-cases-dra-isabel-borelli-print-site.webp", tecnologias: ["Next.js", "SEO local", "UX"], destaqueHome: false, ordemPortfolio: 9 },
  { id: "dra-gionvana-bombonatto", slug: "dra-gionvana-bombonatto", cliente: "Dra. Gionvana Bombonatto", categoria: "saude", segmento: text("Saúde & estética", "Healthcare & aesthetics", "Salud y estética"), foco: text("autoridade médica com experiência premium", "medical authority with a premium experience", "autoridad médica con experiencia premium"), imagemBanner: "/images/cases/dra-gionvana-bombonatto/unti-digtal-cases-dra-gionvana-bombonatto-banner.webp", imagemPrint: "/images/cases/dra-gionvana-bombonatto/unti-digtal-cases-dra-gionvana-bombonatto-print-site.webp", tecnologias: ["Next.js", "UX premium", "SEO local"], destaqueHome: false, ordemPortfolio: 10 },
  { id: "dr-thiago-azuaga", slug: "dr-thiago-azuaga", cliente: "Dr. Thiago Azuaga", categoria: "saude", segmento: text("Saúde especializada", "Specialized healthcare", "Salud especializada"), foco: text("confiança e jornada de contato enxuta", "trust and a lean contact journey", "confianza y una ruta de contacto simple"), imagemBanner: "/images/cases/dr-thiago-azuaga/unti-digital-cases-dr-thiago-azuaga-banner.webp", imagemPrint: "/images/cases/dr-thiago-azuaga/unti-digital-cases-dr-thiago-azuaga-print-site.webp", tecnologias: ["Next.js", "Tailwind CSS", "SEO local"], destaqueHome: false, ordemPortfolio: 11 },
  { id: "grupo-aljr", slug: "grupo-aljr", cliente: "Grupo ALJR", categoria: "corporativo", segmento: text("Grupo empresarial", "Business group", "Grupo empresarial"), foco: text("marca corporativa e relacionamento comercial", "corporate branding and commercial relationship", "marca corporativa y relación comercial"), imagemBanner: "/images/cases/grupo-ALJR/unti-digital-cases-grupo-ALJR-banner.webp", imagemPrint: "/images/cases/grupo-ALJR/unti-digital-cases-grupo-ALJR-print-site.webp", tecnologias: ["Next.js", "SEO", "UX B2B"], destaqueHome: false, ordemPortfolio: 12 },
  { id: "conect-7g", slug: "conect-7g", cliente: "Conect 7G", categoria: "corporativo", segmento: text("Tecnologia & serviços", "Technology & services", "Tecnología y servicios"), foco: text("autoridade técnica e geração de demanda", "technical authority and demand generation", "autoridad técnica y captación de demanda"), imagemBanner: "/images/cases/conect-7g/unti-digital-cases-conect-7g-banner.webp", imagemPrint: "/images/cases/conect-7g/unti-digital-cases-conect-7g-print-site.webp", tecnologias: ["Next.js", "Performance web", "Tailwind CSS"], destaqueHome: false, ordemPortfolio: 13 },
  { id: "lp-conect-7g", slug: "lp-conect-7g", cliente: "Landing Page Conect 7G", categoria: "corporativo", segmento: text("Landing page", "Landing page", "Landing page"), foco: text("captação de leads e resposta rápida", "lead capture and fast response", "captación de leads y respuesta rápida"), imagemBanner: "/images/cases/lp-conect-7g/unti-digital-cases-lp-conect-7g-banner.webp", imagemPrint: "/images/cases/lp-conect-7g/unti-digital-cases-lp-conect-7g-print-site.webp", tecnologias: ["Next.js", "Framer Motion", "CRO"], destaqueHome: false, ordemPortfolio: 14 },
  { id: "clube-recreativo-de-sumare", slug: "clube-recreativo-de-sumare", cliente: "Clube Recreativo de Sumaré", categoria: "corporativo", segmento: text("Institucional & serviços", "Institutional & services", "Institucional y servicios"), foco: text("agenda, serviços e relacionamento", "schedule, services, and member relationship", "agenda, servicios y relación"), imagemBanner: "/images/cases/clube-recreativo-de-sumare/unti-digital-cases-clube-recreativo-de-sumare-banner.webp", imagemPrint: "/images/cases/clube-recreativo-de-sumare/unti-digital-cases-clube-recreativo-de-sumare-print-site.webp", tecnologias: ["Next.js", "Conteúdo", "Performance web"], destaqueHome: false, ordemPortfolio: 15 },
  { id: "odete-design", slug: "odete-design", cliente: "Odete Design", categoria: "corporativo", segmento: text("Marca criativa", "Creative brand", "Marca creativa"), foco: text("posicionamento premium e percepção de valor", "premium positioning and value perception", "posicionamiento premium y percepción de valor"), imagemBanner: "/images/cases/odete-design/unti-digital-cases-odete-design-banner.webp", imagemPrint: "/images/cases/odete-design/unti-digital-cases-odete-design-print-site.webp", tecnologias: ["Next.js", "UX premium", "SEO"], destaqueHome: false, ordemPortfolio: 16 },
  { id: "renata-pimentel", slug: "renata-pimentel", cliente: "Renata Pimentel", categoria: "corporativo", segmento: text("Marca pessoal", "Personal brand", "Marca personal"), foco: text("autoridade, oferta e proximidade", "authority, offer clarity, and proximity", "autoridad, oferta y cercanía"), imagemBanner: "/images/cases/renata-pimentel/unti-digital-cases-renata-pimentel-banner.webp", imagemPrint: "/images/cases/renata-pimentel/unti-digital-cases-renata-pimentel-print-site.webp", tecnologias: ["Next.js", "SEO local", "UX"], destaqueHome: false, ordemPortfolio: 17 },
  { id: "plataforma-wiki-das-celebridades", slug: "plataforma-wiki-das-celebridades", cliente: "Plataforma Wiki das Celebridades", categoria: "corporativo", segmento: text("Plataforma web", "Web platform", "Plataforma web"), foco: text("estrutura editorial, navegação e escala", "editorial structure, navigation, and scale", "estructura editorial, navegación y escala"), imagemBanner: "/images/cases/plataforma-wiki-das-celebridades/unti-digital-cases-plataforma-wiki-das-celebridades-banner.webp", imagemPrint: "/images/cases/plataforma-wiki-das-celebridades/unti-digital-cases-plataforma-wiki-das-celebridades-print-site.webp", tecnologias: ["Next.js", "SEO técnico", "Conteúdo"], destaqueHome: false, ordemPortfolio: 18 },
  { id: "nerd-ao-maximo", slug: "nerd-ao-maximo", cliente: "Nerd ao Máximo", categoria: "corporativo", segmento: text("Mídia & conteúdo", "Media & content", "Medios y contenido"), foco: text("comunidade, conteúdo e experiência editorial", "community, content, and editorial experience", "comunidad, contenido y experiencia editorial"), imagemBanner: "/images/cases/nerd-ao-maximo/unti-digital-cases-nerd-ao-maximo-banner.webp", imagemPrint: "/images/cases/nerd-ao-maximo/unti-digital-cases-nerd-ao-maximo-print-site.webp", tecnologias: ["Next.js", "Conteúdo", "Performance web"], destaqueHome: false, ordemPortfolio: 19 },
  { id: "catalogo-grupo-niks", slug: "catalogo-grupo-niks", cliente: "Catálogo Grupo Niks", categoria: "industria", segmento: text("Catálogo digital", "Digital catalog", "Catálogo digital"), foco: text("organização comercial da oferta", "commercial organization of the offer", "organización comercial de la oferta"), imagemBanner: "/images/cases/catalogo-grupo-niks/unti-digital-cases-catalogo-grupo-niks-banner.webp", imagemPrint: "/images/cases/catalogo-grupo-niks/unti-digital-cases-catalogo-grupo-niks-print-site.webp", tecnologias: ["Next.js", "Catálogo digital", "Tailwind CSS"], destaqueHome: false, ordemPortfolio: 20 },
  { id: "ecommerce-onile-alimentos", slug: "ecommerce-onile-alimentos", cliente: "E-commerce Onile Alimentos", categoria: "industria", segmento: text("E-commerce", "E-commerce", "E-commerce"), foco: text("jornada de compra mais clara", "clearer purchase journey", "recorrido de compra más claro"), imagemBanner: "/images/cases/ecommerce-onile-alimentos/unti-digital-cases-ecommerce-onile-alimentos-banner.webp", imagemPrint: "/images/cases/ecommerce-onile-alimentos/unti-digital-cases-ecommerce-onile-alimentos-print-site.webp", tecnologias: ["Next.js", "E-commerce", "UX"], destaqueHome: false, ordemPortfolio: 21 },
  { id: "swebsite-suporteshop", slug: "swebsite-suporteshop", cliente: "SWebsite SuporteShop", categoria: "industria", segmento: text("E-commerce & suporte", "E-commerce & support", "E-commerce y soporte"), foco: text("serviços e operação de suporte digital", "services and digital support operations", "servicios y operación de soporte digital"), imagemBanner: "/images/cases/SWebsite-suporteshop/unti-digital-cases-SWebsite-suporteshop-banner.webp", imagemPrint: "/images/cases/SWebsite-suporteshop/unti-digital-cases-SWebsite-suporteshop-print-site.webp", tecnologias: ["Next.js", "SEO técnico", "UX"], destaqueHome: false, ordemPortfolio: 22 },
  { id: "sos-pistolas", slug: "sos-pistolas", cliente: "SOS Pistolas", categoria: "industria", segmento: text("Indústria & varejo", "Industry & retail", "Industria y retail"), foco: text("nicho técnico com clareza comercial", "technical niche with commercial clarity", "nicho técnico con claridad comercial"), imagemBanner: "/images/cases/SOS-pistolas/unti-digital-cases-SOSpistolas-banner.webp", imagemPrint: "/images/cases/SOS-pistolas/unti-digital-cases-SOSpistolas-print-site.webp", tecnologias: ["Next.js", "SEO local", "Performance web"], destaqueHome: false, ordemPortfolio: 23 }
];

function buildText(seed: CaseSeed, locale: AppLocale) {
  const segmento = seed.segmento[locale];
  const foco = seed.foco[locale];

  if (locale === "en") {
    return {
      segmento,
      tagline: `${segmento} focused on ${foco}.`,
      resumoHome: `Project structured around ${foco}.`,
      resumo: `This delivery reorganized the digital experience for ${seed.cliente}, creating a clearer narrative, stronger positioning, and a more scalable technical base.`,
      desafio: `Turn a ${segmento.toLowerCase()} context into a clearer digital experience with faster navigation and lower friction for the next step.`,
      entrega: `We delivered a structure powered by ${seed.tecnologias.slice(0, 3).join(", ")} with content blocks, conversion paths, and technical organization ready to evolve.`,
      impacto: `${seed.cliente} gained clearer positioning, a more direct path to qualified contact, and stronger digital consistency.`,
      resultados: ["Clearer commercial narrative", "More direct contact flow", "Scalable foundation for future growth"]
    };
  }

  if (locale === "es") {
    return {
      segmento,
      tagline: `${segmento} enfocado en ${foco}.`,
      resumoHome: `Proyecto estructurado alrededor de ${foco}.`,
      resumo: `Esta entrega reorganizó la experiencia digital de ${seed.cliente}, creando una narrativa más clara, mejor posicionamiento y una base técnica más escalable.`,
      desafio: `Traducir un contexto de ${segmento.toLowerCase()} en una experiencia digital más clara, con navegación más rápida y menor fricción para el siguiente paso.`,
      entrega: `Entregamos una estructura con ${seed.tecnologias.slice(0, 3).join(", ")} y bloques de contenido, rutas de conversión y organización técnica listas para evolucionar.`,
      impacto: `${seed.cliente} ganó posicionamiento más claro, una ruta más directa al contacto calificado y mayor consistencia digital.`,
      resultados: ["Narrativa comercial más clara", "Flujo de contacto más directo", "Base escalable para crecimiento futuro"]
    };
  }

  return {
    segmento,
    tagline: `${segmento} com foco em ${foco}.`,
    resumoHome: `Projeto estruturado em torno de ${foco}.`,
    resumo: `Esta entrega reorganizou a experiência digital de ${seed.cliente}, criando narrativa mais clara, melhor posicionamento e uma base técnica mais escalável.`,
    desafio: `Traduzir um contexto de ${segmento.toLowerCase()} em uma experiência digital mais clara, com navegação mais rápida e menos atrito para o próximo passo.`,
    entrega: `Entregamos uma estrutura com ${seed.tecnologias.slice(0, 3).join(", ")} e blocos de conteúdo, rotas de conversão e organização técnica prontos para evoluir.`,
    impacto: `${seed.cliente} ganhou posicionamento mais claro, uma rota mais direta para o contato qualificado e maior consistência digital.`,
    resultados: ["Narrativa comercial mais clara", "Fluxo de contato mais direto", "Base escalável para crescimento futuro"]
  };
}

function createCase(seed: CaseSeed, locale: AppLocale): CaseStudy {
  const copy = buildText(seed, locale);

  return {
    id: seed.id,
    slug: seed.slug,
    cliente: seed.cliente,
    categoria: seed.categoria,
    segmento: copy.segmento,
    tagline: copy.tagline,
    resumoHome: copy.resumoHome,
    resumo: copy.resumo,
    imagemBanner: seed.imagemBanner,
    imagemPrint: seed.imagemPrint ?? seed.imagemBanner,
    tecnologias: seed.tecnologias,
    desafio: copy.desafio,
    entrega: copy.entrega,
    impacto: copy.impacto,
    resultados: copy.resultados,
    destaqueHome: seed.destaqueHome,
    ordemHome: seed.ordemHome,
    ordemPortfolio: seed.ordemPortfolio,
    seoTitle: locale === "en" ? `${seed.cliente} case study | UNTI Digital` : `Case ${seed.cliente} | UNTI Digital`,
    metaDescription: `${seed.cliente}: ${copy.resumoHome}`,
    heroSubtitle: copy.tagline
  };
}

export function getCases(locale: AppLocale = "pt") {
  return caseSeeds
    .map((seed) => createCase(seed, locale))
    .sort((caseA, caseB) => caseA.ordemPortfolio - caseB.ordemPortfolio);
}

export function getCasesHome(locale: AppLocale = "pt") {
  return getCases(locale)
    .filter((caseItem) => caseItem.destaqueHome)
    .sort((caseA, caseB) => (caseA.ordemHome ?? 999) - (caseB.ordemHome ?? 999));
}

export const cases = getCases("pt");
export const casesHome = getCasesHome("pt");

export function getCaseBySlug(locale: AppLocale = "pt", slug: string) {
  return getCases(locale).find((caseItem) => caseItem.slug === slug);
}
