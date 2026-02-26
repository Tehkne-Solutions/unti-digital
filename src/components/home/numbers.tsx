export function Numbers() {
  return (
    <section className="section">
      <div className="rounded-3xl bg-unti-primary p-16 text-white">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold">Nossos números falam por si</h2>
            <p className="text-white/85">Entrega consistente, governança e previsibilidade.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <select className="rounded-md border border-white/60 bg-transparent px-3 py-2 text-sm text-white">
              <option className="text-unti-dark">Últimos 12 meses</option>
              <option className="text-unti-dark">Últimos 6 meses</option>
              <option className="text-unti-dark">Últimos 3 meses</option>
            </select>
            <button className="rounded-md bg-unti-cta px-4 py-2 text-sm font-semibold text-unti-surface hover:brightness-95">
              Solicite uma reunião
            </button>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, idx) => (
            <div key={idx} className="rounded-2xl bg-white/10 p-5 backdrop-blur">
              <div className="text-3xl font-bold">2 mil+</div>
              <div className="mt-1 text-sm text-white/80">Projetos entregues</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
