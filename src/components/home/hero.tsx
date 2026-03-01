"use client";

import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { HeroMedia } from "./hero-media";

export function Hero() {
  return (
    <Section className="pt-12 md:pt-20">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            {/* Eyebrow */}
            <div className="text-sm font-medium text-unti-blue uppercase tracking-wide">
              UNTI DIGITAL
            </div>

            {/* H1 */}
            <h1 className="text-4xl md:text-5xl font-bold text-unti-dark tracking-tight leading-tight">
              Soluções em tecnologia para negócios que precisam escalar com segurança.
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-gray-600 leading-relaxed">
              Desenvolvemos sites, plataformas e integrações críticas com governança, performance e previsibilidade.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
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

          {/* Right Column - Hero Media */}
          <div className="relative">
            <HeroMedia />
          </div>
        </div>
      </Container>
    </Section>
  );
}
