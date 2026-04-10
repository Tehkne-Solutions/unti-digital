import Link from "next-intl/link";
import { getIntegrationsContent } from "@/data/integrations-content";
import { buildMetadata } from "@/lib/metadata";
import { isLocale, type AppLocale } from "@/lib/i18n";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const resolvedLocale: AppLocale = isLocale(locale) ? locale : "pt";
  const content = getIntegrationsContent(resolvedLocale);

  return buildMetadata({
    locale: resolvedLocale,
    title: content.seoTitle,
    description: content.seoDescription,
    pathname: "/integracoes"
  });
}

export default function IntegracoesPage({ params: { locale } }: { params: { locale: AppLocale } }) {
  const content = getIntegrationsContent(locale);

  return (
    <div className="bg-white text-brand-dark">
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/50 to-white py-20 md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(57,108,255,0.18),transparent_34%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.66),rgba(255,255,255,0.88))]" />

        <Container className="relative z-10">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-unti-blue">{content.eyebrow}</p>
            <h1 className="mt-4 text-4xl font-bold leading-tight text-brand-dark md:text-6xl">{content.title}</h1>
            <p className="mt-5 max-w-3xl text-lg text-brand-muted">{content.description}</p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contato" className="no-underline hover:no-underline">
                <Button variant="primary">{content.ctaPrimary}</Button>
              </Link>
              <Link href="/cases" className="no-underline hover:no-underline">
                <Button variant="secondary">{content.ctaSecondary}</Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <Section>
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {content.benefits.map((benefit) => (
              <article key={benefit.title} className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.05)]">
                <h2 className="text-2xl font-semibold text-brand-dark">{benefit.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-brand-muted">{benefit.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-[#f7faff]">
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold text-brand-dark md:text-4xl">{content.useCasesTitle}</h2>
            <p className="mt-4 text-lg text-brand-muted">{content.useCasesDescription}</p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {content.useCases.map((item) => (
              <article key={item.title} className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.05)]">
                <h3 className="text-xl font-semibold text-brand-dark">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-muted">{item.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold text-brand-dark md:text-4xl">{content.processTitle}</h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {content.process.map((item, index) => (
              <article key={item.title} className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.05)]">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-unti-blue">0{index + 1}</p>
                <h3 className="mt-4 text-xl font-semibold text-brand-dark">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-muted">{item.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
}
