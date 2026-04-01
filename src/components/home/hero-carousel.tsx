"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

interface Slide {
  title: string;
  description: string;
  ctaPrimary: string;
  ctaSecondary: string;
  image: string;
}

const slides: Slide[] = [
  {
    title: "Sites Institucionais de Alta Performance",
    description:
      "Construimos plataformas institucionais premium para empresas que precisam unir autoridade, performance e conversao.",
    image: "/images/unti-digital-homepage-image-slider-servicos-sites-e-plataformas-de-alta-performance.png",
    ctaPrimary: "Falar com especialista",
    ctaSecondary: "Ver portfolio"
  },
  {
    title: "Integracoes com CRM e ERP",
    description:
      "Conectamos CRM, ERP, marketing e operacao para eliminar retrabalho e dar previsibilidade ao fluxo de dados.",
    image: "/images/unti-digital-homepage-image-slider-servicos-integracoes-e-automacoes-inteligentes.png",
    ctaPrimary: "Falar com especialista",
    ctaSecondary: "Ver cases"
  },
  {
    title: "White Label Técnico para Agências",
    description:
      "Atuamos como braco tecnologico invisivel para agencias que precisam ampliar capacidade com confidencialidade e padrao enterprise.",
    image: "/images/unti-digital-homepage-image-slider-servicos-white-label-tecnico-para-agencias.png",
    ctaPrimary: "Falar com especialista",
    ctaSecondary: "Ver solucoes"
  }
];

export function HeroCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 11000);
    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const goToSlide = (index: number) => {
    setActiveSlide(index);
    setIsAutoPlay(true);
  };

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlay(true);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlay(true);
  };

  const currentSlide = slides[activeSlide];

  return (
    <div className="relative mx-auto mt-0 max-w-[760px] px-6">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSlide}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          className="flex flex-col items-center space-y-8 text-center"
        >
          <div className="relative mx-auto aspect-video w-full max-w-2xl overflow-hidden rounded-xl shadow-lg">
            <Image
              src={currentSlide.image}
              alt={currentSlide.title}
              fill
              className="object-cover transition-transform duration-700 ease-out"
            />
          </div>

          <h2 className="max-w-3xl text-2xl font-bold md:text-3xl">
            {currentSlide.title}
          </h2>

          <p className="max-w-2xl text-base leading-relaxed text-gray-600 md:text-lg">
            {currentSlide.description}
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button variant="primary" onClick={() => (window.location.href = "/contato")}>
              {currentSlide.ctaPrimary}
            </Button>
            <Button variant="secondary" onClick={() => (window.location.href = "/cases")}>
              {currentSlide.ctaSecondary}
            </Button>
          </div>

          <div className="flex justify-center gap-2 pt-4">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`rounded-full transition-all ${
                  index === activeSlide
                    ? "h-2 w-8 bg-unti-blue"
                    : "h-2 w-2 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="pointer-events-none absolute left-0 right-0 top-[40%] flex justify-between px-4">
        <button
          onClick={prevSlide}
          className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg transition-colors hover:bg-gray-50"
          aria-label="Slide anterior"
        >
          <svg className="h-6 w-6 text-unti-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg transition-colors hover:bg-gray-50"
          aria-label="Proximo slide"
        >
          <svg className="h-6 w-6 text-unti-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
