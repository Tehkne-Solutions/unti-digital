"use client";

import Image from "next/image";
import { useState } from "react";
import { PricingTabs } from "@/components/sections/PricingTabs";
import { DetailedComparison } from "@/components/sections/DetailedComparison";
import { ServicesCarousel } from "@/components/home/services-carousel";
import { LogoCarousel } from "@/components/ui/LogoCarousel";
import { Testimonials } from "@/components/ui/Testimonials";
import { PricingForm } from "@/components/ui/PricingForm";
import { PricingFooter } from "@/components/sections/PricingFooter";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

function HeroPlanos() {
  return (
    <section className="bg-white py-20">
      <Container>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-500">Planos</p>
            <h1 className="mt-4 text-3xl font-extrabold text-zinc-900 sm:text-4xl lg:text-5xl">
              A engenharia que transforma seu orçamento em ativo de performance.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-zinc-600">
              Escolha o plano que impulsionará seu próximo nível de escala. Não construímos apenas sites; projetamos infraestruturas digitais que escalam o seu faturamento.
            </p>
          </div>
          <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-4">
            <Image
              src="/images/contact-mockup.png"
              alt="Mockup de contato"
              width={700}
              height={420}
              className="w-full rounded-2xl object-contain"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default function PricingPage() {
  const [activeTab, setActiveTab] = useState<"empresas" | "agencias">("empresas");

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-grow bg-white">
        <HeroPlanos />

        {/* 1. SEÇÃO DE PLANOS (ABAS) - FIEL AO ELEMENTOR ANTIGO */}
        <PricingTabs activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* 2. TABELA COMPARATIVA - DETALHES TÉCNICOS INTEGRADOS */}
        <DetailedComparison category={activeTab} />

        {/* 3. SERVIÇOS DE AUTORIDADE */}
        <ServicesCarousel />

        {/* 4. AUTORIDADE: QUEM JÁ ESTÁ COM A UNTI */}
        <LogoCarousel />
        <Testimonials />

        {/* 5. SEÇÃO CTA AZUL & FORMULÁRIO (Transmutação de Hierarquia) */}
        <Section id="contato-planos" className="py-24 bg-blue-600 text-white">
          <Container>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 items-start">
              <div className="space-y-6">
                <h2 className="text-4xl font-extrabold leading-tight">Pronto para tirar a sua presença digital da inércia?</h2>
                <p className="text-lg leading-relaxed text-white/90">
                  Seja você uma empresa em busca de liderança ou uma agência precisando de um braço tecnológico de elite, a UNTI entrega a engenharia necessária para você focar apenas no que importa: <strong>o seu crescimento</strong>.
                </p>
                <ul className="space-y-3 text-sm text-white/90">
                  <li>• Diagnóstico de Engenharia: análise técnica gratuita da sua estrutura atual.</li>
                  <li>• Transparência de Código: propriedade total e documentação clara desde o dia 1.</li>
                  <li>• Proposta sob Medida: cronograma de execução focado no seu ROI.</li>
                </ul>

                <div className="mt-6 w-full max-w-md rounded-2xl border border-white/20 bg-white/10 p-4">
                  <Image
                    src="/images/contact-mockup.png"
                    alt="Mockup de contato UNTI"
                    width={640}
                    height={320}
                    className="w-full object-contain"
                  />
                </div>
              </div>

              <PricingForm defaultPlan={activeTab} />
            </div>
          </Container>
        </Section>
      </main>

      <PricingFooter />
    </div>
  );
}