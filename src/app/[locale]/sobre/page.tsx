import Link from "next/link";
import type { Metadata } from "next";
import { getTranslations } from 'next-intl/server';
import { Container } from "@/components/ui/Container";
import { SectionReveal } from "@/components/ui/SectionReveal";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Metadata');

  return {
    title: t('about.title'),
    description: t('about.desc'),
    alternates: { canonical: "/sobre" },
  };
}

export default async function AboutPage() {
  const t = await getTranslations('About');

  const pillars = [
    {
      title: t('pillars.0.t'),
      description: t('pillars.0.d'),
    },
    {
      title: t('pillars.1.t'),
      description: t('pillars.1.d'),
    },
    {
      title: t('pillars.2.t'),
      description: t('pillars.2.d'),
    },
  ];

const methodology = [
  {
    step: "01",
    title: "Descoberta Técnica",
    description:
      "Investigamos a fundo os gargalos do cliente. Analisamos infraestrutura atual, fluxos de dados e objetivos de ROI antes de escrever uma linha de código.",
  },
  {
    step: "02",
    title: "Arquitetura de Software",
    description:
      "Desenhamos a estrutura antes de construir. Usamos Next.js, React e APIs robustas para garantir que a plataforma seja à prova de futuro e escalável.",
  },
  {
    step: "03",
    title: "Desenvolvimento Ágil",
    description:
      "Squads dedicadas operando sob Clean Code e GitFlow. Cada entrega é documentada, testada e validada com o cliente em ciclos curtos.",
  },
  {
    step: "04",
    title: "Otimização de Performance",
    description:
      "Somos obcecados por métricas. Core Web Vitals no verde, LCP abaixo de 2.5s e SEO semântico são requisitos mínimos, não diferenciais.",
  },
  {
    step: "05",
    title: "Segurança e Governança",
    description:
      "Conformidade com LGPD, criptografia em repouso e trânsito, e blindagem de dados implementados como padrão em todos os projetos.",
  },
];

const solutions = [
  {
    title: "Sites Institucionais",
    description:
      "Portais de autoridade com Core Web Vitals 100/100, arquitetura SSG em Next.js e UX focado em conversão. O site deixa de ser cartão de visitas e passa a ser máquina de geração de leads.",
    href: "/solucoes/sites-institucionais",
  },
  {
    title: "Plataformas Web",
    description:
      "Ecossistemas SaaS modulares, dashboards em tempo real e APIs RESTful/GraphQL com escalabilidade horizontal. Automação de processos operacionais complexos com 99.9% de disponibilidade.",
    href: "/solucoes/plataformas-web",
  },
  {
    title: "Integrações com CRM e ERP",
    description:
      "Conectividade via Webhooks e filas (RabbitMQ/Redis) entre Salesforce, SAP, RD Station e ERPs legados. Visão 360° do negócio com dados fluindo sem gargalos entre marketing, vendas e financeiro.",
    href: "/solucoes/integracoes-crm-erp",
  },
  {
    title: "Governança e Segurança",
    description:
      "Protocolos SSL avançados, conformidade total com LGPD e firewalls de aplicação (WAF). Blindagem da reputação digital contra vazamentos que resultariam em multas e perda irreversível de confiança.",
    href: "/solucoes/governanca-seguranca",
  },
  {
    title: "White Label para Agências",
    description:
      "Squads dedicadas com GitFlow, Clean Code e documentação técnica completa via Swagger. Escalabilidade imediata para absorver projetos complexos sem aumentar custo fixo de folha.",
    href: "/solucoes/white-label-agencias",
  },
];

const values = [
  { title: "Transparência", description: "Prazos e investimentos comunicados com clareza desde o primeiro contato." },
  { title: "Metodologia Replicável", description: "Processos documentados que garantem consistência em cada entrega." },
  { title: "Colaboração", description: "Integração com times internos do cliente para alinhamento contínuo." },
  { title: "Evolução Baseada em Dados", description: "Decisões orientadas por métricas reais, não por suposições." },
];

export default function SobrePage() {
  return (
    <div className="bg-white text-zinc-900">

      {/* HERO */}
      <SectionReveal>
        <section className="bg-gradient-to-br from-slate-50 via-blue-50/40 to-white py-24">
          <Container>
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-unti-blue mb-4">
                Sobre a UNTI Digital
              </p>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight text-zinc-900 mb-6">
                Engenharia de Performance: onde a tecnologia se torna estratégia de negócio.
              </h1>
              <p className="text-lg text-zinc-600 leading-relaxed max-w-2xl">
                A UNTI não nasceu em um vácuo criativo, mas de uma lacuna técnica. Percebemos que o mercado estava saturado de agências que entregavam interfaces bonitas, mas vazias de infraestrutura. Nossa missão foi reverter essa lógica: aplicar Engenharia de Software de Rigor onde outros aplicavam apenas estética.
              </p>
            </div>
          </Container>
        </section>
      </SectionReveal>

      {/* PILARES */}
      <SectionReveal>
        <section className="py-20 bg-white">
          <Container>
            <div className="grid gap-6 md:grid-cols-3">
              {pillars.map((item) => (
                <article key={item.title} className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
                  <h2 className="text-lg font-bold text-zinc-900 mb-3">{item.title}</h2>
                  <p className="text-sm text-zinc-600 leading-relaxed">{item.description}</p>
                </article>
              ))}
            </div>
          </Container>
        </section>
      </SectionReveal>

      {/* MANIFESTO */}
      <SectionReveal>
        <section className="py-20 bg-zinc-50 border-y border-zinc-100">
          <Container>
            <div className="max-w-4xl mx-auto">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-unti-blue mb-4">
                A Nossa Gênese
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-8">
                O fim do &quot;apenas um site&quot;<span className="text-unti-blue">.</span>
              </h2>
              <div className="space-y-6 text-zinc-600 leading-relaxed text-lg">
                <p>
                  Para nós, um site institucional não é um cartão de visitas digital. É um ativo de alta performance que precisa carregar em milissegundos, escalar para milhares de acessos simultâneos e converter visitantes em leads com precisão matemática. Cada decisão de arquitetura é tomada com esse objetivo em mente.
                </p>
                <p>
                  Nascemos sob o pilar da transparência e da performance, integrando metodologias ágeis com um compromisso inabalável com a escalabilidade. Não aceitamos briefings superficiais: analisamos a infraestrutura atual, os fluxos de dados e os objetivos de ROI antes de propor qualquer solução.
                </p>
                <p>
                  Em um mercado saturado de soluções genéricas, aplicamos engenharia de software rigorosa para transformar problemas complexos em plataformas de alto desempenho. O resultado é tecnologia que não apenas funciona, mas que gera retorno mensurável para o negócio do cliente.
                </p>
              </div>
            </div>
          </Container>
        </section>
      </SectionReveal>

      {/* METODOLOGIA */}
      <SectionReveal>
        <section className="py-24 bg-white">
          <Container>
            <div className="max-w-4xl mx-auto text-center mb-16">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-unti-blue mb-4">
                Nossa Metodologia
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6">
                Nossa Forma de Trabalhar<span className="text-unti-blue">.</span>
              </h2>
              <p className="text-zinc-600 text-lg leading-relaxed">
                Unimos a agilidade das startups com o rigor da engenharia de software enterprise. Nenhum projeto começa sem uma arquitetura sólida e nenhum termina sem performance absoluta.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {methodology.slice(0, 3).map((item) => (
                <article key={item.step} className="p-8 rounded-[28px] bg-zinc-50 border border-zinc-100 hover:border-unti-blue transition-all">
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-unti-blue mb-4">{item.step}</p>
                  <h3 className="text-xl font-bold text-zinc-900 mb-3">{item.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{item.description}</p>
                </article>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 max-w-2xl mx-auto md:max-w-none md:grid-cols-2 lg:w-2/3 lg:mx-auto">
              {methodology.slice(3).map((item) => (
                <article key={item.step} className="p-8 rounded-[28px] bg-zinc-50 border border-zinc-100 hover:border-unti-blue transition-all">
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-unti-blue mb-4">{item.step}</p>
                  <h3 className="text-xl font-bold text-zinc-900 mb-3">{item.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{item.description}</p>
                </article>
              ))}
            </div>
          </Container>
        </section>
      </SectionReveal>

      {/* SOLUÇÕES */}
      <SectionReveal>
        <section className="py-20 bg-zinc-50 border-y border-zinc-100">
          <Container>
            <div className="text-center mb-14">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-unti-blue mb-4">
                Módulos de Crescimento
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900">
                Ecossistema de Soluções<span className="text-unti-blue">.</span>
              </h2>
              <p className="mt-4 text-zinc-600 max-w-2xl mx-auto">
                Cinco verticais fundamentais que cobrem toda a jornada digital de empresas e agências que não podem se dar ao luxo de falhar.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {solutions.map((item) => (
                <Link key={item.title} href={item.href} className="group block rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
                  <h3 className="text-xl font-bold text-zinc-900 mb-3 group-hover:text-unti-blue transition-colors">{item.title}</h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">{item.description}</p>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-unti-blue">Ver solução →</p>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      </SectionReveal>

      {/* VALORES */}
      <SectionReveal>
        <section className="py-20 bg-white">
          <Container>
            <div className="max-w-xl mb-12">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-unti-blue mb-4">
                Valores Técnicos
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900">
                O que nos guia em cada entrega<span className="text-unti-blue">.</span>
              </h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((item) => (
                <article key={item.title} className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-zinc-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">{item.description}</p>
                </article>
              ))}
            </div>
          </Container>
        </section>
      </SectionReveal>

      {/* CTA */}
      <SectionReveal>
        <section className="py-24 bg-unti-blue">
          <Container>
            <div className="flex flex-col items-center text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 max-w-2xl">
                Pronto para construir um ativo digital de verdade?
              </h2>
              <p className="text-white/80 text-lg mb-10 max-w-xl">
                Fale com um especialista e descubra como a UNTI pode estruturar sua operação digital com previsibilidade e performance.
              </p>
              <Link
                href="/contato"
                className="inline-flex h-14 items-center justify-center rounded-2xl bg-white px-8 text-sm font-bold uppercase tracking-widest text-unti-blue shadow-lg hover:bg-blue-50 transition-colors"
              >
                Falar com especialista
              </Link>
            </div>
          </Container>
        </section>
      </SectionReveal>
    </div>
  );
}
