const items = [
  { title: "Sites institucionais", description: "Arquitetura, UX e performance para conversão B2B." },
  { title: "Plataformas web", description: "Portais e áreas logadas para operações críticas." },
  { title: "Integrações e automações", description: "CRM, ERP e marketing conectados sem atrito." }
];

export function Services() {
  return (
    <section className="section">
      <header className="mb-10 space-y-2">
        <h2 className="text-3xl font-semibold text-unti-dark">Serviços</h2>
        <p className="text-unti-muted">Soluções completas para presença digital e operação integrada.</p>
      </header>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <article
            key={item.title}
            className="group rounded-2xl border border-unti-border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-unti-primarySoft text-unti-primary font-semibold">
              •
            </div>
            <h3 className="mt-4 text-lg font-semibold text-unti-dark">{item.title}</h3>
            <p className="mt-2 text-sm text-unti-muted">{item.description}</p>
            <button className="mt-4 text-sm font-semibold text-unti-primary transition-colors hover:text-unti-accent">
              Saiba mais
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
