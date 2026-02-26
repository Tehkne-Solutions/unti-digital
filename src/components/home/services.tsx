const items = [
  { title: "Desenvolvimento web", description: "Sites institucionais com foco em conversão e governança." },
  { title: "Desenvolvimento web", description: "Portais e áreas logadas para operações críticas." },
  { title: "Desenvolvimento web", description: "Integrações e automações entre marketing, vendas e operação." }
];

export function Services() {
  return (
    <section className="bg-unti-pastel">
      <div className="section space-y-6">
        <header className="space-y-2 text-center">
          <h2 className="text-3xl font-semibold text-unti-dark">Serviços</h2>
          <p className="text-unti-dark">Carrossel com os serviços principais</p>
        </header>
        <div className="flex snap-x gap-4 overflow-x-auto pb-2">
          {items.map((item, idx) => (
            <article
              key={idx}
              className="min-w-[340px] snap-start rounded-2xl border border-unti-border bg-white p-6"
            >
              <div className="mb-4 h-40 w-full rounded-xl bg-unti-light" />
              <h3 className="text-lg font-semibold text-unti-dark">{item.title}</h3>
              <p className="mt-2 text-sm text-unti-muted">{item.description}</p>
              <div className="mt-4 flex flex-col gap-2">
                <button className="rounded-md bg-unti-cta px-4 py-2 text-sm font-semibold text-white hover:brightness-95">
                  Solicite uma reunião
                </button>
                <button className="rounded-md border border-unti-primary px-4 py-2 text-sm font-semibold text-unti-primary hover:bg-unti-light">
                  Conheça este serviço
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
