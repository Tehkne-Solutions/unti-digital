"use client";

import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

interface CaseStudy {
  client: string;
  result: string;
  description: string;
  background: string;
}

const cases: CaseStudy[] = [
  {
    client: "Empresa de Tecnologia",
    result: "Aumento de 180% em conversões",
    description: "Plataforma web escalável com integração completa de CRM e automação de processos, resultando em crescimento exponencial de leads qualificados.",
    background: "bg-unti-pastel"
  },
  {
    client: "E-commerce de Moda",
    result: "3x mais vendas online",
    description: "Loja virtual otimizada com checkout simplificado e integração com múltiplos gateways de pagamento, aumentando significativamente a taxa de conversão.",
    background: "bg-white"
  },
  {
    client: "Agência de Marketing",
    result: "Redução de 60% no tempo de entrega",
    description: "Sistema de gestão de projetos customizado com automações inteligentes, permitindo escalar operações sem aumentar equipe.",
    background: "bg-blue-50"
  }
];

export function CaseStudies() {
  return (
    <Section>
      <Container>
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-unti-dark mb-4">
            Projetos que geram impacto real
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl">
            Empresas que escalaram sua presença digital com soluções desenvolvidas pela Unti Digital.
          </p>
        </div>

        {/* Cases Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((caseStudy, index) => (
            <div
              key={index}
              className={`${caseStudy.background} rounded-2xl p-8 space-y-4`}
            >
              {/* Client Label */}
              <div className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                {caseStudy.client}
              </div>

              {/* Result Headline */}
              <h3 className="text-2xl font-bold text-unti-dark">
                {caseStudy.result}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {caseStudy.description}
              </p>

              {/* CTA */}
              <Button 
                variant="link" 
                className="p-0"
                onClick={() => window.location.href = '/cases'}
              >
                Ver case →
              </Button>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
