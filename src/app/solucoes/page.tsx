import { Container } from "@/components/ui/Container";
import Link from "next/link";
import { SolutionCard } from "@/components/ui/SolutionCard";

export const metadata = {
  title: "Soluções Digitais para Empresas e Agências | Unti Digital",
  description: "Portfolio de soluções da Unti Digital com foco em sites institucionais, plataformas web, integrações, segurança e white label técnico.",
  keywords: [
    "soluções digitais b2b",
    "sites institucionais de alta performance",
    "plataformas web sob medida",
    "integrações crm e erp",
    "white label técnico",
  ],
  alternates: { canonical: "/solucoes" },
  openGraph: {
    title: "Soluções Digitais para Empresas e Agências | Unti Digital",
    description: "Portfolio de soluções da Unti Digital com foco em sites institucionais, plataformas web, integrações, segurança e white label técnico.",
    type: "website",
    url: "https://unti-digital.vercel.app/solucoes",
  },
};

const solutions = [
  {
    title: "Sites Institucionais",
    description: "Portais de alta autoridade com Core Web Vitals 100/100, arquitetura SSG e UX focado em conversão corporativa.",
    image: "/images/solutions/unti-digital-solution-high-performance-websites.png",
    href: "/solucoes/sites-institucionais",
  },
  {
    title: "Plataformas Web",
    description: "Ecossistemas SaaS modulares, dashboards em tempo real e APIs RESTful com escalabilidade horizontal.",
    image: "/images/solutions/unti-digital-solution-custom-web-platforms.png",
    href: "/solucoes/plataformas-web",
  },
  {
    title: "Integrações com CRM e ERP",
    description: "Conectividade via Webhooks e filas entre Salesforce, SAP, RD Station e ERPs legados sem perda de dados.",
    image: "/images/solutions/unti-digital-solution-crm-erp-integrations.png",
    href: "/solucoes/integracoes-crm-erp",
  },
  {
    title: "Governança e Segurança",
    description: "Arquitetura Zero-Trust, conformidade com LGPD, criptografia em repouso e firewalls de aplicação (WAF).",
    image: "/images/solutions/unti-digital-solution-governance-security.png",
    href: "/solucoes/governanca-seguranca",
  },
  {
    title: "White Label para Agências",
    description: "Squads dedicadas com GitFlow, Clean Code e entrega invisível sob sua marca com confidencialidade total.",
    image: "/images/solutions/unti-digital-solution-white-label-development.png",
    href: "/solucoes/white-label-agencias",
  },
];

export default function SolucoesPage() {
  return (
    <div className="w-full">
      {/* HERO */}
      <section className="flex min-h-[60vh] items-center bg-gradient-to-br from-slate-50 via-blue-50/50 to-white">
        <Container>
          <div className="max-w-3xl py-20">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-unti-blue">
              Soluções Digitais
            </p>
            <h1 className="mb-6 text-4xl font-bold leading-tight text-zinc-900 md:text-6xl">
              Tecnologia estruturada para operações que não podem falhar
            </h1>
            <p className="mb-8 text-lg text-zinc-600 md:text-xl">
              Construímos soluções digitais para empresas e agências que precisam de conversão, integração, segurança e escala com padrão enterprise.
            </p>
            <Link
              href="/contato"
              className="inline-flex h-12 items-center justify-center rounded-xl bg-unti-blue px-8 text-sm font-bold uppercase tracking-widest text-white shadow-[0_8px_24px_rgba(57,108,255,0.35)] transition-all hover:bg-blue-700"
            >
              Falar com especialista
            </Link>
          </div>
        </Container>
      </section>

      {/* CARDS */}
      <section className="bg-zinc-50 py-20">
        <Container>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution) => (
              <SolutionCard key={solution.href} {...solution} />
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
