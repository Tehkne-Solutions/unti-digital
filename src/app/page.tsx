import Link from "next/link";
import { LeadModal } from "@/components/lead-modal";

const highlights = [
  {
    title: "Escopo fechado e previsível",
    description: "Planejamento claro, entregas por etapa e visibilidade total do progresso."
  },
  {
    title: "Equipe sênior e operação enxuta",
    description: "Contato direto com quem executa e decide, sem ruído entre estratégia e entrega."
  },
  {
    title: "Governança e LGPD desde o início",
    description: "Coleta mínima de dados, consentimento explícito e segurança aplicada ao fluxo."
  }
];

const services = [
  {
    title: "Sites institucionais enterprise",
    description: "Narrativa comercial, UI/UX robusto e base técnica otimizada para SEO e performance."
  },
  {
    title: "Plataformas web sob medida",
    description: "Portais, áreas logadas e dashboards para operações críticas e times internos."
  },
  {
    title: "Integrações e automações",
    description: "Conectamos CRM, ERP e ferramentas de marketing para reduzir atrito e retrabalho."
  },
  {
    title: "Produtos digitais internos",
    description: "Fluxos personalizados que aumentam eficiência e dão visibilidade ao negócio."
  }
];

const process = [
  {
    title: "Diagnóstico rápido",
    description: "Entendemos o contexto, objetivos e restrições antes de propor escopo."
  },
  {
    title: "Escopo fechado",
    description: "Definimos entregáveis, prazos e investimento com previsibilidade."
  },
  {
    title: "Execução e evolução",
    description: "Sprints curtas, acompanhamento próximo e ajustes baseados em dados."
  }
];

const sectors = ["Automotivo", "Varejo e franquias", "Serviços B2B", "Indústria e operações", "Tecnologia e SaaS"];

const cases = [
  {
    title: "Reestruturação institucional",
    challenge: "Site disperso e sem narrativa comercial para operação B2B.",
    delivery: "Nova arquitetura de informação, UI/UX e integrações com CRM.",
    impact: "Mais clareza de oferta e aumento de contatos qualificados."
  },
  {
    title: "Portal de operações",
    challenge: "Processos manuais e dados fragmentados entre áreas.",
    delivery: "Portal com dashboards e automações integradas.",
    impact: "Redução de retrabalho e ganho de visibilidade operacional."
  },
  {
    title: "Integração de marketing",
    challenge: "Leads perdidos entre campanhas e atendimento.",
    delivery: "Integrações entre landing pages, CRM e WhatsApp.",
    impact: "Tempo de resposta menor e qualificação consistente."
  }
];

export default function HomePage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14">
      <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">Nova fase da UNTI</p>
        <h1 className="mt-2 max-w-3xl text-4xl font-bold tracking-tight text-slate-900">
          Tecnologia institucional para empresas que exigem escala, segurança e execução.
        </h1>
        <p className="mt-4 max-w-2xl text-slate-600">
          Atuamos como provedora de serviços de tecnologia com escopo fechado, entregas previsíveis e foco em
          conversão B2B. Ideal para organizações que precisam de presença digital sólida e integração com a operação.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <LeadModal />
          <Link href="/servicos" className="rounded-md border border-slate-300 px-4 py-2 text-sm font-semibold">
            Ver serviços
          </Link>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {highlights.map((item) => (
            <article key={item.title} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <h2 className="text-sm font-semibold text-slate-900">{item.title}</h2>
              <p className="mt-2 text-sm text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-12">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">Serviços com foco comercial</h2>
            <p className="mt-2 max-w-2xl text-slate-600">
              Estruturas digitais pensadas para vender, provar autoridade e integrar o negócio.
            </p>
          </div>
          <Link href="/servicos" className="text-sm font-semibold text-brand-700">
            Ver todos os serviços
          </Link>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {services.map((service) => (
            <article key={service.title} className="rounded-xl border border-slate-200 bg-white p-5">
              <h3 className="font-semibold text-slate-900">{service.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{service.description}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-8">
        <h2 className="text-2xl font-semibold text-slate-900">Como trabalhamos</h2>
        <p className="mt-2 max-w-2xl text-slate-600">Processo simples, com governança e entregas previsíveis.</p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {process.map((step, index) => (
            <article key={step.title} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-semibold uppercase text-brand-700">Etapa {index + 1}</p>
              <h3 className="mt-2 font-semibold text-slate-900">{step.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{step.description}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-8">
          <h2 className="text-2xl font-semibold text-slate-900">Prova social em construção contínua</h2>
          <p className="mt-2 text-slate-600">
            Atuamos em projetos complexos, muitas vezes sob NDA. O foco é sempre o mesmo: clareza de oferta,
            integração com operação e resultado mensurável.
          </p>

          <h3 className="mt-6 text-sm font-semibold uppercase tracking-wide text-slate-500">Setores com experiência</h3>
          <ul className="mt-3 grid gap-2 text-sm text-slate-600 sm:grid-cols-2">
            {sectors.map((sector) => (
              <li key={sector} className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
                {sector}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <Link href="/cases" className="rounded-md border border-slate-300 px-4 py-2 font-semibold">
              Ver cases
            </Link>
            <Link href="/clientes" className="rounded-md border border-slate-300 px-4 py-2 font-semibold">
              Ver clientes
            </Link>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-8">
          <h2 className="text-2xl font-semibold text-slate-900">Projetos típicos que entregamos</h2>
          <div className="mt-4 grid gap-4">
            {cases.map((item) => (
              <article key={item.title} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">
                  <strong className="font-semibold text-slate-700">Desafio:</strong> {item.challenge}
                </p>
                <p className="mt-2 text-sm text-slate-600">
                  <strong className="font-semibold text-slate-700">Entrega:</strong> {item.delivery}
                </p>
                <p className="mt-2 text-sm text-slate-600">
                  <strong className="font-semibold text-slate-700">Impacto:</strong> {item.impact}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12 rounded-2xl bg-slate-900 px-8 py-10 text-white">
        <h2 className="text-2xl font-semibold">Vamos discutir seu projeto?</h2>
        <p className="mt-2 max-w-2xl text-white/80">
          Compartilhe o contexto, desafios e prazos. Respondemos com um diagnóstico inicial e próximo passo claro.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <LeadModal />
          <Link href="/contato" className="rounded-md border border-white/60 px-4 py-2 text-sm font-semibold text-white">
            Falar com a equipe
          </Link>
        </div>
      </div>
    </section>
  );
}