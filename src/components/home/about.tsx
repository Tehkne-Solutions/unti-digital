export function About() {
  return (
    <section className="section grid items-center gap-10 md:grid-cols-2">
      <div className="space-y-4">
        <h2 className="text-3xl font-semibold text-unti-dark">Sobre a UNTI Digital</h2>
        <p className="text-unti-dark">
          Apoiamos empresas na construção de presença digital e operação integrada, com foco em segurança, governança e
          resultados mensuráveis.
        </p>
        <button className="inline-flex items-center rounded-md border border-unti-primary bg-white px-4 py-2 text-sm font-semibold text-unti-primary transition-colors hover:bg-unti-light">
          Saiba mais
        </button>
      </div>
      <div className="h-[400px] w-full rounded-2xl bg-unti-pastel" />
    </section>
  );
}
