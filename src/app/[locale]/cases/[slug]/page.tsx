import Link from "next-intl/link";
import { notFound } from "next/navigation";
import { getCaseBySlug, getCases, getCaseCategoryThemes } from "@/data/cases";
import { CaseShowcase } from "@/components/cases/CaseShowcase";
import { buildMetadata } from "@/lib/metadata";
import { isLocale, type AppLocale } from "@/lib/i18n";
import { Container } from "@/components/ui/Container";

function getCopy(locale: AppLocale) {
  if (locale === "en") {
    return { challenge: "Challenge", delivery: "Delivery", impact: "Impact", stack: "Stack", results: "Results", cta: "Talk about a similar project" };
  }

  if (locale === "es") {
    return { challenge: "Desafío", delivery: "Entrega", impact: "Impacto", stack: "Stack", results: "Resultados", cta: "Hablar sobre un proyecto similar" };
  }

  return { challenge: "Desafio", delivery: "Entrega", impact: "Impacto", stack: "Stack", results: "Resultados", cta: "Falar sobre um projeto parecido" };
}

export function generateStaticParams() {
  return getCases("pt").map((caseItem) => ({ slug: caseItem.slug }));
}

export async function generateMetadata({ params: { locale, slug } }: { params: { locale: string; slug: string } }) {
  const resolvedLocale: AppLocale = isLocale(locale) ? locale : "pt";
  const caseItem = getCaseBySlug(resolvedLocale, slug);
  if (!caseItem) return {};

  return buildMetadata({
    locale: resolvedLocale,
    title: caseItem.seoTitle,
    description: caseItem.metaDescription,
    pathname: `/cases/${slug}`,
    image: caseItem.imagemBanner,
    type: "article"
  });
}

export default function CasePage({ params: { locale, slug } }: { params: { locale: AppLocale; slug: string } }) {
  const caseItem = getCaseBySlug(locale, slug);
  if (!caseItem) notFound();

  const copy = getCopy(locale);
  const theme = getCaseCategoryThemes(locale)[caseItem.categoria];

  return (
    <div className="bg-white text-brand-dark">
      <section className="bg-gradient-to-br from-slate-50 via-blue-50/50 to-white py-16 md:py-20">
        <Container>
          <div className="max-w-4xl">
            <span className={`inline-flex rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] ${theme.badgeClassName}`}>
              {theme.label}
            </span>
            <h1 className="mt-4 text-4xl font-bold leading-tight text-brand-dark md:text-6xl">{caseItem.cliente}</h1>
            <p className="mt-5 text-lg text-brand-muted">{caseItem.tagline}</p>
          </div>
        </Container>
      </section>

      <Container className="py-12 md:py-16">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.05)]">
            <p className="text-sm leading-relaxed text-brand-muted">{caseItem.resumo}</p>

            <div className="mt-8 space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-brand-dark">{copy.challenge}</h2>
                <p className="mt-3 text-sm leading-relaxed text-brand-muted">{caseItem.desafio}</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-brand-dark">{copy.delivery}</h2>
                <p className="mt-3 text-sm leading-relaxed text-brand-muted">{caseItem.entrega}</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-brand-dark">{copy.impact}</h2>
                <p className="mt-3 text-sm leading-relaxed text-brand-muted">{caseItem.impacto}</p>
              </div>
            </div>
          </article>

          <article className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.05)]">
            <h2 className="text-xl font-semibold text-brand-dark">{copy.stack}</h2>
            <ul className="mt-4 grid gap-2 text-sm text-brand-muted sm:grid-cols-2">
              {caseItem.tecnologias.map((tech) => (
                <li key={tech} className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">{tech}</li>
              ))}
            </ul>

            <h2 className="mt-8 text-xl font-semibold text-brand-dark">{copy.results}</h2>
            <ul className="mt-4 grid gap-2 text-sm text-brand-muted">
              {caseItem.resultados.map((result) => (
                <li key={result} className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">{result}</li>
              ))}
            </ul>

            <Link href="/contato" className="mt-8 inline-flex text-sm font-semibold text-unti-blue no-underline hover:no-underline">{copy.cta}</Link>
          </article>
        </div>

        <div className="mt-12">
          <CaseShowcase alt={caseItem.cliente} imagemPrint={caseItem.imagemPrint} />
        </div>
      </Container>
    </div>
  );
}
