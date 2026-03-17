"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { HeroCarousel } from "./hero-carousel";
import { ParticlesHero } from "./particles-hero";

export function Hero() {
  return (
    <div className="w-full">
      {/* Top Block - Centered Content with Particles Background */}
      <section className="relative w-full min-h-[50vh] md:min-h-[60vh] flex items-center justify-center py-8 md:py-10 overflow-hidden bg-gradient-to-br from-blue-50 to-white" style={{ willChange: "transform" }}>
        <div className="absolute inset-0 top-0 left-0 w-full h-full -z-10 overflow-hidden">
          <ParticlesHero />
        </div>

        <Container>
          <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-zinc-800 tracking-tight leading-tight">
              Soluções em tecnologia para negócios que precisam escalar com segurança.
            </h1>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                variant="primary"
                onClick={() => (window.location.href = "/contato")}
              >
                Falar com especialista
              </Button>
              <Button
                variant="secondary"
                onClick={() => (window.location.href = "/solucoes")}
              >
                Ver soluções
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Carousel Block - Full Width */}
      <HeroCarousel />
    </div>
  );
}
