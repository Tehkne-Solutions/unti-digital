import { notFound } from "next/navigation";
import { ServiceDetailPage } from "@/components/service-detail-page";
import { getServiceBySlug, getServices } from "@/data/services";
import { getSolutionDetailLabels } from "@/data/solution-page-copy";
import { buildMetadata } from "@/lib/metadata";
import { isLocale, locales, type AppLocale } from "@/lib/i18n";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    getServices(locale).map((service) => ({
      locale,
      slug: service.slug
    }))
  );
}

export async function generateMetadata({
  params: { locale, slug }
}: {
  params: { locale: string; slug: string };
}) {
  const resolvedLocale: AppLocale = isLocale(locale) ? locale : "pt";
  const service = getServiceBySlug(resolvedLocale, slug);

  if (!service) {
    return buildMetadata({
      locale: resolvedLocale,
      title: "Serviço | UNTI Digital",
      description: "Serviços digitais da UNTI Digital.",
      pathname: `/solucoes/${slug}`
    });
  }

  return buildMetadata({
    locale: resolvedLocale,
    title: service.seoTitle,
    description: service.metaDescription,
    pathname: `/solucoes/${slug}`
  });
}

export default function DynamicServicePage({
  params: { locale, slug }
}: {
  params: { locale: AppLocale; slug: string };
}) {
  const service = getServiceBySlug(locale, slug);

  if (!service) {
    notFound();
  }

  return <ServiceDetailPage service={service} labels={getSolutionDetailLabels(locale)} />;
}
