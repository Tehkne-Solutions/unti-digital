"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
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
    <Section className="pt-24 pb-16 bg-white overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <h1 className="text-4xl md:text-6xl font-extrabold text-zinc-900 tracking-tight mb-6">
              A engenharia que transforma seu orçamento em um <span className="text-blue-600">ativo de performance.</span>
            </h1>
            <p className="text-xl text-zinc-600 leading-relaxed">
              Não construímos apenas sites; projetamos infraestruturas digitais que escalam o seu faturamento. Escolha o plano que representa o próximo nível do seu negócio.
            </p>
          </motion.div>
          <div className="relative h-[400px] rounded-[32px] overflow-hidden shadow-2xl">
            <Image
              src="/images/unti-digital-homepage-image-slider-servicos-sites-e-plataformas-de-alta-performance.png"
              alt="Engenharia de Performance UNTI"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </Container>
    </Section>
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

        {/* SEÇÃO CTA AZUL - RETIFICADA */}
        <Section id="contato-planos" className="py-24 bg-blue-600 text-white">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-white">
                    Pronto para tirar a sua presença digital da inércia?
                  </h2>
                  <p className="text-blue-100 text-lg leading-relaxed">
                    Seja você uma empresa em busca de liderança ou uma agência precisando de um braço tecnológico de elite, a UNTI entrega a engenharia necessária.
                  </p>
                </div>

                <div className="relative h-[300px] w-full rounded-2xl overflow-hidden border border-blue-400/30">
                  <Image
                    src="/images/unti-digital-homepage-image-parceria-estrategica-para-crescimento-digital.png"
                    alt="Atendimento UNTI Digital"
                    fill
                    className="object-cover opacity-90"
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <CheckCircle2 className="text-white w-6 h-6" />
                    <span className="font-medium text-white">Análise técnica gratuita baseada nos planos.</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <CheckCircle2 className="text-white w-6 h-6" />
                    <span className="font-medium text-white">Proposta personalizada entregue em até 24h.</span>
                  </div>
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