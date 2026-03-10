"use client";

import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export function Segmentation() {
  return (
    <Section>
      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-unti-dark mb-4">
            Para quem desenvolvemos soluções digitais
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Atendemos empresas que precisam escalar com segurança e agências que buscam um parceiro técnico estratégico.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Card Empresas */}
          <Card className="p-10">
            <div className="space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-unti-pastel">
                <svg className="w-8 h-8 text-unti-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-unti-dark">
                Empresas
              </h3>

              {/* Bullets */}
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-unti-blue mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Sites e plataformas de alta performance</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-unti-blue mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Integrações com CRM, ERP e sistemas internos</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-unti-blue mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Governança e previsibilidade técnica</span>
                </li>
              </ul>

              {/* CTA */}
              <div className="pt-4">
                <Button variant="link" onClick={() => window.location.href = '/solucoes/empresas'}>
                  Ver soluções para empresas →
                </Button>
              </div>
            </div>
          </Card>

          {/* Card Agências */}
          <Card className="p-10">
            <div className="space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-unti-pastel">
                <svg className="w-8 h-8 text-unti-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-unti-dark">
                Agências
              </h3>

              {/* Bullets */}
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-unti-blue mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">White label técnico</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-unti-blue mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Desenvolvimento sob demanda</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-unti-blue mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Parceria estratégica de longo prazo</span>
                </li>
              </ul>

              {/* CTA */}
              <div className="pt-4">
                <Button variant="link" onClick={() => window.location.href = '/solucoes/agencias'}>
                  Ver soluções para agências →
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </Section>
  );
}
