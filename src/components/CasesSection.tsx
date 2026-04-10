"use client";

﻿import Link from "next-intl/link";
import type { AppLocale } from "@/lib/i18n";
import { useLocale, useTranslations } from "next-intl";
import { getCasesHome } from "@/data/cases";
import CaseCard from "./CaseCard";

export default function CasesSection() {
  const locale = useLocale() as AppLocale;
  const t = useTranslations("CasesSection");
  const featuredCases = getCasesHome(locale).slice(0, 3);

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">{t("badge")}</p>
          <h2 className="mt-4 text-3xl font-semibold text-zinc-900 md:text-4xl">{t("title")}</h2>
          <p className="mt-4 text-zinc-600">{t("subtitle")}</p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {featuredCases.map((caseItem, index) => (
            <CaseCard key={caseItem.slug} caseItem={caseItem} priority={index === 0} variant="home" />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/cases"
            className="interactive-btn inline-flex h-12 items-center justify-center rounded-xl border border-unti-blue px-6 text-sm font-semibold text-unti-blue no-underline transition-all duration-300 hover:bg-unti-blue hover:text-white hover:no-underline"
          >
            {t("viewAll")}
          </Link>
        </div>
      </div>
    </section>
  );
}
