import Link from "next/link";
import { LeadModal } from "@/components/lead-modal";

export function Hero() {
  return (
    <section className="section relative overflow-hidden rounded-3xl bg-gradient-to-br from-unti-primarySoft via-white to-unti-light shadow-sm">
      <div className="relative z-10 max-w-3xl space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-unti-muted">UNTI DIGITAL</p>
        <h1 className="text-4xl font-bold leading-tight text-unti-dark md:text-5xl">
          Soluções em tecnologia para negócios inteligentes
        </h1>
        <p className="text-lg text-unti-muted">
          Sites, plataformas web e integrações críticas com a governança e previsibilidade que seu time precisa.
        </p>
        <div className="flex flex-wrap gap-3">
          <LeadModal />
          <Link
            href="/servicos"
            className="rounded-md border border-unti-border bg-white px-4 py-2 text-sm font-semibold text-unti-dark transition-colors hover:border-unti-muted"
          >
            Conhecer serviços
          </Link>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-unti-accent/10 via-transparent to-unti-primary/10" />
    </section>
  );
}
