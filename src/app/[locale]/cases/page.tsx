import { getCases } from "@/data/cases";
import { CasesPortfolioGrid } from "@/components/cases/CasesPortfolioGrid";
import { PageShell } from "@/components/page-shell";
import { buildMetadata } from "@/lib/metadata";
import { isLocale, type AppLocale } from "@/lib/i18n";

function getCopy(locale: AppLocale) {
  if (locale === "en") {
    return {
      eyebrow: "Cases",
      title: "Projects that connect positioning, operations, and technical execution",
      description: "A portfolio of websites, platforms, and integrations delivered for companies, clinics, agencies, and commercial operations.",
      seoTitle: "Cases | UNTI Digital",
      seoDescription: "Explore UNTI Digital case studies across websites, platforms, and integrations."
    };
  }

  if (locale === "es") {
    return {
      eyebrow: "Casos",
      title: "Proyectos que conectan posicionamiento, operación y ejecución técnica",
      description: "Un portafolio de sitios, plataformas e integraciones entregadas para empresas, clínicas, agencias y operaciones comerciales.",
      seoTitle: "Casos | UNTI Digital",
      seoDescription: "Explore casos de UNTI Digital en sitios, plataformas e integraciones."
    };
  }

  return {
    eyebrow: "Cases",
    title: "Projetos que conectam posicionamento, operação e execução técnica",
    description: "Um portfólio de sites, plataformas e integrações entregues para empresas, clínicas, agências e operações comerciais.",
    seoTitle: "Cases | UNTI Digital",
    seoDescription: "Explore cases da UNTI Digital em sites, plataformas e integrações."
  };
}

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const resolvedLocale: AppLocale = isLocale(locale) ? locale : "pt";
  const copy = getCopy(resolvedLocale);
  return buildMetadata({ locale: resolvedLocale, title: copy.seoTitle, description: copy.seoDescription, pathname: "/cases" });
}

export default function CasesPage({ params: { locale } }: { params: { locale: AppLocale } }) {
  const copy = getCopy(locale);
  const cases = getCases(locale);

  return (
    <PageShell eyebrow={copy.eyebrow} title={copy.title} description={copy.description}>
      <CasesPortfolioGrid cases={cases} />
    </PageShell>
  );
}
