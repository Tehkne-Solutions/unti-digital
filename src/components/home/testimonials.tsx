export function Testimonials() {
  return (
    <section className="section">
      <header className="mb-8 space-y-2">
        <h2 className="text-3xl font-semibold text-unti-dark">Depoimentos</h2>
        <p className="text-unti-muted">Clientes comentam sobre resultados e parceria.</p>
      </header>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, idx) => (
          <article
            key={idx}
            className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-unti-border bg-white p-6 text-center shadow-sm"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-unti-primarySoft text-unti-primary">▶</div>
            <p className="text-sm text-unti-muted">Depoimento em vídeo</p>
          </article>
        ))}
      </div>
    </section>
  );
}
