import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import Link from "next/link";

export const metadata = {
  title: "Solucoes Digitais para Empresas e Agencias | Unti Digital",
  description: "Portfolio de solucoes da Unti Digital com foco em sites institucionais, plataformas web, integracoes, seguranca e white label tecnico.",
  keywords: [
    "solucoes digitais b2b",
    "sites institucionais de alta performance",
    "plataformas web sob medida",
    "integracoes crm e erp",
    "white label tecnico"
  ],
  alternates: {
    canonical: "/solucoes",
  },
  openGraph: {
    title: "Solucoes Digitais para Empresas e Agencias | Unti Digital",
    description: "Portfolio de solucoes da Unti Digital com foco em sites institucionais, plataformas web, integracoes, seguranca e white label tecnico.",
    type: "website",
    url: "https://unti-digital.vercel.app/solucoes",
  },
};

const solutions = [
  {
    title: "Hubs Corporativos de Alta Performance e Conversao",
    description: "Sites institucionais premium com foco em Core Web Vitals, CRO, integracao com fluxos internos e autoridade digital.",
    href: "/solucoes/sites-institucionais",
  },
  {
    title: "Engenharia de Software para Operacoes Complexas",
    description: "Plataformas web sob medida para operacoes complexas, arquitetura modular e crescimento sem travas.",
    href: "/solucoes/plataformas-web",
  },
  {
    title: "Automacao Inteligente de Ecossistemas de Dados",
    description: "Integracoes robustas entre CRM, ERP, marketing e operacao com sincronizacao em tempo real.",
    href: "/solucoes/integracoes-crm-erp",
  },
  {
    title: "Seguranca Nivel Enterprise e Compliance Digital",
    description: "Arquiteturas Zero-Trust com controle de acessos, monitoramento continuo e conformidade com LGPD.",
    href: "/solucoes/governanca-seguranca",
  },
  {
    title: "O Braco Tecnologico de Elite da sua Agencia",
    description: "White Label tecnico com confidencialidade, engenharia senior e entrega invisivel para projetos premium.",
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
              Solucoes Digitais
            </p>
            <h1 className="text-zinc-900 text-4xl md:text-6xl font-bold leading-tight mb-6">
              Tecnologia estruturada para operacoes que nao podem falhar
            </h1>
            <p className="text-zinc-600 text-lg md:text-xl mb-8">
              Construimos solucoes digitais para empresas e agencias que precisam de conversao, integracao, seguranca e escala com padrao enterprise.
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
                  <div className="text-unti-blue font-medium text-sm">Explorar solucao -&gt;</div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
}
