import Link from "next/link";
import { LeadModal } from "@/components/lead-modal";
import { PageShell } from "@/components/page-shell";

const services = [
  {
    title: "Sites institucionais de alta performance",
    description: "Para empresas que precisam unir autoridade digital, Core Web Vitals e conversao em um unico ativo.",
    items: [
      "Arquitetura de conversao e narrativa comercial",
      "Design responsivo com leitura premium",
      "SEO tecnico, performance e Core Web Vitals",
      "Integracao com fluxos comerciais e operacionais"
    ]
  },
  {
    title: "Plataformas web sob medida",
    description: "Software web para operacoes complexas, produtos SaaS e ecossistemas digitais em expansao.",
    items: [
      "Portais, areas logadas e dashboards",
      "Arquitetura modular para novas frentes",
      "Integracao com APIs e bases legadas",
      "Governanca, deploy e monitoramento"
    ]
  },
  {
    title: "Integracoes com CRM e ERP",
    description: "Conectamos sistemas criticos para automatizar fluxos e sincronizar dados em tempo real.",
    items: [
      "CRM, ERP, BI e marketing",
      "Webhooks, filas e sincronizacao",
      "Logs e observabilidade",
      "Documentacao tecnica"
    ]
  },
  {
    title: "Governanca e seguranca",
    description: "Arquiteturas Zero-Trust para proteger operacoes, dados sensiveis e acessos criticos.",
    items: [
      "Controle de acessos e identidades",
      "Monitoramento e resposta a incidentes",
      "Compliance e adequacao a LGPD",
      "Roadmap continuo de seguranca"
    ]
  },
  {
    title: "White Label tecnico para agencias",
    description: "Capacidade de engenharia sob sua marca para projetos premium com confidencialidade e previsibilidade.",
    items: [
      "NDA e entrega invisivel",
      "Integracao ao fluxo da agencia",
      "Squad sob demanda para projetos complexos",
      "Escala tecnica sem ampliar estrutura fixa"
    ]
  }
];

const deliverySteps = [
  {
    title: "Diagnostico e escopo",
    description: "Mapeamos objetivos, restricoes e indicadores antes de definir a estrategia tecnica."
  },
  {
    title: "Arquitetura e experiencia",
    description: "Estruturamos a narrativa, o fluxo e a base tecnica que sustentarao a operacao."
  },
  {
    title: "Desenvolvimento e integracoes",
    description: "Implementacao em sprints curtas com checkpoints, testes e visibilidade executiva."
  },
  {
    title: "Go-live e evolucao",
    description: "Publicacao assistida, monitoramento e backlog priorizado para crescimento continuo."
  }
];

const assurances = [
  "Escopo claro com prazos previsiveis",
  "Acompanhamento direto com time tecnico",
  "Boas praticas de seguranca e compliance desde o inicio"
];

export default function ServicosPage() {
  return (
    <PageShell
      title="Servicos"
      description="Solucoes digitais com foco em conversao, integracao, seguranca e escala para empresas e agencias."
    >
      <div className="grid gap-6">
        {services.map((service) => (
          <article key={service.title} className="rounded-2xl border border-slate-200 bg-white p-6">
            <div>
              <h2 className="text-xl font-semibold text-slate-900">{service.title}</h2>
              <p className="mt-2 text-sm text-slate-600">{service.description}</p>
            </div>
            <ul className="mt-4 grid gap-2 text-sm text-slate-600 md:grid-cols-2">
              {service.items.map((item) => (
                <li key={item} className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <section className="mt-12 rounded-2xl border border-slate-200 bg-white p-8">
        <h2 className="text-2xl font-semibold text-slate-900">Modelo de entrega</h2>
        <p className="mt-2 max-w-2xl text-slate-600">
          Trabalhamos com etapas claras, comunicacao direta e entregas previsiveis.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {deliverySteps.map((step, index) => (
            <article key={step.title} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-semibold uppercase text-brand-700">Etapa {index + 1}</p>
              <h3 className="mt-2 font-semibold text-slate-900">{step.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{step.description}</p>
            </article>
          ))}
        </div>

        <ul className="mt-6 grid gap-2 text-sm text-slate-600 md:grid-cols-3">
          {assurances.map((item) => (
            <li key={item} className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12 rounded-2xl bg-slate-900 px-8 py-10 text-white">
        <h2 className="text-2xl font-semibold">Precisa de um servico especifico?</h2>
        <p className="mt-2 max-w-2xl text-white/80">
          Conte seu contexto e objetivos. Respondemos com diagnostico inicial e proximo passo claro.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <LeadModal />
          <Link
            href="/contato"
            className="rounded-md border border-white/60 px-4 py-2 text-sm font-semibold text-white"
          >
            Agendar conversa
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
