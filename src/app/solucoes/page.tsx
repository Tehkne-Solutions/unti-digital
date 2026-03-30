import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import Link from "next/link";

const solutions = [
  {
    title: "Sites Institucionais de Alta Performance",
    description: "Plataformas corporativas focadas em conversão, performance e integração com sistemas internos.",
    href: "/solucoes/sites-institucionais",
  },
  {
    title: "Plataformas Web Sob Medida",
    description: "Arquitetura personalizada para operações complexas com integrações avançadas em alta escala.",
    href: "/solucoes/plataformas-web",
  },
  {
    title: "Integrações com CRM e ERP",
    description: "Conecte marketing, vendas e operação através de integrações robustas que automatizam processos.",
    href: "/solucoes/integracoes-crm-erp",
  },
  {
    title: "Governança e Segurança",
    description: "Arquitetura segura com controle de acessos, monitoramento contínuo e compliance garantido.",
    href: "/solucoes/governanca-seguranca",
  },
  {
    title: "White Label Técnico para Agências",
    description: "Desenvolvimento sob demanda com sua marca, entrega confidencial e arquitetura robusta.",
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
              Soluções digitais para empresas que precisam escalar
            </h1>
            <p className="text-zinc-600 text-lg md:text-xl mb-8">
              Desenvolvimento, integrações e governança para negócios que não podem falhar.
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
                  <div className="text-unti-blue font-medium text-sm">Explorar solução →</div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
}
