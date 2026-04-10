import { PageShell } from "@/components/page-shell";
import { useTranslations } from "next-intl";

function ClientesPageContent() {
  const t = useTranslations("Clients");

  const profiles = t.raw("whoWeServe.profiles");
  const sectors = t.raw("sectors.list");
  const priorities = t.raw("priorities.list");

  return (
    <PageShell
      title={t("title")}
      description={t("description")}
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <section className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-slate-900">{t("whoWeServe.title")}</h2>
          <p className="mt-2 text-sm text-slate-600">
            {t("whoWeServe.description")}
          </p>
          <ul className="mt-4 grid gap-2 text-sm text-slate-600">
            {profiles.map((item: string, index: number) => (
              <li key={index} className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-slate-900">{t("sectors.title")}</h2>
          <p className="mt-2 text-sm text-slate-600">
            {t("sectors.description")}
          </p>
          <ul className="mt-4 grid gap-2 text-sm text-slate-600 md:grid-cols-2">
            {sectors.map((item: string, index: number) => (
              <li key={index} className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
                {item}
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section className="mt-12 rounded-2xl border border-slate-200 bg-white p-8">
        <h2 className="text-2xl font-semibold text-slate-900">{t("priorities.title")}</h2>
        <p className="mt-2 max-w-2xl text-slate-600">
          {t("priorities.description")}
        </p>
        <ul className="mt-4 grid gap-2 text-sm text-slate-600 md:grid-cols-2">
          {priorities.map((item: string, index: number) => (
            <li key={index} className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
              {item}
            </li>
          ))}
        </ul>
      </section>
    </PageShell>
  );
}

export default function ClientesPage() {
  return <ClientesPageContent />;
}
