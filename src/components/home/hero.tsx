import Link from "next/link";

export function Hero() {
  return (
    <section className="section text-center bg-unti-surface">
      <div className="mx-auto max-w-3xl space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-unti-dark">UNTI DIGITAL</p>
        <h1 className="text-4xl font-bold leading-tight tracking-tight text-unti-primary md:text-5xl">
          Soluções em tecnologia para negócios inteligentes
        </h1>
        <p className="text-lg text-unti-dark">
          Sites, plataformas web e integrações críticas com a governança e previsibilidade que seu time precisa.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/contato"
            className="rounded-md bg-unti-cta px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:brightness-95"
          >
            contato
          </Link>
          <Link
            href="/servicos"
            className="rounded-md border border-unti-primary px-5 py-2.5 text-sm font-semibold text-unti-primary transition-colors hover:bg-unti-light"
          >
            conheça as soluções
          </Link>
        </div>
      </div>
    </section>
  );
}
