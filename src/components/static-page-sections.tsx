import type { PageSection } from "@/data/site-pages";

export function StaticPageSections({ sections }: { sections: PageSection[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {sections.map((section) => (
        <article key={section.title} className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.05)]">
          <h2 className="text-xl font-semibold text-brand-dark">{section.title}</h2>
          <p className="mt-3 text-sm leading-relaxed text-brand-muted">{section.description}</p>
          {section.items?.length ? (
            <ul className="mt-4 grid gap-2 text-sm text-brand-muted">
              {section.items.map((item) => (
                <li key={item} className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">
                  {item}
                </li>
              ))}
            </ul>
          ) : null}
        </article>
      ))}
    </div>
  );
}
