import { useTranslations } from "next-intl";

export function About() {
  const t = useTranslations("About");

  return (
    <section className="section grid items-center gap-10 md:grid-cols-2">
      <div className="space-y-4">
        <h2 className="text-3xl font-semibold text-unti-dark">{t("title")}</h2>
        <p className="text-unti-dark">
          {t("subtitle")}
        </p>
        <button className="inline-flex items-center rounded-md border border-unti-primary bg-white px-4 py-2 text-sm font-semibold text-unti-primary transition-colors hover:bg-unti-light">
          {t("learnMore")}
        </button>
      </div>
      <div className="h-[400px] w-full rounded-2xl bg-unti-pastel" />
    </section>
  );
}
