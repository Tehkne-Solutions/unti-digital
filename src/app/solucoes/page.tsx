"use client";

import Image from "next/image";
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
      {/* Hero com Imagem */}
      <section className="relative h-[420px] flex items-center justify-center text-center overflow-hidden">
        <Image
          src="/images/solutions/unti-digital-solutions-hub-platforms-integrations-automation.png"
          alt="Soluções digitais da Unti"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-white max-w-3xl px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Soluções digitais para empresas que precisam escalar
          </h1>

          <p className="text-lg opacity-90 mb-8">
            Desenvolvimento, integrações e governança para negócios que não podem falhar.
          </p>

          <Link
            href="/contato"
            className="inline-block bg-unti-blue hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
          >
            Falar com especialista
          </Link>
        </div>
      </section>

      {/* Solutions Grid */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {solutions.map((solution, index) => (
              <Link key={index} href={solution.href}>
                <div className="h-full rounded-2xl border border-gray-200 p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer bg-white">
                  <h3 className="text-xl font-semibold mb-4">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {solution.description}
                  </p>
                  <div className="text-unti-blue font-medium text-sm">
                    Explorar solução →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* Differential Block */}
      <Section>
        <Container>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Abordagem diferenciada
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="space-y-3">
                <div className="text-2xl font-bold text-unti-blue">01</div>
                <h3 className="text-xl font-semibold">
                  Metodologia estruturada
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Processos claros e documentados que garantem clareza, prazos e resultados previsíveis.
                </p>
              </div>
              <div className="space-y-3">
                <div className="text-2xl font-bold text-unti-blue">02</div>
                <h3 className="text-xl font-semibold">
                  Arquitetura escalável
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Preparamos suas plataformas para crescer junto com o seu negócio, sem reengenharia.
                </p>
              </div>
              <div className="space-y-3">
                <div className="text-2xl font-bold text-unti-blue">03</div>
                <h3 className="text-xl font-semibold">
                  Times especializados
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Enxutos, com comunicação direta e expertise comprovada em cada área de atuação.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Segmentation */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Empresas */}
            <div className="rounded-2xl bg-blue-50 p-12 space-y-6">
              <h3 className="text-2xl font-bold">Para Empresas</h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <div>
                  <strong className="text-unti-heading">Performance:</strong> Plataformas otimizadas para conversão e SEO.
                </div>
                <div>
                  <strong className="text-unti-heading">Governça:</strong> Arquitetura profissional e segura.
                </div>
                <div>
                  <strong className="text-unti-heading">Integração:</strong> Conecte CRM, ERP e ferramentas de marketing.
                </div>
                <div>
                  <strong className="text-unti-heading">Escalabilidade:</strong> Estrutura que cresce com seu negócio.
                </div>
              </div>
            </div>

            {/* Agências */}
            <div className="rounded-2xl bg-unti-blue p-12 space-y-6">
              <h3 className="text-2xl font-bold text-white">Para Agências</h3>
              <div className="space-y-4 text-white/80 leading-relaxed">
                <div>
                  <strong className="text-white">White Label:</strong> Desenvolvimento sob sua marca.
                </div>
                <div>
                  <strong className="text-white">Execução Técnica:</strong> Time capacitado entrega seus projetos.
                </div>
                <div>
                  <strong className="text-white">Arquitetura Robusta:</strong> Padrão profissional garantido.
                </div>
                <div>
                  <strong className="text-white">Suporte Contínuo:</strong> Parceria de longo prazo.
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Final CTA */}
      <Section>
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="bg-unti-blue rounded-2xl px-8 md:px-16 py-20 text-center space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Pronto para potencializar sua presença digital?
              </h2>
              <a
                href="/contato"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-unti-blue font-medium rounded-lg hover:bg-gray-50 transition-colors"
              >
                Falar com especialista
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
