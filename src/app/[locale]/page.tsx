import { Hero } from "@/components/home/hero";
import { Segmentation } from "@/components/home/segmentation";
import { ServicesCarousel } from "@/components/home/services-carousel";
import { LogoCarousel } from "@/components/ui/LogoCarousel";
import { FeatureBlocks } from "@/components/home/feature-blocks";
import { BlogGrid } from "@/components/home/blog-grid";
import { FinalCTA } from "@/components/home/final-cta";
import { HowWeWork } from "@/components/home/how-we-work";
import { FixedCTA } from "@/components/home/fixed-cta";
import CasesSection from "@/components/CasesSection";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { Testimonials } from "@/components/ui/Testimonials";
import { buildMetadata } from "@/lib/metadata";
import { isLocale, type AppLocale } from "@/lib/i18n";

function getHomeCopy(locale: AppLocale) {
  if (locale === "en") {
    return {
      title: "UNTI Digital | Websites, platforms, and integrations built to scale",
      description: "UNTI Digital designs websites, web platforms, CRM and ERP integrations, and technical support for operations that need authority and predictability."
    };
  }

  if (locale === "es") {
    return {
      title: "UNTI Digital | Sitios, plataformas e integraciones para escalar",
      description: "UNTI Digital dise?a sitios, plataformas web, integraciones con CRM y ERP y apoyo t?cnico para operaciones que necesitan autoridad y previsibilidad."
    };
  }

  return {
    title: "UNTI Digital | Sites, plataformas e integra??es para escalar com previsibilidade",
    description: "A UNTI Digital projeta sites, plataformas web, integra??es com CRM e ERP e apoio t?cnico para opera??es que precisam crescer com autoridade e seguran?a."
  };
}

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const resolvedLocale: AppLocale = isLocale(locale) ? locale : "pt";
  const copy = getHomeCopy(resolvedLocale);

  return buildMetadata({
    locale: resolvedLocale,
    title: copy.title,
    description: copy.description
  });
}

export default function HomePage() {
  return (
    <>
      <SectionReveal>
        <Hero />
      </SectionReveal>
      <SectionReveal>
        <LogoCarousel />
      </SectionReveal>
      <SectionReveal>
        <Segmentation />
      </SectionReveal>
      <SectionReveal>
        <HowWeWork />
      </SectionReveal>
      <SectionReveal>
        <ServicesCarousel />
      </SectionReveal>
      <SectionReveal>
        <CasesSection />
      </SectionReveal>
      <SectionReveal>
        <Testimonials />
      </SectionReveal>
      <SectionReveal>
        <FeatureBlocks />
      </SectionReveal>
      <SectionReveal>
        <BlogGrid />
      </SectionReveal>
      <SectionReveal>
        <FinalCTA />
      </SectionReveal>
      <FixedCTA />
    </>
  );
}
