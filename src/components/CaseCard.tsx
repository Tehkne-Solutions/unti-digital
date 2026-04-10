"use client";

import Image from "next/image";
import Link from "next-intl/link";
import { useLocale } from "next-intl";
import { getCaseCategoryThemes, type CaseStudy } from "@/data/cases";
import type { AppLocale } from "@/lib/i18n";

interface CaseCardProps {
  caseItem: CaseStudy;
  variant?: "portfolio" | "home";
  priority?: boolean;
}

export default function CaseCard({
  caseItem,
  variant = "portfolio",
  priority = false
}: CaseCardProps) {
  const locale = useLocale() as AppLocale;
  const theme = getCaseCategoryThemes(locale)[caseItem.categoria];

  if (variant === "home") {
    return (
      <Link href={`/cases/${caseItem.slug}`} className="group block no-underline hover:no-underline">
        <article className="overflow-hidden rounded-[28px] border border-zinc-100 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.05)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(15,23,42,0.1)]">
          <div className="relative aspect-[16/10] overflow-hidden">
            <Image
              src={caseItem.imagemBanner}
              alt={caseItem.cliente}
              fill
              priority={priority}
              sizes="(max-width: 1023px) 100vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-zinc-950/5 transition-colors duration-500 group-hover:bg-unti-blue/10" />
          </div>

          <div className="space-y-3 px-6 py-6">
            <span className={`inline-flex rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] ${theme.badgeClassName}`}>
              {caseItem.segmento}
            </span>
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold text-zinc-900">{caseItem.cliente}</h3>
              <p className="text-sm text-zinc-600">{caseItem.resumoHome}</p>
            </div>
          </div>
        </article>
      </Link>
    );
  }

  return (
    <Link href={`/cases/${caseItem.slug}`} className="group block no-underline hover:no-underline">
      <article className="overflow-hidden rounded-3xl border border-zinc-100 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.05)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_32px_90px_rgba(15,23,42,0.12)]">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={caseItem.imagemBanner}
            alt={caseItem.cliente}
            fill
            priority={priority}
            sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute inset-0 bg-unti-blue/0 transition-colors duration-500 group-hover:bg-unti-blue/10" />

          <div className="absolute inset-x-0 bottom-0 p-6">
            <div className="translate-y-3 transition-transform duration-500 group-hover:translate-y-0">
              <span className={`inline-flex rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] ${theme.badgeClassName}`}>
                {theme.label}
              </span>
              <h3 className="mt-4 text-2xl font-semibold text-white">{caseItem.cliente}</h3>
              <p className="mt-2 max-w-md text-sm text-white/80 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                {caseItem.tagline}
              </p>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
