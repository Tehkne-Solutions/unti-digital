"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next-intl/link";
import { useLocale, useTranslations } from "next-intl";
import ClientModal from "@/components/ClientModal";
import { clients } from "@/data/clients";
import { getHomeContent } from "@/data/home-content";
import type { AppLocale } from "@/lib/i18n";

export const LogoCarousel = () => {
  const locale = useLocale() as AppLocale;
  const t = useTranslations("LogoCarousel");
  const content = getHomeContent(locale).logoCarousel;
  const [selectedClient, setSelectedClient] = useState<typeof clients[number] | null>(null);

  const duplicatedClients = [...clients, ...clients];

  return (
    <section className="overflow-hidden bg-white py-20">
      <div className="container mx-auto mb-10 px-4 text-center">
        <h2 className="mb-4 text-3xl font-bold text-brand-dark md:text-4xl">{t("title")}</h2>
        <p className="text-brand-muted">{t("subtitle")}</p>
      </div>

      <div className="relative flex items-center">
        <div className="absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white to-transparent md:w-40" />
        <div className="absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white to-transparent md:w-40" />

        <div className="flex animate-infinite-scroll items-center gap-16 whitespace-nowrap md:gap-24">
          {duplicatedClients.map((client, index) => (
            <button
              key={`${client.id}-${index}`}
              onClick={() => setSelectedClient(client)}
              className="relative h-20 w-[150px] flex-shrink-0 cursor-pointer p-4 grayscale opacity-40 transition-all duration-500 ease-in-out hover:grayscale-0 hover:opacity-100 md:w-[200px]"
            >
              <Image src={client.logo} alt={client.name} fill className="object-contain" />
            </button>
          ))}
        </div>
      </div>

      <div className="mt-10 text-center">
        <Link
          href="/contato"
          className="inline-flex items-center rounded-xl border border-unti-blue px-5 py-3 text-sm font-semibold text-unti-blue no-underline transition-colors hover:bg-unti-blue hover:text-white hover:no-underline"
        >
          {content.cta}
        </Link>
      </div>

      <ClientModal client={selectedClient} onClose={() => setSelectedClient(null)} />
    </section>
  );
};
