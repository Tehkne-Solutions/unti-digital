"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next-intl/link";
import { useLocale, useTranslations } from "next-intl";
import ClientModal from "@/components/ClientModal";
import { clients, type Client } from "@/data/clients";
import { getHomeContent } from "@/data/home-content";
import type { AppLocale } from "@/lib/i18n";

function getLogoCardClass(client: Client) {
  return client.surface === "dark"
    ? "border-white/10 bg-[#05070d] shadow-[0_18px_40px_rgba(2,6,23,0.14)]"
    : "border-slate-200 bg-white shadow-[0_18px_40px_rgba(15,23,42,0.08)]";
}

export const LogoCarousel = () => {
  const locale = useLocale() as AppLocale;
  const t = useTranslations("LogoCarousel");
  const content = getHomeContent(locale).logoCarousel;
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);
  const visibleClients = clients.filter((client) => client.locales.includes(locale));
  const duplicatedClients = [...visibleClients, ...visibleClients];

  return (
    <section className="overflow-hidden bg-white py-20">
      <div className="container mx-auto mb-10 px-4 text-center">
        <h2 className="mb-4 text-3xl font-bold text-brand-dark md:text-4xl">{t("title")}</h2>
        <p className="text-brand-muted">{t("subtitle")}</p>
      </div>

      <div className="relative flex items-center">
        <div className="absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white to-transparent md:w-40" />
        <div className="absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white to-transparent md:w-40" />

        <div className="flex animate-infinite-scroll items-center gap-8 whitespace-nowrap md:gap-10">
          {duplicatedClients.map((client, index) => (
            <button
              key={`${client.id}-${index}`}
              onClick={() => setSelectedClient(client)}
              className={`relative h-24 w-[190px] flex-shrink-0 cursor-pointer overflow-hidden rounded-2xl border p-5 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-2xl md:h-28 md:w-[240px] ${getLogoCardClass(client)}`}
              aria-label={client.name}
            >
              <Image
                src={client.logo}
                alt={client.name}
                fill
                sizes="(max-width: 768px) 190px, 240px"
                className="p-5 object-contain"
              />
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
