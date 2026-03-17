"use client";

import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { clients } from "@/data/clients";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import ClientModal from "@/components/ClientModal";

export function LogoCloud() {
  const [activeClient, setActiveClient] = useState<typeof clients[0] | null>(null);

  return (
    <Section>
      <Container>
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 text-center mb-4">
            Tecnologia que impulsiona empresas reais
          </h2>
          <p className="text-gray-500">
            Clique em um cliente para ver o projeto e resultados alcançados
          </p>
        </div>

        {/* Continuous logo marquee */}
        <div className="overflow-hidden mb-16">
          <div className="flex space-x-12 animate-marquee items-center">
            {clients.map((client, index) => (
              <motion.button
                key={`${client.id}-${index}`}
                onClick={() => setActiveClient(client)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center px-6 py-4 grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={120}
                  height={60}
                  className="h-14 w-auto object-contain"
                />
              </motion.button>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-gray-600 mb-4">
            Quer alcançar resultados como esses?
          </p>
          <a
            href="/contato"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors font-medium"
          >
            Falar com especialista
          </a>
        </div>

        {/* Client Modal */}
        <ClientModal
          client={activeClient}
          onClose={() => setActiveClient(null)}
        />
      </Container>
    </Section>
  );
}
