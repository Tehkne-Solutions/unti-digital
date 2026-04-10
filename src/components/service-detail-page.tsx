import Link from "next-intl/link";
import type { Service } from "@/data/services";
import { PageShell } from "@/components/page-shell";

type ServiceDetailLabels = {
  eyebrow: string;
  contact: string;
  cases: string;
  overview: string;
  differentials: string;
  deliverables: string;
  nextStep: string;
  nextDescription: string;
  briefing: string;
};

export function ServiceDetailPage({ service, labels }: { service: Service; labels: ServiceDetailLabels }) {
  return (
    <PageShell
      eyebrow={labels.eyebrow}
      title={service.title}
      description={service.description}
      actions={[
        { href: "/contato", label: labels.contact },
        { href: "/cases", label: labels.cases }
      ]}
    >
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <article className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.05)]">
          <h2 className="text-xl font-semibold text-brand-dark">{labels.overview}</h2>
          <p className="mt-3 text-sm leading-relaxed text-brand-muted">{service.fullDescription}</p>

          <h3 className="mt-8 text-lg font-semibold text-brand-dark">{labels.differentials}</h3>
          <ul className="mt-4 grid gap-2 text-sm text-brand-muted">
            {service.bullets.map((item) => (
              <li key={item} className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">{item}</li>
            ))}
          </ul>
        </article>

        <article className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.05)]">
          <h2 className="text-xl font-semibold text-brand-dark">{labels.deliverables}</h2>
          <ul className="mt-4 grid gap-2 text-sm text-brand-muted">
            {service.deliverables.map((item) => (
              <li key={item} className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">{item}</li>
            ))}
          </ul>

          <div className="mt-8 rounded-2xl bg-[#f7faff] p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-unti-blue">{labels.nextStep}</p>
            <p className="mt-3 text-sm leading-relaxed text-brand-muted">{labels.nextDescription}</p>
            <Link href="/contato" className="mt-4 inline-flex text-sm font-semibold text-unti-blue no-underline hover:no-underline">{labels.briefing}</Link>
          </div>
        </article>
      </div>
    </PageShell>
  );
}
