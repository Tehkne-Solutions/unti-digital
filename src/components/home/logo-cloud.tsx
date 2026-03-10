"use client";

import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { clients } from "@/data/clients";
import Image from "next/image";
import { useState } from "react";

export function LogoCloud() {
  const [activeClient, setActiveClient] = useState<{ name: string; logo: string } | null>(null);

  return (
    <Section>
      <Container>
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-600">
            Empresas que confiam na Unti Digital
          </h2>
        </div>

        {/* Continuous logo marquee */}
        <div className="overflow-hidden">
          <div className="flex space-x-12 animate-marquee">
            {clients.concat(clients).map((client, index) => (
              <button
                key={index}
                onClick={() => setActiveClient(client)}
                className="flex items-center justify-center grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={120}
                  height={60}
                  className="object-contain"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Client Modal */}
        {activeClient && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={() => setActiveClient(null)}
          >
            <div
              className="bg-white p-8 rounded-lg max-w-md w-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={activeClient.logo}
                alt={activeClient.name}
                width={200}
                height={100}
                className="mx-auto mb-4 object-contain"
              />
              <h3 className="text-center text-xl font-semibold">{activeClient.name}</h3>
            </div>
          </div>
        )}
      </Container>
    </Section>
  );
}
