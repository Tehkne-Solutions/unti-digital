export function Clients() {
  return (
    <section className="section space-y-6 text-center">
      <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-unti-dark">Empresas com projeto Unti Digital</h3>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {Array.from({ length: 8 }).map((_, idx) => (
          <div
            key={idx}
            className="flex h-16 items-center justify-center rounded-md border border-unti-border bg-unti-surface text-sm text-unti-muted"
          >
            Logo
          </div>
        ))}
      </div>
    </section>
  );
}
