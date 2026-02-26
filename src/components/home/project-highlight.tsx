export function ProjectHighlight() {
  return (
    <section className="section grid items-center gap-10 md:grid-cols-2">
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-unti-muted">Projeto destaque</p>
        <h2 className="text-3xl font-semibold text-unti-dark">Projeto site SAVOL</h2>
        <p className="text-unti-muted">
          Redesenho completo do site institucional com foco em conversão, SEO e integração a sistemas internos.
        </p>
        <button className="inline-flex rounded-md border border-unti-border bg-white px-4 py-2 text-sm font-semibold text-unti-dark transition-colors hover:border-unti-muted">
          Ver detalhes
        </button>
      </div>
      <div className="aspect-[4/3] w-full rounded-2xl bg-unti-light" />
    </section>
  );
}
