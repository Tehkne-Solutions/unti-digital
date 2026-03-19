"use client";

import { ReactNode, useCallback, useEffect, useRef, useState } from "react";

interface CarouselProps {
  children: ReactNode[];
  className?: string;
  pageCount?: number;
  autoScrollSpeed?: number;
  pauseOnHover?: boolean;
  viewportPadding?: string;
}

interface CarouselMetrics {
  itemWidth: number;
  paddingLeft: number;
  loopWidth: number;
}

export function Carousel({
  children,
  className = "",
  pageCount,
  autoScrollSpeed = 0,
  pauseOnHover = false,
  viewportPadding = "1rem"
}: CarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isHoveredRef = useRef(false);
  const suppressClickRef = useRef(false);
  const dragStateRef = useRef({
    active: false,
    startX: 0,
    scrollLeft: 0
  });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isDragging, setIsDragging] = useState(false);

  const logicalPageCount = pageCount ?? children.length;
  const isLooping = logicalPageCount < children.length;

  const getMetrics = useCallback((): CarouselMetrics | null => {
    if (!scrollRef.current) return null;

    const firstItem = scrollRef.current.querySelector<HTMLElement>("[data-carousel-item]");
    if (!firstItem) return null;

    const styles = window.getComputedStyle(scrollRef.current);
    const gap = parseFloat(styles.columnGap || styles.gap || "0");
    const paddingLeft = parseFloat(styles.paddingLeft || "0");

    return {
      itemWidth: firstItem.offsetWidth + gap,
      paddingLeft,
      loopWidth: logicalPageCount * (firstItem.offsetWidth + gap)
    };
  }, [logicalPageCount]);

  const updateStateFromScroll = useCallback(() => {
    if (!scrollRef.current) return;

    const metrics = getMetrics();
    if (!metrics) return;

    const rawOffset = Math.max(scrollRef.current.scrollLeft - metrics.paddingLeft, 0);
    const logicalOffset = isLooping
      ? ((rawOffset % metrics.loopWidth) + metrics.loopWidth) % metrics.loopWidth
      : rawOffset;
    const nextIndex = Math.round(logicalOffset / metrics.itemWidth) % logicalPageCount;

    setCurrentIndex(nextIndex);

    if (isLooping) {
      setCanScrollLeft(true);
      setCanScrollRight(true);
      return;
    }

    const maxScrollLeft = scrollRef.current.scrollWidth - scrollRef.current.clientWidth - 2;
    setCanScrollLeft(scrollRef.current.scrollLeft > 2);
    setCanScrollRight(scrollRef.current.scrollLeft < maxScrollLeft);
  }, [getMetrics, isLooping, logicalPageCount]);

  const normalizeLoopPosition = useCallback(() => {
    if (!scrollRef.current || !isLooping) return;

    const metrics = getMetrics();
    if (!metrics) return;

    const minLeft = metrics.paddingLeft + metrics.itemWidth;
    const maxLeft = metrics.paddingLeft + metrics.loopWidth * 2 - metrics.itemWidth * 2;

    if (scrollRef.current.scrollLeft <= minLeft) {
      scrollRef.current.scrollLeft += metrics.loopWidth;
    } else if (scrollRef.current.scrollLeft >= maxLeft) {
      scrollRef.current.scrollLeft -= metrics.loopWidth;
    }
  }, [getMetrics, isLooping]);

  useEffect(() => {
    const initCarousel = () => {
      if (!scrollRef.current) return;

      const metrics = getMetrics();
      if (!metrics) return;

      if (isLooping) {
        scrollRef.current.scrollLeft = metrics.paddingLeft + metrics.loopWidth;
      }

      updateStateFromScroll();
    };

    initCarousel();
    window.addEventListener("resize", initCarousel);

    return () => window.removeEventListener("resize", initCarousel);
  }, [children.length, isLooping, logicalPageCount, updateStateFromScroll, viewportPadding, getMetrics]);

  useEffect(() => {
    if (!autoScrollSpeed) return;

    let frameId = 0;

    const tick = () => {
      if (
        scrollRef.current &&
        !isDragging &&
        (!pauseOnHover || !isHoveredRef.current)
      ) {
        scrollRef.current.scrollLeft += autoScrollSpeed;
        normalizeLoopPosition();
        updateStateFromScroll();
      }

      frameId = window.requestAnimationFrame(tick);
    };

    frameId = window.requestAnimationFrame(tick);

    return () => window.cancelAnimationFrame(frameId);
  }, [autoScrollSpeed, isDragging, pauseOnHover, children.length, logicalPageCount, normalizeLoopPosition, updateStateFromScroll]);

  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return;

    const metrics = getMetrics();
    if (!metrics) return;

    const normalizedIndex = ((index % logicalPageCount) + logicalPageCount) % logicalPageCount;
    let physicalIndex = normalizedIndex;

    if (isLooping) {
      const currentPhysicalIndex =
        (scrollRef.current.scrollLeft - metrics.paddingLeft) / metrics.itemWidth;
      const blockBase =
        Math.floor(currentPhysicalIndex / logicalPageCount) * logicalPageCount;

      physicalIndex = blockBase + normalizedIndex;

      if (physicalIndex - currentPhysicalIndex > logicalPageCount / 2) {
        physicalIndex -= logicalPageCount;
      } else if (currentPhysicalIndex - physicalIndex > logicalPageCount / 2) {
        physicalIndex += logicalPageCount;
      }
    }

    scrollRef.current.scrollTo({
      left: metrics.paddingLeft + physicalIndex * metrics.itemWidth,
      behavior: "smooth"
    });

    setCurrentIndex(normalizedIndex);
  };

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!scrollRef.current) return;

    dragStateRef.current = {
      active: true,
      startX: event.clientX,
      scrollLeft: scrollRef.current.scrollLeft
    };
    suppressClickRef.current = false;
    setIsDragging(true);
    scrollRef.current.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!scrollRef.current || !dragStateRef.current.active) return;

    const distance = event.clientX - dragStateRef.current.startX;
    if (Math.abs(distance) > 6) {
      suppressClickRef.current = true;
    }

    scrollRef.current.scrollLeft = dragStateRef.current.scrollLeft - distance;
    normalizeLoopPosition();
    updateStateFromScroll();
  };

  const handlePointerEnd = () => {
    dragStateRef.current.active = false;
    setIsDragging(false);
  };

  return (
    <div className={`relative ${className}`}>
      <button
        onClick={() => scrollToIndex(currentIndex - 1)}
        disabled={!isLooping && !canScrollLeft}
        className={`absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-3 shadow-lg transition-colors md:left-4 ${
          !isLooping && !canScrollLeft
            ? "cursor-not-allowed opacity-40"
            : "hover:bg-gray-50"
        }`}
        aria-label="Anterior"
      >
        <svg className="h-6 w-6 text-unti-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <div
        ref={scrollRef}
        onScroll={() => {
          normalizeLoopPosition();
          updateStateFromScroll();
        }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerEnd}
        onPointerCancel={handlePointerEnd}
        onPointerLeave={handlePointerEnd}
        onMouseEnter={() => {
          if (pauseOnHover) {
            isHoveredRef.current = true;
          }
        }}
        onMouseLeave={() => {
          if (pauseOnHover) {
            isHoveredRef.current = false;
          }
        }}
        onClickCapture={(event) => {
          if (suppressClickRef.current) {
            event.preventDefault();
            event.stopPropagation();
            suppressClickRef.current = false;
          }
        }}
        className={`flex gap-6 overflow-x-auto pb-6 scrollbar-hide ${isDragging ? "cursor-grabbing" : "cursor-grab"} snap-x snap-mandatory`}
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          paddingLeft: viewportPadding,
          paddingRight: viewportPadding
        }}
      >
        {children.map((child, index) => (
          <div key={index} data-carousel-item className="snap-center flex-shrink-0 select-none">
            {child}
          </div>
        ))}
      </div>

      <button
        onClick={() => scrollToIndex(currentIndex + 1)}
        disabled={!isLooping && !canScrollRight}
        className={`absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-3 shadow-lg transition-colors md:right-4 ${
          !isLooping && !canScrollRight
            ? "cursor-not-allowed opacity-40"
            : "hover:bg-gray-50"
        }`}
        aria-label="Próximo"
      >
        <svg className="h-6 w-6 text-unti-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className="mt-6 flex justify-center gap-2">
        {Array.from({ length: logicalPageCount }).map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToIndex(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex
                ? "w-8 bg-unti-blue"
                : "w-2 bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
