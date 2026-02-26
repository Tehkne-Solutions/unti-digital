export function About() {
  return (
    <section className="section grid items-center gap-10 md:grid-cols-2">
      <div className="space-y-4">
        <h2 className="text-3xl font-semibold text-unti-dark">Sobre a UNTI Digital</h2>
        <p className="text-unti-muted">
          Apoiamos empresas na construção de presença digital e operação integrada, com foco em segurança, governança e
          resultados mensuráveis.
        </p>
        <button className="inline-flex items-center rounded-md bg-unti-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-unti-accent">
          Saiba mais
        </button>
      </div>
      <div className="aspect-[4/3] w-full rounded-2xl bg-unti-primarySoft" />
    </section>
  );
}
