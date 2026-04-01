"use client";

import React from "react";
import Image from "next/image";
import { logosData } from "@/data/logos";

export const LogoCarousel = () => {
  // Duplicamos a lista para criar o efeito infinito sem saltos
  const duplicatedLogos = [...logosData, ...logosData];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 mb-10 text-center">
        <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-400">
          Empresas que confiam na nossa engenharia
        </h2>
      </div>

      {/* Container do Carrossel com Máscara de Gradiente */}
      <div className="relative flex items-center">
        {/* Efeito de Fade nas laterais */}
        <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-white to-transparent z-10" />

        {/* Linha de Animação */}
        <div className="flex animate-infinite-scroll gap-16 md:gap-24 items-center whitespace-nowrap">
          {duplicatedLogos.map((logo, index) => (
            <div
              key={`${logo.id}-${index}`}
              className="flex-shrink-0 w-[150px] md:w-[200px] h-20 relative grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 ease-in-out cursor-pointer p-4"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};