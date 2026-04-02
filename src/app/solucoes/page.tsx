import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import Link from "next/link";

export const metadata = {
  title: "Soluções Digitais para Empresas e Agências | Unti Digital",
  description: "Portfolio de soluções da Unti Digital com foco em sites institucionais, plataformas web, integrações, segurança e white label técnico.",
  keywords: [
    "soluções digitais b2b",
    "sites institucionais de alta performance",
    "plataformas web sob medida",
    "integrações crm e erp",
    "white label técnico"
  ],
  alternates: {
    canonical: "/solucoes",
  },
  openGraph: {
    title: "Soluções Digitais para Empresas e Agências | Unti Digital",
    description: "Portfolio de soluções da Unti Digital com foco em sites institucionais, plataformas web, integrações, segurança e white label técnico.",
    type: "website",
    url: "https://unti-digital.vercel.app/solucoes",
  },
};

const solutions = [
  {
    title: "Sites Institucionais de Alta Performance",
    description: "Sites institucionais premium com foco em Core Web Vitals, CRO, integração com fluxos internos e autoridade digital.",
    href: "/solucoes/sites-institucionais",
  },
  {
    title: "Plataformas Web Sob Medida",
    description: "Plataformas web sob medida para operações complexas, arquitetura modular e crescimento sem travas.",
    href: "/solucoes/plataformas-web",
  },
  {
    title: "Integrações com CRM e ERP",
    description: "Integrações robustas entre CRM, ERP, marketing e operação com sincronização em tempo real.",
    href: "/solucoes/integracoes-crm-erp",
  },
  {
    title: "Governança e Segurança",
    description: "Arquiteturas Zero-Trust com controle de acessos, monitoramento contínuo e conformidade com LGPD.",
    href: "/solucoes/governanca-seguranca",
  },
  {
    title: "White Label Técnico para Agências",
    description: "White Label técnico com confidencialidade, engenharia sênior e entrega invisível para projetos premium.",
    href: "/solucoes/white-label-agencias",
  },
];

export default function SolucoesPage() {
  return (
    <div className="w-full">
      <section className="min-h-[60vh] bg-gradient-to-br from-slate-50 via-blue-50/50 to-white flex items-center">
        <Container>
          <div className="max-w-3xl py-20 text-center">
            <p className="text-unti-blue font-semibold uppercase tracking-widest text-sm mb-4">
              Soluções Digitais
            </p>
            <h1 className="text-zinc-900 text-4xl md:text-6xl font-bold leading-tight mb-6">
              Tecnologia estruturada para operações que não podem falhar
            </h1>
            <p className="text-zinc-600 text-lg md:text-xl mb-8">
              Construímos soluções digitais para empresas e agências que precisam de conversão, integração, segurança e escala com padrão enterprise.
            </p>
            <Link href="/contato" className="inline-block bg-unti-blue hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
              Falar com especialista
            </Link>
          </div>
        </Container>
      </section>

      <Section>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {solutions.map((solution, index) => (
              <Link key={index} href={solution.href}>
                <div className="h-full rounded-2xl border border-gray-200 p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer bg-white">
                  <h3 className="text-xl font-semibold mb-4">{solution.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{solution.description}</p>
                  <div className="text-unti-blue font-medium text-sm">Explorar solução &rarr;</div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
}
