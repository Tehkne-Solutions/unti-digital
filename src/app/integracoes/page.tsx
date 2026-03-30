import Link from "next/link";
import type { JSX, SVGProps } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionReveal } from "@/components/ui/SectionReveal";

type IconProps = SVGProps<SVGSVGElement>;

type IntegrationBenefit = {
  title: string;
  description: string;
  icon: (props: IconProps) => JSX.Element;
};

type IntegrationCase = {
  name: string;
  label: string;
  description: string;
};

const benefits: IntegrationBenefit[] = [
  {
    title: "Manutencao simplificada",
    description:
      "Quando uma API e atualizada ou aprimorada, as alteracoes podem ser absorvidas com menos atrito em uma arquitetura bem planejada, reduzindo quebra de compatibilidade e retrabalho.",
    icon: IconRefresh
  },
  {
    title: "Seguranca e controle",
    description:
      "As APIs podem operar com autenticacao, autorizacao e trilha de acesso para proteger dados sensiveis e manter governanca sobre cada fluxo critico.",
    icon: IconShield
  },
  {
    title: "Analise de dados",
    description:
      "Integramos fontes de dados valiosas para que sua empresa tome decisoes mais rapidas, informadas e conectadas ao que acontece na operacao em tempo real.",
    icon: IconChart
  },
  {
    title: "Economia de recursos",
    description:
      "Consumir APIs prontas e estruturar bem a integracao pode reduzir custo de desenvolvimento, acelerar o time-to-market e evitar reinventar componentes criticos.",
    icon: IconCoins
  },
  {
    title: "Integracao de aplicativos",
    description:
      "Conectamos sistemas, plataformas e aplicativos heterogeneos para que compartilhem dados com eficiencia, melhorando a interoperabilidade do seu ecossistema digital.",
    icon: IconNodes
  }
];

const cases: IntegrationCase[] = [
  {
    name: "Auto Shopping Tiquatira",
    label: "Dados de mercado",
    description: "Sincronizacao de dados de mercado em tempo real e conexao entre publicacao, catalogo e operacao comercial."
  },
  {
    name: "Toriba",
    label: "Leads e CRM",
    description: "Automacao de fluxos de leads e integracao com CRM de vendas para acelerar atendimento e rastrear oportunidades."
  },
  {
    name: "Grupo Savol",
    label: "Interoperabilidade",
    description: "Interoperabilidade entre sistemas de gestao e ambientes web para manter a operacao conectada sem friccao."
  }
];

export const metadata = {
  title: "Integracoes com APIs | UNTI Digital",
  description:
    "Descubra a forma mais moderna e segura de integrar APIs, CRM, ERP e sistemas internos para automatizar dados e operacoes.",
  keywords: [
    "integracao de api",
    "integracao crm erp",
    "consumo de api",
    "automacao de dados",
    "integracao de sistemas"
  ],
  alternates: {
    canonical: "/integracoes"
  },
  openGraph: {
    title: "Integracoes com APIs | UNTI Digital",
    description:
      "Descubra a forma mais moderna e segura de integrar APIs, CRM, ERP e sistemas internos para automatizar dados e operacoes.",
    type: "website",
    url: "https://unti-digital.vercel.app/integracoes"
  }
};

export default function IntegracoesPage() {
  return (
    <div className="bg-white text-brand-dark">
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/50 to-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(57,108,255,0.18),transparent_34%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.66),rgba(255,255,255,0.88))]" />
        <div className="absolute inset-y-0 right-[-10%] hidden w-[38rem] rounded-full bg-unti-blue/10 blur-3xl lg:block" />

        <Container className="relative z-10 py-20 md:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)]">
            <div className="max-w-3xl">
              <SectionReveal>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-unti-blue">
                  Integracoes com API&apos;s
                </p>
              </SectionReveal>

              <SectionReveal>
                <h1 className="mt-4 text-4xl font-bold leading-[0.95] text-zinc-900 md:text-6xl">
                  Servicos de integracao de API para sites, CRM, ERP e operacao.
                </h1>
              </SectionReveal>

              <SectionReveal>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-600 md:text-xl">
                  Descubra a forma mais facil, moderna e segura de consumir dados em seu site e
                  conectar o coracao da sua empresa. Estruturamos integracoes que automatizam
                  processos e mantem o fluxo das informacoes em tempo real.
                </p>
              </SectionReveal>

              <SectionReveal>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link href="/contato">
                    <Button variant="primary" className="h-12 px-6">
                      Falar com um especialista
                    </Button>
                  </Link>
                  <Link href="/cases">
                    <Button variant="secondary" className="h-12 px-6">
                      Ver mais cases
                    </Button>
                  </Link>
                </div>
              </SectionReveal>
            </div>

            <SectionReveal className="lg:justify-self-end">
              <div className="rounded-[32px] bg-white/88 p-8 shadow-[inset_0_1px_0_rgba(255,255,255,1),0_0_0_1px_rgba(148,163,184,0.14),0_30px_80px_rgba(15,23,42,0.1)] backdrop-blur">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-unti-blue">
                  Dados conectados
                </p>
                <h2 className="mt-4 text-3xl font-bold leading-tight text-zinc-900">
                  Acesse dados de mercado em tempo real com mais controle.
                </h2>
                <p className="mt-4 text-base leading-relaxed text-zinc-600">
                  As APIs podem fornecer acesso a dados de mercado em tempo real, ajudando
                  empresas a alimentar sites, plataformas e operacoes a partir de qualquer
                  integrador.
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {["CRM e vendas", "ERP e financeiro", "Marketing e automacao", "Aplicacoes internas"].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-zinc-700"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </SectionReveal>
          </div>
        </Container>
      </section>

      <Section>
        <Container>
          <SectionReveal className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-unti-blue">
              Beneficios reais
            </p>
            <h2 className="mt-4 text-3xl font-bold text-zinc-900 md:text-4xl">
              O que uma integracao bem feita destrava no seu negocio.
            </h2>
            <p className="mt-4 text-lg text-zinc-600">
              Reorganizamos o conteudo da pagina antiga para refletir a mesma proposta em uma
              estrutura mais clara, premium e orientada a operacao.
            </p>
          </SectionReveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <SectionReveal key={benefit.title} className="h-full">
                  <article className="h-full rounded-[28px] border border-slate-200 bg-white p-7 shadow-[inset_0_1px_0_rgba(255,255,255,1),0_0_0_1px_rgba(148,163,184,0.1),0_18px_44px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[inset_0_1px_0_rgba(255,255,255,1),0_0_0_1px_rgba(148,163,184,0.16),0_24px_54px_rgba(15,23,42,0.1)]">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-unti-blue/10 text-unti-blue">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-6 text-2xl font-semibold text-zinc-900">{benefit.title}</h3>
                    <p className="mt-4 leading-relaxed text-zinc-600">{benefit.description}</p>
                  </article>
                </SectionReveal>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container>
          <SectionReveal>
            <div className="rounded-[32px] border border-slate-200 bg-slate-50/80 p-8 shadow-[inset_0_1px_0_rgba(255,255,255,1),0_0_0_1px_rgba(148,163,184,0.1)] md:p-10">
              <div className="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)]">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-unti-blue">
                    Estrutura tecnica
                  </p>
                  <h2 className="mt-4 text-3xl font-bold text-zinc-900 md:text-4xl">
                    APIs bem consumidas geram mais velocidade, menos atrito e mais previsibilidade.
                  </h2>
                  <p className="mt-4 max-w-3xl text-lg leading-relaxed text-zinc-600">
                    A logica da pagina antiga continua valida: integrar APIs nao e apenas puxar dados,
                    e criar uma base confiavel para automatizar operacoes, reduzir custo tecnico e
                    manter a manutencao sob controle.
                  </p>
                </div>

                <div className="rounded-[28px] bg-white p-6 shadow-[inset_0_1px_0_rgba(255,255,255,1),0_0_0_1px_rgba(148,163,184,0.12),0_16px_36px_rgba(15,23,42,0.06)]">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-unti-blue">
                    Aplicacoes comuns
                  </p>
                  <ul className="mt-5 space-y-3">
                    {[
                      "Consumo de dados de mercado em tempo real",
                      "Sincronizacao entre site, CRM e ERP",
                      "Automacao de cadastro, leads e atendimento",
                      "Integração entre plataformas heterogeneas"
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-zinc-600">
                        <span className="mt-1 h-2.5 w-2.5 rounded-full bg-unti-blue" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </SectionReveal>
        </Container>
      </Section>

      <Section className="bg-slate-50/60">
        <Container>
          <SectionReveal className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-unti-blue">
              Projetos com integracao
            </p>
            <h2 className="mt-4 text-3xl font-bold text-zinc-900 md:text-4xl">
              Alguns projetos que utilizam nossos servicos de integracao via API.
            </h2>
            <p className="mt-4 text-lg text-zinc-600">
              Cases citados na estrutura antiga, agora apresentados como prova de autoridade para
              fluxos de dados, operacao e interoperabilidade.
            </p>
          </SectionReveal>

          <div className="relative mt-12">
            <div className="pointer-events-none absolute left-[12%] right-[12%] top-16 hidden h-px bg-[linear-gradient(90deg,transparent,rgba(57,108,255,0.35),transparent)] lg:block" />
            <div className="grid gap-6 md:grid-cols-3">
              {cases.map((item) => (
                <SectionReveal key={item.name} className="h-full">
                  <article className="relative flex h-full flex-col rounded-[28px] border border-slate-200 bg-white p-8 text-center shadow-[inset_0_1px_0_rgba(255,255,255,1),0_0_0_1px_rgba(148,163,184,0.1),0_18px_44px_rgba(15,23,42,0.06)]">
                    <div className="mx-auto flex h-20 w-full max-w-[220px] items-center justify-center rounded-[24px] border border-slate-200 bg-slate-50 px-6">
                      <span className="text-center text-base font-semibold uppercase tracking-[0.24em] text-zinc-400">
                        {item.name}
                      </span>
                    </div>
                    <p className="mt-6 text-xs font-semibold uppercase tracking-[0.24em] text-unti-blue">
                      {item.label}
                    </p>
                    <p className="mt-4 leading-relaxed text-zinc-600">{item.description}</p>
                  </article>
                </SectionReveal>
              ))}
            </div>
          </div>

          <SectionReveal className="mt-10 flex justify-center">
            <Link href="/cases">
              <Button variant="secondary" className="h-12 px-6">
                Ver mais cases
              </Button>
            </Link>
          </SectionReveal>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(280px,0.9fr)]">
            <SectionReveal>
              <div className="rounded-[32px] bg-unti-blue p-8 text-white shadow-[0_30px_80px_rgba(57,108,255,0.24)] md:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/80">
                  Sob demanda
                </p>
                <h2 className="mt-4 text-3xl font-bold leading-tight text-white md:text-4xl">
                  Precisa de um servico pontual de integracao?
                </h2>
                <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/80">
                  Caso sua empresa ou agencia nao precise de todos os servicos dos planos, ou queira
                  um trabalho especifico sob demanda, entre em contato e solicite sua cotacao.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link href="/contato">
                    <Button variant="primary" className="h-12 px-6">
                      Entre em contato
                    </Button>
                  </Link>
                  <a
                    href="https://wa.me/5519982809717"
                    target="_blank"
                    rel="noreferrer"
                    className="interactive-btn inline-flex h-12 items-center justify-center rounded-xl border border-white/40 px-6 text-sm font-medium text-white no-underline transition-all duration-200 hover:bg-white hover:text-unti-blue hover:no-underline"
                  >
                    Falar no WhatsApp
                  </a>
                </div>
              </div>
            </SectionReveal>

            <SectionReveal>
              <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-[inset_0_1px_0_rgba(255,255,255,1),0_0_0_1px_rgba(148,163,184,0.12),0_20px_44px_rgba(15,23,42,0.08)] md:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-unti-blue">
                  Meios de contato
                </p>
                <div className="mt-6 space-y-5">
                  <a
                    href="tel:+5519982809717"
                    className="block rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-zinc-900 no-underline transition-colors hover:border-unti-blue hover:bg-blue-50/40 hover:no-underline"
                  >
                    <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-unti-blue">
                      Comercial
                    </span>
                    <span className="mt-2 block text-lg font-semibold">(19) 9 8280-9717</span>
                  </a>

                  <a
                    href="mailto:contato@untidigital.com.br"
                    className="block rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-zinc-900 no-underline transition-colors hover:border-unti-blue hover:bg-blue-50/40 hover:no-underline"
                  >
                    <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-unti-blue">
                      Geral
                    </span>
                    <span className="mt-2 block text-lg font-semibold">contato@untidigital.com.br</span>
                  </a>
                </div>

                <div className="mt-6 border-t border-slate-200 pt-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-unti-blue">
                    Social
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium text-zinc-700 no-underline transition-colors hover:border-unti-blue hover:text-unti-blue hover:no-underline"
                    >
                      Facebook
                    </a>
                    <a
                      href="https://www.instagram.com/untidigital/"
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium text-zinc-700 no-underline transition-colors hover:border-unti-blue hover:text-unti-blue hover:no-underline"
                    >
                      Instagram
                    </a>
                  </div>
                </div>
              </div>
            </SectionReveal>
          </div>
        </Container>
      </Section>
    </div>
  );
}

function IconRefresh(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21 12a9 9 0 0 1-15.36 6.36" />
      <path d="M3 12A9 9 0 0 1 18.36 5.64" />
      <path d="M7 17H5v-2" />
      <path d="M17 7h2v2" />
    </svg>
  );
}

function IconShield(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 3 5 6v5c0 4.4 2.9 8.4 7 9.7 4.1-1.3 7-5.3 7-9.7V6l-7-3Z" />
      <path d="m9.5 12 1.8 1.8 3.6-3.6" />
    </svg>
  );
}

function IconChart(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M4 19h16" />
      <path d="M7 16V9" />
      <path d="M12 16V5" />
      <path d="M17 16v-4" />
    </svg>
  );
}

function IconCoins(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <ellipse cx="12" cy="6" rx="6.5" ry="3" />
      <path d="M5.5 6v4c0 1.66 2.9 3 6.5 3s6.5-1.34 6.5-3V6" />
      <path d="M5.5 10v4c0 1.66 2.9 3 6.5 3s6.5-1.34 6.5-3v-4" />
      <path d="M5.5 14v4c0 1.66 2.9 3 6.5 3s6.5-1.34 6.5-3v-4" />
    </svg>
  );
}

function IconNodes(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="3" y="3" width="5" height="5" rx="1.2" />
      <rect x="16" y="3" width="5" height="5" rx="1.2" />
      <rect x="16" y="16" width="5" height="5" rx="1.2" />
      <rect x="3" y="16" width="5" height="5" rx="1.2" />
      <path d="M8 5.5h8" />
      <path d="M18.5 8v8" />
      <path d="M16 18.5H8" />
      <path d="M5.5 16V8" />
    </svg>
  );
}
