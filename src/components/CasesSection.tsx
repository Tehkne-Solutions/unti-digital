import Link from "next/link";
import { casesHome } from "@/data/cases";
import CaseCard from "./CaseCard";
import { useTranslations } from "next-intl";

export default function CasesSection() {
  const t = useTranslations("CasesSection");

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">
            {t("badge")}
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-zinc-900 md:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-zinc-600">
            {t("subtitle")}
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {casesHome.slice(0, 3).map((caseItem, index) => (
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
