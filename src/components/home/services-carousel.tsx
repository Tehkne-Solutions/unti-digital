"use client";

import { useState } from "react";
import Image from "next/image";
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
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-brand-dark md:text-4xl">
            Nossas soluções digitais
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-brand-muted">
            Serviços desenvolvidos para empresas e agências que precisam de performance, segurança e escala.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.slug} className="group">
              <Card className="flex h-full flex-col border border-neutral-200 bg-white p-8 shadow-[0_18px_50px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="relative mb-6 aspect-video overflow-hidden rounded-2xl">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="flex h-full flex-col space-y-4">
                  <h3 className="text-xl font-semibold text-brand-dark">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-brand-muted">
                    {service.shortDescription}
                  </p>

                  <div className="mt-auto pt-3">
                    <Button
                      variant="link"
                      className="!h-auto !px-0 text-sm font-semibold"
                      onClick={() => setSelectedService(service)}
                    >
                      Ver detalhes →
                    </Button>
                  </div>
                </div>
              </Card>
            </article>
          ))}
        </div>
      </Container>

      {selectedService && (
        <Modal
          isOpen={!!selectedService}
          onClose={() => setSelectedService(null)}
          title={selectedService.title}
        >
          <div className="grid gap-10 md:grid-cols-2">
            <div className="space-y-6">
              <p className="leading-relaxed text-brand-muted">
                {selectedService.fullDescription}
              </p>

              <div>
                <h4 className="mb-3 font-semibold text-brand-dark">Diferenciais</h4>
                <ul className="space-y-2">
                  {selectedService.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-unti-blue" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-brand-muted">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-brand-dark">Entregáveis</h4>
                <ul className="space-y-2">
                  {selectedService.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-unti-orange" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-brand-muted">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-3 pt-4 sm:flex-row">
                <Button variant="primary" onClick={() => (window.location.href = "/contato")}>
                  Falar com especialista
                </Button>
                <Button variant="secondary" onClick={() => (window.location.href = "/cases")}>
                  Ver cases
                </Button>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="relative aspect-square overflow-hidden rounded-[28px]">
                <Image
                  src={selectedService.image}
                  alt={selectedService.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </Modal>
      )}
    </Section>
  );
}
