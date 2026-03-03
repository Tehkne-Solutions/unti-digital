"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";

interface Slide {
  title: string;
  description: string;
  primaryCTA: string;
  secondaryCTA: string;
  image: string;
}

const slides: Slide[] = [
  {
    title: "Sites e Plataformas de Alta Performance",
    description: "Desenvolvemos sites institucionais e plataformas web escaláveis com foco em conversão, performance e experiência do usuário.",
    primaryCTA: "Falar com especialista",
    secondaryCTA: "Ver portfólio",
    image: "gradient-1"
  },
  {
    title: "Integrações e Automações Inteligentes",
    description: "Conecte seus sistemas (CRM, ERP, e-commerce) e automatize processos com integrações robustas e confiáveis.",
    primaryCTA: "Falar com especialista",
    secondaryCTA: "Ver casos de uso",
    image: "gradient-2"
  },
  {
    title: "White Label Técnico para Agências",
    description: "Desenvolvimento sob demanda com sua marca. Entregas pontuais, qualidade garantida e total confidencialidade.",
    primaryCTA: "Falar com especialista",
    secondaryCTA: "Conhecer parceria",
    image: "gradient-3"
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

  const gradients = [
    "from-unti-pastel via-unti-light to-unti-blue",
    "from-blue-100 via-purple-100 to-pink-100",
    "from-green-100 via-teal-100 to-blue-100"
  ];

  return (
    <div className="max-w-[1100px] mx-auto mt-20 md:mt-24 px-6 relative">
      {/* Slide Content */}
      <div className="flex flex-col items-center text-center space-y-8">
        {/* Image/Video Area */}
        <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg">
          <div className={`absolute inset-0 bg-gradient-to-br ${gradients[activeSlide]} transition-all duration-1000`}>
            {/* Pattern Overlay */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                backgroundSize: '60px 60px'
              }} />
            </div>
          </div>
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
            {currentSlide.primaryCTA}
          </Button>
          <Button
            variant="secondary"
            onClick={() => window.location.href = '/cases'}
          >
            {currentSlide.secondaryCTA}
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
