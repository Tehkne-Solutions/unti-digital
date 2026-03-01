"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { HeroCarousel } from "./hero-carousel";

export function Hero() {
  return (
    <div className="w-full">
      {/* Top Block - Centered Content */}
      <section className="pt-20 pb-16 md:pt-28 md:pb-20">
        <Container>
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Eyebrow */}
            <div className="text-sm font-medium text-unti-blue uppercase tracking-wide">
              UNTI DIGITAL
            </div>

            {/* H1 */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-unti-dark tracking-tight leading-tight">
              Soluções em tecnologia para negócios que precisam escalar com segurança.
            </h1>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button 
                variant="primary"
                onClick={() => window.location.href = '/contato'}
              >
                Falar com especialista
              </Button>
              <Button 
                variant="secondary"
                onClick={() => window.location.href = '/solucoes'}
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
