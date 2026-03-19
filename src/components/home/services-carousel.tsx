"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";
import { services, Service } from "@/data/services";

const AUTOPLAY_DELAY = 4200;
const INTERACTION_PAUSE_DELAY = 1800;

export function ServicesCarousel() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isInteracting, setIsInteracting] = useState(false);
  const [isTrackInView, setIsTrackInView] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Array<HTMLElement | null>>([]);
  const activeIndexRef = useRef(0);
  const interactionTimeoutRef = useRef<number | null>(null);
  const scrollFrameRef = useRef<number | null>(null);

  const clearInteractionTimeout = useCallback(() => {
    if (interactionTimeoutRef.current !== null) {
      window.clearTimeout(interactionTimeoutRef.current);
      interactionTimeoutRef.current = null;
    }
  }, []);

  const pauseAutoplayAfterInteraction = useCallback(() => {
    clearInteractionTimeout();
    setIsInteracting(true);
    interactionTimeoutRef.current = window.setTimeout(() => {
      setIsInteracting(false);
      interactionTimeoutRef.current = null;
    }, INTERACTION_PAUSE_DELAY);
  }, [clearInteractionTimeout]);

  const scrollToIndex = useCallback(
    (index: number, behavior: ScrollBehavior = "smooth") => {
      const normalizedIndex = ((index % services.length) + services.length) % services.length;
      const currentIndex = activeIndexRef.current;
      const isWrapAround =
        (currentIndex === services.length - 1 && normalizedIndex === 0) ||
        (currentIndex === 0 && normalizedIndex === services.length - 1);
      const track = trackRef.current;
      const targetCard = cardRefs.current[normalizedIndex];

      if (!track || !targetCard) return;

      const rawLeft =
        targetCard.offsetLeft - (track.clientWidth - targetCard.offsetWidth) / 2;
      const maxLeft = Math.max(track.scrollWidth - track.clientWidth, 0);
      const left = Math.min(Math.max(rawLeft, 0), maxLeft);

      track.scrollTo({
        left,
        behavior: isWrapAround ? "auto" : behavior
      });

      activeIndexRef.current = normalizedIndex;
      setActiveIndex(normalizedIndex);
    },
    []
  );

  const updateActiveIndexFromScroll = useCallback(() => {
    if (!trackRef.current) return;

    const containerRect = trackRef.current.getBoundingClientRect();
    const containerCenter = containerRect.left + containerRect.width / 2;

    let closestIndex = 0;
    let closestDistance = Number.POSITIVE_INFINITY;

    cardRefs.current.forEach((card, index) => {
      if (!card) return;

      const rect = card.getBoundingClientRect();
      const cardCenter = rect.left + rect.width / 2;
      const distance = Math.abs(containerCenter - cardCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    activeIndexRef.current = closestIndex;
    setActiveIndex((current) => (current === closestIndex ? current : closestIndex));
  }, []);

  const handleScroll = useCallback(() => {
    if (scrollFrameRef.current !== null) {
      window.cancelAnimationFrame(scrollFrameRef.current);
    }

    scrollFrameRef.current = window.requestAnimationFrame(() => {
      updateActiveIndexFromScroll();
      scrollFrameRef.current = null;
    });
  }, [updateActiveIndexFromScroll]);

  const goToIndex = (index: number) => {
    pauseAutoplayAfterInteraction();
    scrollToIndex(index);
  };

  const openService = (service: Service) => {
    pauseAutoplayAfterInteraction();
    setSelectedService(service);
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsTrackInView(entry.isIntersecting);
      },
      {
        threshold: 0.35
      }
    );

    observer.observe(track);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const initializeCarousel = () => {
      scrollToIndex(activeIndexRef.current, "auto");
      updateActiveIndexFromScroll();
    };

    initializeCarousel();
    window.addEventListener("resize", initializeCarousel);

    return () => window.removeEventListener("resize", initializeCarousel);
  }, [scrollToIndex, updateActiveIndexFromScroll]);

  useEffect(() => {
    if (!isTrackInView || isHovering || isInteracting || selectedService) return;

    const intervalId = window.setInterval(() => {
      scrollToIndex(activeIndexRef.current + 1);
    }, AUTOPLAY_DELAY);

    return () => window.clearInterval(intervalId);
  }, [isHovering, isInteracting, isTrackInView, scrollToIndex, selectedService]);

  useEffect(() => {
    return () => {
      clearInteractionTimeout();

      if (scrollFrameRef.current !== null) {
        window.cancelAnimationFrame(scrollFrameRef.current);
      }
    };
  }, [clearInteractionTimeout]);

  return (
    <Section className="overflow-hidden">
      <Container>
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-brand-dark md:text-4xl">
            Nossas soluções digitais
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-brand-muted">
            Serviços desenvolvidos para empresas e agências que precisam de performance, segurança e escala.
          </p>
        </div>
      </Container>

      <div className="relative mx-auto max-w-[1440px]">
        <button
          type="button"
          onClick={() => goToIndex(activeIndexRef.current - 1)}
          className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-3 shadow-lg transition-colors hover:bg-gray-50 md:left-4"
          aria-label="Anterior"
        >
          <svg className="h-6 w-6 text-unti-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div
          ref={trackRef}
          onScroll={handleScroll}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onPointerDown={() => pauseAutoplayAfterInteraction()}
          className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto overflow-y-hidden scroll-smooth pb-6"
          style={{
            paddingLeft: "max(1rem, calc((100% - 360px) / 2))",
            paddingRight: "max(1rem, calc((100% - 360px) / 2))",
            touchAction: "pan-y"
          }}
        >
          {services.map((service, index) => (
            <article
              key={service.slug}
              ref={(element) => {
                cardRefs.current[index] = element;
              }}
              role="button"
              tabIndex={0}
              onClick={() => openService(service)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  openService(service);
                }
              }}
              className="group w-[360px] flex-shrink-0 snap-center cursor-pointer"
            >
              <Card className="flex h-full min-h-[420px] flex-col rounded-2xl border border-neutral-200 bg-white p-8 shadow-[0_18px_50px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
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
                      type="button"
                      variant="link"
                      className="!h-auto !px-0 text-sm font-semibold"
                      onClick={(event) => {
                        event.stopPropagation();
                        openService(service);
                      }}
                    >
                      Ver detalhes →
                    </Button>
                  </div>
                </div>
              </Card>
            </article>
          ))}
        </div>

        <button
          type="button"
          onClick={() => goToIndex(activeIndexRef.current + 1)}
          className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-3 shadow-lg transition-colors hover:bg-gray-50 md:right-4"
          aria-label="Próximo"
        >
          <svg className="h-6 w-6 text-unti-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <div className="mt-6 flex justify-center gap-2">
          {services.map((service, index) => (
            <button
              key={service.slug}
              type="button"
              onClick={() => goToIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === activeIndex
                  ? "w-8 bg-unti-blue"
                  : "w-2 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Ir para slide ${index + 1}`}
              aria-current={index === activeIndex}
            />
          ))}
        </div>
      </div>

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
                <Button type="button" variant="primary" onClick={() => (window.location.href = "/contato")}>
                  Falar com especialista
                </Button>
                <Button type="button" variant="secondary" onClick={() => (window.location.href = "/cases")}>
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
