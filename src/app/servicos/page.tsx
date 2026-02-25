import Link from "next/link";
import { LeadModal } from "@/components/lead-modal";
import { PageShell } from "@/components/page-shell";

const services = [
  {
    title: "Site institucional enterprise",
    description: "Para empresas que precisam de presença robusta e narrativa comercial clara.",
    items: [
      "Arquitetura e narrativa comercial",
      "Design UI/UX responsivo",
      "SEO técnico, performance e Core Web Vitals",
      "Analytics/GTM e consentimento LGPD"
    ]
  },
  {
    title: "Plataformas web sob medida",
    description: "Portais e áreas logadas conectadas aos processos internos e dados do negócio.",
    items: [
      "Portais, áreas logadas e dashboards",
      "Integração com APIs e bases existentes",
      "Gestão de acesso e perfis",
      "Infra e deploy sob governança"
    ]
  },
  {
    title: "Integrações e automações",
    description: "Conectamos sistemas críticos para reduzir retrabalho e acelerar a operação.",
    items: [
      "CRM, ERP, BI e marketing",
      "Webhooks, filas e sincronização",
      "Logs e observabilidade",
      "Documentação técnica"
    ]
  },
  {
    title: "Produtos internos e operações",
    description: "Ferramentas digitais para times internos com foco em eficiência e visibilidade.",
    items: [
      "Ferramentas para time comercial e operacional",
      "Fluxos digitais sob medida",
      "Redução de retrabalho",
      "Treinamento e handoff"
    ]
  },
  {
    title: "Evolução e performance",
    description: "Ciclos contínuos de melhoria para manter performance e conversão.",
    items: [
      "Otimizações contínuas",
      "Testes e melhorias de conversão",
      "Suporte a campanhas e lançamentos",
      "Backlog priorizado"
    ]
  }
];

const deliverySteps = [
  {
    title: "Diagnóstico e escopo",
    description: "Mapeamos objetivos, restrições e indicadores antes de definir entregas."
  },
  {
    title: "Design e arquitetura",
    description: "Estruturamos a narrativa, o fluxo e a base técnica do projeto."
  },
  {
    title: "Desenvolvimento e integrações",
    description: "Implementação em sprints curtas com checkpoints e validações."
  },
  {
    title: "Go-live e evolução",
    description: "Publicação assistida, monitoramento e ajustes pós-lançamento."
  }
];

const assurances = [
  "Escopo fechado com prazos claros",
  "Acompanhamento direto com time técnico",
  "LGPD e boas práticas desde o início"
];

export default function ServicosPage() {
  return (
    <PageShell
      title="Serviços"
      description="Pacotes de tecnologia com escopo fechado, prazos claros e foco em conversão e operação."
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
          Trabalhamos com etapas claras, comunicação direta e entregas previsíveis.
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
        <h2 className="text-2xl font-semibold">Precisa de um serviço específico?</h2>
        <p className="mt-2 max-w-2xl text-white/80">
          Conte seu contexto e objetivos. Respondemos com diagnóstico inicial e próximo passo claro.
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