"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useLocale } from "next-intl";
import { useRouter } from "next-intl/client";
import { Button } from "@/components/ui/Button";
import { getHomeContent } from "@/data/home-content";
import type { AppLocale } from "@/lib/i18n";

export function HeroCarousel() {
  const locale = useLocale() as AppLocale;
  const router = useRouter();
  const content = getHomeContent(locale).heroCarousel;
  const slides = content.slides;
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 11000);

    return () => clearInterval(interval);
  }, [isAutoPlay, slides.length]);

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
              priority={activeSlide === 0}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 ease-out"
            />
          </div>

          <h2 className="max-w-3xl text-2xl font-bold md:text-3xl">{currentSlide.title}</h2>

          <p className="max-w-2xl text-base leading-relaxed text-gray-600 md:text-lg">
            {currentSlide.description}
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button variant="primary" onClick={() => router.push(currentSlide.primaryHref)}>
              {currentSlide.ctaPrimary}
            </Button>
            <Button variant="secondary" onClick={() => router.push(currentSlide.secondaryHref)}>
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
                aria-label={`${content.goToSlideLabel} ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="pointer-events-none absolute left-0 right-0 top-[40%] flex justify-between px-4">
        <button
          onClick={prevSlide}
          className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg transition-colors hover:bg-gray-50"
          aria-label={content.prevSlideLabel}
        >
          <svg className="h-6 w-6 text-unti-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg transition-colors hover:bg-gray-50"
          aria-label={content.nextSlideLabel}
        >
          <svg className="h-6 w-6 text-unti-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
