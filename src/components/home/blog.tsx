export function BlogSection() {
  return (
    <section className="section">
      <header className="mb-8 space-y-2">
        <h2 className="text-3xl font-semibold text-unti-dark uppercase">BLOG E MATERIAS</h2>
        <p className="text-unti-muted">Conteúdo placeholder conforme wireframe.</p>
      </header>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, idx) => (
          <article key={idx} className="rounded-2xl border border-unti-border bg-white p-5">
            <div className="aspect-video w-full rounded-xl bg-unti-light" />
            <h3 className="mt-4 text-lg font-semibold text-unti-dark">TITULO DO ARTIGO</h3>
            <p className="mt-2 text-sm text-unti-muted">
              Texto placeholder para resumo do artigo conforme o wireframe apresentado.
            </p>
            <div className="mt-3 space-y-2 text-xs text-unti-muted">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod, urna eu tincidunt consequat,
                urna turpis ultricies.
              </p>
              <p>
                Morbi ut sapien a erat facilisis gravida. Vestibulum ante ipsum primis in faucibus orci luctus et
                ultrices posuere cubilia.
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
