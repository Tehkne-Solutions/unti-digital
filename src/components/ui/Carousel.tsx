"use client";

import { ReactNode, useRef, useState, useEffect } from "react";

interface CarouselProps {
  children: ReactNode[];
  className?: string;
}

export function Carousel({ children, className = "" }: CarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollButtons = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    updateScrollButtons();
    const handleResize = () => updateScrollButtons();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [children]);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.8;
      const newScrollLeft = direction === "left" 
        ? scrollRef.current.scrollLeft - scrollAmount
        : scrollRef.current.scrollLeft + scrollAmount;
      
      scrollRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth"
      });

      setTimeout(updateScrollButtons, 300);
    }
  };

  const scrollToIndex = (index: number) => {
    if (scrollRef.current) {
      const itemWidth = scrollRef.current.scrollWidth / children.length;
      scrollRef.current.scrollTo({
        left: itemWidth * index,
        behavior: "smooth"
      });
      setCurrentIndex(index);
      setTimeout(updateScrollButtons, 300);
    }
  };

  return (
    <div className={`relative ${className}`}>
      {/* Prev Button */}
      {canScrollLeft && (
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors"
          aria-label="Anterior"
        >
          <svg className="w-6 h-6 text-unti-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}

      {/* Carousel Container */}
      <div
        ref={scrollRef}
        onScroll={updateScrollButtons}
        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-6 pb-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {children.map((child, index) => (
          <div key={index} className="snap-start flex-shrink-0">
            {child}
          </div>
        ))}
      </div>

      {/* Next Button */}
      {canScrollRight && (
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors"
          aria-label="Próximo"
        >
          <svg className="w-6 h-6 text-unti-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}

      {/* Dots Navigation */}
      <div className="flex justify-center gap-2 mt-6">
        {children.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex 
                ? "bg-unti-blue w-8" 
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
