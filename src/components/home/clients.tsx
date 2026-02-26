export function Clients() {
  return (
    <section className="section">
      <div className="rounded-2xl border border-unti-border bg-white p-8 shadow-sm">
        <h3 className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-unti-muted">
          Empresas que confiam
        </h3>
        <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
          {Array.from({ length: 8 }).map((_, idx) => (
            <div
              key={idx}
              className="flex h-16 items-center justify-center rounded-lg border border-unti-border bg-unti-light text-sm text-unti-muted"
            >
              Logo
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
