import { ServiceDetailPage } from "@/components/service-detail-page";
import { getServiceBySlug } from "@/data/services";
import { getSolutionDetailLabels } from "@/data/solution-page-copy";
import { buildMetadata } from "@/lib/metadata";
import { isLocale, type AppLocale } from "@/lib/i18n";

const slug = "integracoes-crm-erp";

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const resolvedLocale: AppLocale = isLocale(locale) ? locale : "pt";
  const service = getServiceBySlug(resolvedLocale, slug)!;
  return buildMetadata({ locale: resolvedLocale, title: service.seoTitle, description: service.metaDescription, pathname: `/solucoes/${slug}` });
}

export default function IntegracoesCrmErpPage({ params: { locale } }: { params: { locale: AppLocale } }) {
  const service = getServiceBySlug(locale, slug)!;
  return <ServiceDetailPage service={service} labels={getSolutionDetailLabels(locale)} />;
}
