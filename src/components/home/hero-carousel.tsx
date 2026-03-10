"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import sitesPlataformasImage from "@/assets/unti-digital-homepage-image-slider-servicos-sites-e-plataformas-de-alta-performance.png";
import integracoesImage from "@/assets/unti-digital-homepage-image-slider-servicos-integracoes-e-automacoes-inteligentes.png";
import whiteLabelImage from "@/assets/unti-digital-homepage-image-slider-servicos-white-label-tecnico-para-agencias.png";

interface Slide {
  title: string;
  description: string;
  ctaPrimary: string;
  ctaSecondary: string;
  image: string;
}

const slides: Slide[] = [
  {
    title: "Sites e Plataformas de Alta Performance",
    description:
      "Desenvolvemos sites institucionais e plataformas web escaláveis com foco em conversão, performance e experiência do usuário.",
    image: sitesPlataformasImage,
    ctaPrimary: "Falar com especialista",
    ctaSecondary: "Ver portfólio"
  },
  {
    title: "Integrações e Automações Inteligentes",
    description:
      "Conectamos sistemas, ERPs, CRMs e APIs para automatizar processos com integrações robustas e confiáveis.",
    image: integracoesImage,
    ctaPrimary: "Falar com especialista",
    ctaSecondary: "Ver cases"
  },
  {
    title: "White-label técnico para agências",
    description:
      "Oferecemos suporte técnico especializado para agências digitais que precisam escalar projetos com segurança.",
    image: whiteLabelImage,
    ctaPrimary: "Falar com especialista",
    ctaSecondary: "Ver soluções"
  }
];

export function HeroCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setActiveSlide(index);
  };

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const currentSlide = slides[activeSlide];

  return (
    <div className="max-w-[1100px] mx-auto mt-20 md:mt-24 px-6 relative">
      {/* Slide Content */}
      <div className="flex flex-col items-center text-center space-y-8">
        {/* Image/Video Area */}
        <div className="relative w-full max-w-3xl mx-auto md:max-w-4xl lg:max-w-5xl aspect-video rounded-xl overflow-hidden shadow-lg">
          <img
            src={currentSlide.image}
            alt={currentSlide.title}
            className="absolute inset-0 w-full h-full object-cover transition-all duration-1000"
          />
        </div>

        {/* Dynamic Headline */}
        <h2 className="text-2xl md:text-3xl font-bold text-unti-dark max-w-3xl">
          {currentSlide.title}
        </h2>

        {/* Description */}
        <p className="text-base md:text-lg text-gray-600 max-w-2xl leading-relaxed">
          {currentSlide.description}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            variant="primary"
            onClick={() => window.location.href = '/contato'}
          >
            {currentSlide.ctaPrimary}
          </Button>
          <Button
            variant="secondary"
            onClick={() => window.location.href = '/cases'}
          >
            {currentSlide.ctaSecondary}
          </Button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-2 pt-4">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all ${index === activeSlide
                ? "w-8 h-2 bg-unti-blue"
                : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
                } rounded-full`}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Navigation Arrows - Centered Horizontally */}
      <div className="absolute top-[40%] left-0 right-0 flex justify-between px-4 pointer-events-none">
        <button
          onClick={prevSlide}
          className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors pointer-events-auto"
          aria-label="Slide anterior"
        >
          <svg className="w-6 h-6 text-unti-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors pointer-events-auto"
          aria-label="Próximo slide"
        >
          <svg className="w-6 h-6 text-unti-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
