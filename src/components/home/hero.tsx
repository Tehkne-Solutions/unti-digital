"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { HeroCarousel } from "./hero-carousel";

export function Hero() {
  return (
    <div className="w-full">
      <section
        className="relative flex min-h-[58vh] w-full items-center justify-center overflow-hidden bg-cover bg-center py-12 md:min-h-[68vh] md:py-16"
        style={{
          backgroundImage:
            "linear-gradient(120deg, rgba(255,255,255,0.94), rgba(255,255,255,0.8)), url('/images/unti-digital-homepage-image-hero-bg.jpeg')",
          willChange: "transform",
          clipPath: "inset(0)"
        }}
      >
        <Container>
          <div className="relative z-10 mx-auto max-w-4xl space-y-8 text-center">
            <div className="space-y-5">
              <span className="inline-flex rounded-full border border-unti-blue/20 bg-white/70 px-4 py-2 text-sm font-medium text-unti-blue shadow-sm backdrop-blur">
                Tecnologia sob medida para crescer com previsibilidade
              </span>

              <h1 className="text-3xl font-bold leading-tight tracking-tight text-brand-dark md:text-5xl">
                Soluções em tecnologia para negócios que precisam escalar com segurança.
              </h1>

              <p className="mx-auto max-w-2xl text-base leading-relaxed text-brand-muted md:text-lg">
                Projetamos sites, plataformas web e integrações com foco em performance, experiência e operação digital sem gargalos.
              </p>
            </div>

            <div className="flex flex-col justify-center gap-4 pt-2 sm:flex-row">
              <Button variant="primary" onClick={() => (window.location.href = "/contato")}>
                Falar com especialista
              </Button>
              <Button variant="secondary" onClick={() => (window.location.href = "/solucoes")}>
                Ver soluções
              </Button>
            </div>

            <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-6 rounded-[28px] border border-white/70 bg-white/60 px-6 py-5 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur">
              <div>
                <p className="text-2xl font-bold text-brand-dark">Projetos sob medida</p>
                <p className="text-sm text-brand-muted">Arquitetura, UX e engenharia orientadas a resultado.</p>
              </div>
              <div className="hidden h-12 w-px bg-slate-200 md:block" />
              <div>
                <p className="text-2xl font-bold text-brand-dark">Integrações críticas</p>
                <p className="text-sm text-brand-muted">CRM, ERP e automações conectadas com segurança.</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <HeroCarousel />
    </div>
  );
}
