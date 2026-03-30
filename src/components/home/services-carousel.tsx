"use client";

import {
  animate,
  motion,
  useAnimationFrame,
  useMotionValue,
  type AnimationPlaybackControls,
  type PanInfo
} from "framer-motion";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";
import { services, Service } from "@/data/services";

const AUTO_SCROLL_PX_PER_SECOND = 90;
const INTERACTION_PAUSE_DELAY = 1400;

export function ServicesCarousel() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [groupWidth, setGroupWidth] = useState(0);
  const [stepWidth, setStepWidth] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [isTemporarilyPaused, setIsTemporarilyPaused] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const firstCardRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<AnimationPlaybackControls | null>(null);
  const resumeTimeoutRef = useRef<number | null>(null);
  const suppressClickRef = useRef(false);
  const dragDistanceRef = useRef(0);
  const activeIndexRef = useRef(0);
  const x = useMotionValue(0);
  const infiniteServices = [...services, ...services, ...services];

  const clearResumeTimeout = useCallback(() => {
    if (resumeTimeoutRef.current !== null) {
      window.clearTimeout(resumeTimeoutRef.current);
      resumeTimeoutRef.current = null;
    }
  }, []);

  const stopAnimation = useCallback(() => {
    animationRef.current?.stop();
    animationRef.current = null;
  }, []);

  const pauseAutoplayTemporarily = useCallback(() => {
    clearResumeTimeout();
    setIsTemporarilyPaused(true);
    resumeTimeoutRef.current = window.setTimeout(() => {
      setIsTemporarilyPaused(false);
      resumeTimeoutRef.current = null;
    }, INTERACTION_PAUSE_DELAY);
  }, [clearResumeTimeout]);

  const normalizeX = useCallback(
    (value: number) => {
      if (!groupWidth) return value;

      let nextValue = value;

      while (nextValue > -groupWidth) {
        nextValue -= groupWidth;
      }

      while (nextValue <= -2 * groupWidth) {
        nextValue += groupWidth;
      }

      return nextValue;
    },
    [groupWidth]
  );

  const updateActiveIndexFromX = useCallback(
    (value: number) => {
      if (!groupWidth || !stepWidth) return;

      const logicalOffset =
        (((-value - groupWidth) % groupWidth) + groupWidth) % groupWidth;
      const nextIndex =
        Math.floor((logicalOffset + stepWidth / 2) / stepWidth) % services.length;

      activeIndexRef.current = nextIndex;
      setActiveIndex((current) => (current === nextIndex ? current : nextIndex));
    },
    [groupWidth, stepWidth]
  );

  const resolveTargetX = useCallback(
    (index: number) => {
      if (!groupWidth || !stepWidth) return x.get();

      const normalizedIndex = ((index % services.length) + services.length) % services.length;
      const itemOffset = normalizedIndex * stepWidth;
      const currentX = x.get();
      const candidates = [
        -itemOffset,
        -(groupWidth + itemOffset),
        -(2 * groupWidth + itemOffset)
      ];

      return candidates.reduce((closest, candidate) => {
        return Math.abs(candidate - currentX) < Math.abs(closest - currentX)
          ? candidate
          : closest;
      });
    },
    [groupWidth, stepWidth, x]
  );

  const animateToX = useCallback(
    (targetX: number) => {
      stopAnimation();
      pauseAutoplayTemporarily();

      animationRef.current = animate(x, targetX, {
        duration: 0.8,
        ease: "easeInOut",
        onUpdate: (latest) => {
          updateActiveIndexFromX(latest);
        },
        onComplete: () => {
          const normalized = normalizeX(x.get());
          x.set(normalized);
          updateActiveIndexFromX(normalized);
          animationRef.current = null;
        }
      });
    },
    [normalizeX, pauseAutoplayTemporarily, stopAnimation, updateActiveIndexFromX, x]
  );

  const goToIndex = useCallback(
    (index: number) => {
      const normalizedIndex = ((index % services.length) + services.length) % services.length;
      const targetX = resolveTargetX(normalizedIndex);
      activeIndexRef.current = normalizedIndex;
      setActiveIndex(normalizedIndex);
      animateToX(targetX);
    },
    [animateToX, resolveTargetX]
  );

  const handleCardClick = (service: Service) => {
    if (suppressClickRef.current) return;

    pauseAutoplayTemporarily();
    setSelectedService(service);
  };

  const handleDragStart = () => {
    stopAnimation();
    clearResumeTimeout();
    setIsTemporarilyPaused(true);
    setIsDragging(true);
    dragDistanceRef.current = 0;
    suppressClickRef.current = false;
  };

  const handleDrag = (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    dragDistanceRef.current += info.delta.x;

    if (Math.abs(dragDistanceRef.current) > 6) {
      suppressClickRef.current = true;
    }

    const normalized = normalizeX(x.get());
    if (normalized !== x.get()) {
      x.set(normalized);
    }

    updateActiveIndexFromX(normalized);
  };

  const handleDragEnd = () => {
    setIsDragging(false);

    if (!stepWidth || !groupWidth) {
      setIsTemporarilyPaused(false);
      return;
    }

    const logicalOffset =
      (((-x.get() - groupWidth) % groupWidth) + groupWidth) % groupWidth;
    const nearestIndex = Math.round(logicalOffset / stepWidth) % services.length;

    activeIndexRef.current = nearestIndex;
    setActiveIndex(nearestIndex);
    animateToX(resolveTargetX(nearestIndex));

    window.setTimeout(() => {
      dragDistanceRef.current = 0;
      suppressClickRef.current = false;
    }, 0);
  };

  useLayoutEffect(() => {
    const measureTrack = () => {
      const track = trackRef.current;
      const firstCard = firstCardRef.current;
      if (!track || !firstCard) return;

      const styles = window.getComputedStyle(track);
      const gap = parseFloat(styles.columnGap || styles.gap || "0");
      const nextStepWidth = firstCard.offsetWidth + gap;
      const nextGroupWidth = services.length * nextStepWidth;
      const nextX = -(nextGroupWidth + activeIndexRef.current * nextStepWidth);

      stopAnimation();
      setStepWidth(nextStepWidth);
      setGroupWidth(nextGroupWidth);
      x.set(nextX);
      updateActiveIndexFromX(nextX);
    };

    measureTrack();
    window.addEventListener("resize", measureTrack);

    return () => window.removeEventListener("resize", measureTrack);
  }, [stopAnimation, updateActiveIndexFromX, x]);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.35
      }
    );

    observer.observe(viewport);

    return () => observer.disconnect();
  }, []);

  useAnimationFrame((_time, delta) => {
    if (
      !groupWidth ||
      !stepWidth ||
      isHovered ||
      isDragging ||
      isTemporarilyPaused ||
      !isInView ||
      !!selectedService ||
      animationRef.current
    ) {
      return;
    }

    const nextX = normalizeX(x.get() - AUTO_SCROLL_PX_PER_SECOND * (delta / 1000));
    x.set(nextX);
    updateActiveIndexFromX(nextX);
  });

  useEffect(() => {
    return () => {
      clearResumeTimeout();
      stopAnimation();
    };
  }, [clearResumeTimeout, stopAnimation]);

  return (
    <Section className="overflow-hidden">
      <Container>
        <div className="mb-16 text-left">
          <h2 className="mb-4 text-3xl font-bold text-brand-dark md:text-4xl">
            Nossas soluções digitais
          </h2>
          <p className="max-w-3xl text-lg text-brand-muted">
            Serviços desenvolvidos para empresas e agências que precisam de performance, segurança e escala.
          </p>
        </div>

        <div className="relative">
          <button
            type="button"
            onClick={() => goToIndex(activeIndexRef.current - 1)}
            className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-3 shadow-lg transition-colors hover:bg-gray-50"
            aria-label="Anterior"
          >
            <svg className="h-6 w-6 text-unti-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div
            ref={viewportRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="overflow-hidden"
          >
            <motion.div
              ref={trackRef}
              drag="x"
              dragElastic={0.04}
              dragMomentum={false}
              onDragStart={handleDragStart}
              onDrag={handleDrag}
              onDragEnd={handleDragEnd}
              style={{ x }}
              className="flex w-max gap-6 cursor-grab active:cursor-grabbing"
            >
              {infiniteServices.map((service, index) => {
                const isAgencyService = service.slug === "white-label-agencias";

                return (
                  <article
                    key={`${service.slug}-${index}`}
                    ref={index === services.length ? firstCardRef : undefined}
                    role="button"
                    tabIndex={0}
                    onClick={() => handleCardClick(service)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        handleCardClick(service);
                      }
                    }}
                    className="group w-[320px] flex-shrink-0 cursor-pointer sm:w-[360px]"
                  >
                    <Card
                      className={`flex h-full min-h-[420px] flex-col rounded-2xl border p-8 shadow-[0_18px_50px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                        isAgencyService
                          ? "border-blue-500 bg-blue-600 text-white"
                          : "border-neutral-200 bg-white"
                      }`}
                    >
                      <div className="relative mb-6 aspect-video overflow-hidden rounded-2xl">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>

                      <div className="flex h-full flex-col space-y-4">
                        <h3 className={`text-xl font-semibold ${isAgencyService ? "text-white" : "text-brand-dark"}`}>
                          {service.title}
                        </h3>
                        <p className={`text-sm leading-relaxed ${isAgencyService ? "text-blue-50" : "text-brand-muted"}`}>
                          {service.shortDescription}
                        </p>

                        <div className="mt-auto pt-3">
                          <Button
                            type="button"
                            variant="link"
                            className={`!h-auto !px-0 text-sm font-semibold ${
                              isAgencyService ? "text-white hover:text-white/80" : ""
                            }`}
                            onClick={(event) => {
                              event.stopPropagation();
                              handleCardClick(service);
                            }}
                          >
                            Ver detalhes →
                          </Button>
                        </div>
                      </div>
                    </Card>
                  </article>
                );
              })}
            </motion.div>
          </div>

          <button
            type="button"
            onClick={() => goToIndex(activeIndexRef.current + 1)}
            className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-3 shadow-lg transition-colors hover:bg-gray-50"
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
