"use client";

import { useState } from "react";
import { useLocale } from "next-intl";
import type { AppLocale } from "@/lib/i18n";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { getServicesContent, type Service } from "@/data/services";

export function ServicesGrid() {
  const locale = useLocale() as AppLocale;
  const { services, labels, title, subtitle } = getServicesContent(locale);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <Section>
      <Container>
        <div className="mb-16">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">{title}</h2>
          <p className="max-w-2xl text-lg text-gray-600">{subtitle}</p>
        </div>

        <div className="grid gap-10 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.slug}
              className="group rounded-xl border border-gray-200 p-8 transition-all duration-200 hover:shadow-lg"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-unti-blue/10">
                <div className="h-6 w-6 rounded bg-unti-blue" />
              </div>

              <h3 className="mb-3 text-xl font-medium">{service.title}</h3>
              <p className="mb-6 line-clamp-3 text-gray-600">{service.description}</p>

              <button
                type="button"
                onClick={() => setSelectedService(service)}
                className="inline-flex items-center gap-2 font-medium text-unti-blue hover:underline"
              >
                {labels.viewDetails}
              </button>
            </div>
          ))}
        </div>
      </Container>

      <Modal
        isOpen={selectedService !== null}
        onClose={() => setSelectedService(null)}
        title={selectedService?.title || ""}
      >
        {selectedService ? (
          <div className="space-y-6">
            <p className="text-gray-600">{selectedService.fullDescription}</p>

            <div>
              <h4 className="mb-3 font-medium">{labels.differentials}</h4>
              <ul className="space-y-2">
                {selectedService.bullets.map((bullet, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-unti-blue" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-3 font-medium">{labels.deliverables}</h4>
              <ul className="space-y-2">
                {selectedService.deliverables.map((deliverable, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-unti-blue" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{deliverable}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex gap-4 pt-4">
              <Button variant="primary" className="flex-1">
                {labels.contactExpert}
              </Button>
              <Button variant="secondary" className="flex-1">
                {labels.viewCases}
              </Button>
            </div>
          </div>
        ) : null}
      </Modal>
    </Section>
  );
}
