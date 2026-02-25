import Link from "next/link";
import { LeadModal } from "@/components/lead-modal";

const highlights = [
  "Escopo fechado e previsível",
  "Equipe sênior e operação enxuta",
  "Governança e LGPD desde o início"
];

const services = [
  {
    title: "Sites institucionais enterprise",
    description: "Narrativa comercial, UI/UX robusto e base técnica pronta para SEO e performance.",
    gradient: "from-[#396CFF] via-[#7FA2FF] to-[#C3D6FC]",
    icon: "🏢"
  },
  {
    title: "Plataformas web sob medida",
    description: "Portais, áreas logadas e dashboards para operações críticas e times internos.",
    gradient: "from-[#2D3B93] via-[#396CFF] to-[#7FA2FF]",
    icon: "🧭"
  },
  {
    title: "Integrações e automações",
    description: "Conectamos CRM, ERP e marketing para reduzir atrito, erros e retrabalho.",
    gradient: "from-[#FEA01A] via-[#FFC65C] to-[#FFF4D7]",
    icon: "🔗"
  },
  {
    title: "Produtos digitais internos",
    description: "Fluxos personalizados que aumentam eficiência e visibilidade do negócio.",
    gradient: "from-[#3352C6] via-[#396CFF] to-[#C3D6FC]",
    icon: "⚙️"
  }
];

const process = [
  {
    title: "Diagnóstico rápido",
    description: "Entendemos contexto, objetivos e restrições antes de propor escopo."
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
    <section className="bg-gradient-to-b from-[#EFF3FF] via-white to-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2D3B93]">UNTI DIGITAL</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Infraestrutura digital clara, escalável e pronta para vender.
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Sites enterprise, portais web e integrações críticas com governança e previsibilidade. Do diagnóstico à
            operação, entregamos com escopo fechado, segurança e foco em conversão B2B.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <LeadModal />
            <Link
              href="/servicos"
              className="rounded-md bg-[#396CFF] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#2D3B93]"
            >
              Ver serviços
            </Link>
            <Link
              href="/cases"
              className="rounded-md border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-800 hover:border-slate-400"
            >
              Ver cases
            </Link>
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-2 text-sm text-slate-600">
            {highlights.map((text) => (
              <span key={text} className="rounded-full border border-slate-200 bg-white px-3 py-1">
                {text}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article key={service.title} className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div
                className={`relative flex h-40 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br ${service.gradient} text-4xl`}
              >
                <span className="drop-shadow-sm">{service.icon}</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{service.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{service.description}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 pb-16">
        <div className="rounded-2xl border border-slate-200 bg-white p-8">
          <h2 className="text-2xl font-semibold text-slate-900">Como trabalhamos</h2>
          <p className="mt-2 max-w-2xl text-slate-600">Processo simples, com governança e entregas previsíveis.</p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {process.map((step, index) => (
              <article key={step.title} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs font-semibold uppercase text-[#396CFF]">Etapa {index + 1}</p>
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
      </div>
    </section>
  );
}
