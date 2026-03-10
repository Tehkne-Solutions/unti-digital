"use client";

import { useState } from "react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";
import { services, Service } from "@/data/services";

export function ServicesCarousel() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <Section>
      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-unti-dark mb-4">
            Nossas soluções digitais
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Serviços desenvolvidos para empresas e agências que precisam de performance, segurança e escala.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.slug} className="">
              <Card className="h-full">
                {/* Image */}
                <div className="aspect-video bg-gradient-to-br from-unti-pastel to-unti-light rounded-lg mb-4 flex items-center justify-center">
                  <svg className="w-16 h-16 text-unti-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-xl font-medium text-unti-dark">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.shortDescription}
                  </p>
                  <Button
                    variant="link"
                    onClick={() => setSelectedService(service)}
                    className="p-0"
                  >
                    Ver detalhes →
                  </Button>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </Container>

      {/* Service Modal */}
      {selectedService && (
        <Modal
          isOpen={!!selectedService}
          onClose={() => setSelectedService(null)}
          title={selectedService.title}
        >
          <div className="grid md:grid-cols-2 gap-10">
            {/* Left Column - Content */}
            <div className="space-y-6">
              {/* Description */}
              <p className="text-gray-700 leading-relaxed">
                {selectedService.fullDescription}
              </p>

              {/* Bullets */}
              <div>
                <h4 className="font-semibold text-unti-dark mb-3">Diferenciais</h4>
                <ul className="space-y-2">
                  {selectedService.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-unti-blue mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 text-sm">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Deliverables */}
              <div>
                <h4 className="font-semibold text-unti-dark mb-3">Entregáveis</h4>
                <ul className="space-y-2">
                  {selectedService.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-unti-orange mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Button
                  variant="primary"
                  onClick={() => window.location.href = '/contato'}
                >
                  Falar com especialista
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => window.location.href = '/cases'}
                >
                  Ver cases
                </Button>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="hidden md:block">
              <div className="aspect-square bg-gradient-to-br from-unti-pastel to-unti-light rounded-2xl flex items-center justify-center">
                <svg className="w-32 h-32 text-unti-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </Section>
  );
}
