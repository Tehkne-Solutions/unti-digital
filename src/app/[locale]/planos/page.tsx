import { PageShell } from "@/components/page-shell";
import { StaticPageSections } from "@/components/static-page-sections";
import { getStaticPageContent } from "@/data/site-pages";
import { buildMetadata } from "@/lib/metadata";
import { isLocale, type AppLocale } from "@/lib/i18n";

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const resolvedLocale: AppLocale = isLocale(locale) ? locale : "pt";
  const content = getStaticPageContent(resolvedLocale, "plans");
  return buildMetadata({ locale: resolvedLocale, title: content.seoTitle, description: content.seoDescription, pathname: "/planos" });
}

export default function PlanosPage({ params: { locale } }: { params: { locale: AppLocale } }) {
  const content = getStaticPageContent(locale, "plans");

  return (
    <PageShell eyebrow={content.eyebrow} title={content.title} description={content.description} actions={content.actions}>
      <StaticPageSections sections={content.sections} />
    </PageShell>
  );
}
