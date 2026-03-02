"use client";

import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Modal } from '@/components/ui/Modal';
import { Button } from '@/components/ui/Button';
import { services } from '@/data/services';
import { useState } from 'react';
import type { Service } from '@/data/services';

export function ServicesGrid() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  return (
    <Section>
      <Container>
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-unti-dark mb-4">
            Nossas soluções
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            Serviços estruturados para empresas que buscam performance, escalabilidade e governança técnica.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service) => (
            <div
              key={service.slug}
              className="group p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-200"
            >
              <div className="w-12 h-12 rounded-lg bg-unti-blue/10 flex items-center justify-center mb-6">
                <div className="w-6 h-6 bg-unti-blue rounded" />
              </div>
              
              <h3 className="text-xl font-medium text-unti-dark mb-3">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 line-clamp-3">
                {service.description}
              </p>
              
              <button
                onClick={() => setSelectedService(service)}
                className="text-unti-blue font-medium hover:underline inline-flex items-center gap-2"
              >
                Ver detalhes →
              </button>
            </div>
          ))}
        </div>
      </Container>

      {/* Service Modal */}
      <Modal
        isOpen={selectedService !== null}
        onClose={() => setSelectedService(null)}
        title={selectedService?.title || ''}
      >
        {selectedService && (
          <div className="space-y-6">
            <p className="text-gray-600">{selectedService.fullDescription}</p>

            <div>
              <h4 className="font-medium text-unti-dark mb-3">Diferenciais</h4>
              <ul className="space-y-2">
                {selectedService.bullets.map((bullet, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-unti-blue mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-medium text-unti-dark mb-3">O que você recebe</h4>
              <ul className="space-y-2">
                {selectedService.deliverables.map((deliverable, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-unti-blue mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{deliverable}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex gap-4 pt-4">
              <Button variant="primary" className="flex-1">
                Solicitar orçamento
              </Button>
              <Button variant="secondary" className="flex-1">
                Falar com especialista
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </Section>
  );
}
