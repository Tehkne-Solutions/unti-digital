"use client";

import React, { useState } from "react";
import Image from "next/image";
import ClientModal from "@/components/ClientModal";
import { clients } from "@/data/clients";

export const LogoCarousel = () => {
  const [selectedClient, setSelectedClient] = useState<typeof clients[number] | null>(null);

  // Duplicamos a lista para criar o efeito infinito sem saltos
  const duplicatedClients = [...clients, ...clients];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 mb-10 text-center">
        <h2 className="mb-4 text-3xl font-bold text-brand-dark md:text-4xl">
          Empresas que confiam na nossa engenharia
        </h2>
        <p className="text-brand-muted">
          Clique em um cliente para ver o projeto e resultados alcançados
        </p>
      </div>

      {/* Container do Carrossel com Máscara de Gradiente */}
      <div className="relative flex items-center">
        {/* Efeito de Fade nas laterais */}
        <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-white to-transparent z-10" />

        {/* Linha de Animação */}
        <div className="flex animate-infinite-scroll gap-16 md:gap-24 items-center whitespace-nowrap">
          {duplicatedClients.map((client, index) => (
            <button
              key={`${client.id}-${index}`}
              onClick={() => setSelectedClient(client)}
              className="flex-shrink-0 w-[150px] md:w-[200px] h-20 relative grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 ease-in-out cursor-pointer p-4"
            >
              <Image
                src={client.logo}
                alt={client.name}
                fill
                className="object-contain"
              />
            </button>
          ))}
        </div>
      </div>

      <ClientModal client={selectedClient} onClose={() => setSelectedClient(null)} />
    </section>
  );
};