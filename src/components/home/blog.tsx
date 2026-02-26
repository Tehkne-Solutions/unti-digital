const posts = [
  { title: "Estratégia digital", excerpt: "Como estruturar presença e conversão B2B." },
  { title: "Integrações que escalam", excerpt: "CRM, ERP e marketing conectados sem atrito." },
  { title: "Governança e LGPD", excerpt: "Boas práticas para operações críticas." },
  { title: "UX para sites enterprise", excerpt: "Hierarquia e narrativa que vendem." }
];

export function BlogSection() {
  return (
    <section className="section">
      <header className="mb-8 space-y-2">
        <h2 className="text-3xl font-semibold text-unti-dark">Blog e matérias</h2>
        <p className="text-unti-muted">Conteúdo para decisores que precisam de clareza e escala.</p>
      </header>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {posts.map((post) => (
          <article key={post.title} className="rounded-2xl border border-unti-border bg-white p-5 shadow-sm">
            <div className="aspect-video w-full rounded-xl bg-unti-light" />
            <h3 className="mt-4 text-lg font-semibold text-unti-dark">{post.title}</h3>
            <p className="mt-2 text-sm text-unti-muted">{post.excerpt}</p>
            <button className="mt-3 text-sm font-semibold text-unti-primary transition-colors hover:text-unti-accent">
              Ler matéria
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
