"use client";

import Image from "next/image";
import Link from "next-intl/link";
import { useLocale } from "next-intl";
import { getHomeContent } from "@/data/home-content";
import type { AppLocale } from "@/lib/i18n";

interface Client {
  name: string;
  logo: string;
}

interface ClientModalProps {
  client: Client | null;
  onClose: () => void;
}

export default function ClientModal({ client, onClose }: ClientModalProps) {
  const locale = useLocale() as AppLocale;
  const content = getHomeContent(locale).clientModal;

  if (!client) return null;

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={handleOverlayClick}
    >
      <div className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-xl bg-white shadow-xl">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-50 rounded-full bg-white/95 p-2 text-slate-600 shadow transition-transform hover:scale-110"
          aria-label={content.closeLabel}
        >
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.8}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 6l12 12" />
            <path d="M18 6 6 18" />
          </svg>
        </button>

        <div className="relative h-52 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(57,108,255,0.28),transparent_36%)]" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#04070d] via-[#14337a] to-[#04070d]" />
        </div>

        <div className="absolute left-8 top-36 rounded-xl bg-white p-2 shadow">
          <Image
            src={client.logo}
            alt={client.name}
            width={120}
            height={60}
            className="object-contain"
          />
        </div>

        <div className="grid grid-cols-1 gap-8 p-6 pt-20 md:grid-cols-2 md:p-8 md:pt-20">
          <div>
            <h3 className="mb-2 text-2xl font-bold text-brand-dark">{client.name}</h3>
            <p className="mb-2 font-medium uppercase tracking-[0.18em] text-unti-blue">
              {content.eyebrow}
            </p>
            <p className="text-brand-muted">{content.description}</p>
          </div>

          <div>
            <h4 className="mb-3 font-semibold text-brand-dark">{content.title}</h4>
            <p className="mb-6 text-brand-muted">{content.note}</p>

            <div className="flex gap-3">
              <Link
                href="/cases"
                className="rounded-md bg-unti-blue px-4 py-2 text-white no-underline transition-colors hover:bg-[#2f5edc] hover:no-underline"
              >
                {content.primaryCta}
              </Link>
              <Link
                href="/contato"
                className="rounded-md border border-slate-300 px-4 py-2 text-brand-dark no-underline transition-colors hover:bg-slate-50 hover:no-underline"
              >
                {content.secondaryCta}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
