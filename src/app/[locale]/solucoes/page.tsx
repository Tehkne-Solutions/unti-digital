import { Container } from "@/components/ui/Container";
import Link from "next/link";
import { SolutionCard } from "@/components/ui/SolutionCard";
import { useTranslations } from "next-intl";

const solutions = [
  {
    titleKey: "institutional.title",
    descriptionKey: "institutional.desc",
    image: "/images/solutions/unti-digital-solution-high-performance-websites.png",
    href: "/solucoes/sites-institucionais",
  },
  {
    titleKey: "platforms.title",
    descriptionKey: "platforms.desc",
    image: "/images/solutions/unti-digital-solution-custom-web-platforms.png",
    href: "/solucoes/plataformas-web",
  },
  {
    titleKey: "integrations.title",
    descriptionKey: "integrations.desc",
    image: "/images/solutions/unti-digital-solution-crm-erp-integrations.png",
    href: "/solucoes/integracoes-crm-erp",
  },
  {
    titleKey: "governance.title",
    descriptionKey: "governance.desc",
    image: "/images/solutions/unti-digital-solution-governance-security.png",
    href: "/solucoes/governanca-seguranca",
  },
  {
    titleKey: "whiteLabel.title",
    descriptionKey: "whiteLabel.desc",
    image: "/images/solutions/unti-digital-solution-white-label-development.png",
    href: "/solucoes/white-label-agencias",
  },
];

function SolutionsPageContent() {
  const t = useTranslations("Solutions");

  return (
    <div className="w-full">
      {/* HERO */}
      <section className="flex min-h-[60vh] items-center bg-gradient-to-br from-slate-50 via-blue-50/50 to-white">
        <Container>
          <div className="max-w-3xl py-20">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-unti-blue">
              {t("header_tag")}
            </p>
            <h1 className="mb-6 text-4xl font-bold leading-tight text-zinc-900 md:text-6xl">
              {t("title")}
            </h1>
            <p className="mb-8 text-lg text-zinc-600 md:text-xl">
              {t("subtitle")}
            </p>
            <Link
              href="/contato"
              className="inline-flex h-12 items-center justify-center rounded-xl bg-unti-blue px-8 text-sm font-bold uppercase tracking-widest text-white shadow-[0_8px_24px_rgba(57,108,255,0.35)] transition-all hover:bg-blue-700"
            >
              {t("cta")}
            </Link>
          </div>
        </Container>
      </section>

      {/* CARDS */}
      <section className="bg-zinc-50 py-20">
        <Container>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution) => (
              <SolutionCard
                key={solution.href}
                title={t(solution.titleKey)}
                description={t(solution.descriptionKey)}
                image={solution.image}
                href={solution.href}
              />
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}

export default function SolucoesPage() {
  return <SolutionsPageContent />;
}
