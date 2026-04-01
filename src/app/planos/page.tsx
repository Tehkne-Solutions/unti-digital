"use client";

import { useState } from "react";
import { PricingTabs } from "@/components/sections/PricingTabs";
import { DetailedComparison } from "@/components/sections/DetailedComparison";
import { LogoCarousel } from "@/components/ui/LogoCarousel";
import { Testimonials } from "@/components/ui/Testimonials";
import { PricingForm } from "@/components/ui/PricingForm";
import { PricingFooter } from "@/components/sections/PricingFooter";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { CheckCircle2 } from "lucide-react";

export default function PricingPage() {
  // Estado centralizado para sincronizar Cards e Tabela Detalhada
  const [activeTab, setActiveTab] = useState<"empresas" | "agencias">("empresas");

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow bg-white pt-20">
        
        {/* 1. SEÇÃO DE PLANOS (ABAS) - FIEL AO ELEMENTOR ANTIGO */}
        <PricingTabs activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* 2. TABELA COMPARATIVA - DETALHES TÉCNICOS INTEGRADOS */}
        <DetailedComparison category={activeTab} />

        {/* 3. AUTORIDADE: QUEM JÁ ESTÁ COM A UNTI */}
        <LogoCarousel />
        <Testimonials />

        {/* 4. SEÇÃO CTA AZUL & FORMULÁRIO */}
        <Section id="contato-planos" className="py-24 bg-blue-600 text-white">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-extrabold mb-8 tracking-tight">
                  Pronto para elevar a sua presença digital?
                </h2>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <CheckCircle2 className="text-blue-200 w-6 h-6" />
                    <span className="font-medium">Análise técnica gratuita baseada nos planos {activeTab}.</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <CheckCircle2 className="text-blue-200 w-6 h-6" />
                    <span className="font-medium">Proposta personalizada entregue em até 24h.</span>
                  </div>
                </div>
              </div>
              <PricingForm defaultPlan={activeTab} />
            </div>
          </Container>
        </Section>
      </main>

      {/* 5. RODAPÉ ESTRUTURADO */}
      <PricingFooter />
    </div>
  );
}