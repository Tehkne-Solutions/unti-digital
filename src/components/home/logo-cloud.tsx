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
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-600 mb-4">
            Tecnologia que impulsiona empresas reais
          </h2>
          <p className="text-gray-500">
            Clique em um cliente para ver o projeto e resultados alcançados
          </p>
        </div>

        {/* Continuous logo marquee */}
        <div className="overflow-hidden mb-16">
          <div className="flex space-x-12 animate-marquee">
            {clients.concat(clients).map((client, index) => (
              <motion.button
                key={`${client.id}-${index}`}
                onClick={() => setActiveClient(client)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex flex-col items-center justify-start p-6 grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
              >
                <div className="h-20 flex items-center justify-center mb-3">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={120}
                    height={60}
                    className="max-h-20 w-auto object-contain"
                  />
                </div>
                <div className="text-center">
                  <p className="text-xs font-medium text-gray-600 mb-1">{client.segment}</p>
                  <span className="inline-block bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs font-semibold">
                    {client.result}
                  </span>
                </div>
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
