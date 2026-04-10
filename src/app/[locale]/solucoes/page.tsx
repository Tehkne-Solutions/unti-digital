import Link from "next-intl/link";
import { getServices } from "@/data/services";
import { getSolutionsPageCopy } from "@/data/solution-page-copy";
import { buildMetadata } from "@/lib/metadata";
import { isLocale, type AppLocale } from "@/lib/i18n";
import { Container } from "@/components/ui/Container";

function getAudienceLabel(locale: AppLocale, audience: "companies" | "agencies" | "shared") {
  if (locale === "en") {
    return audience === "agencies" ? "Agency" : audience === "companies" ? "Company" : "Shared";
  }

  if (locale === "es") {
    return audience === "agencies" ? "Agencia" : audience === "companies" ? "Empresa" : "Compartido";
  }

  return audience === "agencies" ? "Agência" : audience === "companies" ? "Empresa" : "Compartilhado";
}

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const resolvedLocale: AppLocale = isLocale(locale) ? locale : "pt";
  const copy = getSolutionsPageCopy(resolvedLocale);
  return buildMetadata({ locale: resolvedLocale, title: copy.title, description: copy.description, pathname: "/solucoes" });
}

export default function SolucoesPage({ params: { locale } }: { params: { locale: AppLocale } }) {
  const services = getServices(locale);
  const copy = getSolutionsPageCopy(locale);

  return (
    <div className="w-full bg-white">
      <section className="bg-gradient-to-br from-slate-50 via-blue-50/50 to-white py-20 md:py-24">
        <Container>
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-unti-blue">{copy.eyebrow}</p>
            <h1 className="mt-4 text-4xl font-bold leading-tight text-zinc-900 md:text-6xl">{copy.title}</h1>
            <p className="mt-5 max-w-3xl text-lg text-zinc-600">{copy.description}</p>
            <Link href="/contato" className="mt-8 inline-flex h-12 items-center justify-center rounded-xl bg-unti-blue px-8 text-sm font-bold uppercase tracking-widest text-white no-underline shadow-[0_8px_24px_rgba(57,108,255,0.35)] transition-all hover:bg-blue-700 hover:no-underline">
              {copy.cta}
            </Link>
          </div>
        </Container>
      </section>

      <section className="bg-zinc-50 py-20">
        <Container>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <Link key={service.slug} href={service.slug === "white-label-agencias" ? "/solucoes/agencias" : `/solucoes/${service.slug}`} className="group rounded-[32px] border border-zinc-200 bg-white p-7 no-underline shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:no-underline">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-unti-blue">{getAudienceLabel(locale, service.audience)}</p>
                <h2 className="mt-4 text-2xl font-semibold text-zinc-900">{service.title}</h2>
                <p className="mt-4 text-sm leading-relaxed text-zinc-600">{service.description}</p>
                <span className="mt-6 inline-flex text-sm font-semibold text-unti-blue">{copy.explore}</span>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
