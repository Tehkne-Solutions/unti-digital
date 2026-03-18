"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { HeroCarousel } from "./hero-carousel";

export function Hero() {
  return (
    <div className="w-full">
      {/* Top Block - Centered Content with background */}
      <section className="relative w-full min-h-[50vh] md:min-h-[60vh] flex items-center justify-center py-8 md:py-10 overflow-hidden bg-gradient-to-br from-unti-blue via-sky-600 to-indigo-700 text-white" style={{ willChange: "transform", clipPath: "inset(0)" }}>
        <Container>
          <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight leading-tight">
              Soluções em tecnologia para negócios que precisam escalar com segurança.
            </h1>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                variant="primary"
                className="interactive-btn"
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
