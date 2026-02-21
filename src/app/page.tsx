import Link from "next/link";
import { LeadModal } from "@/components/lead-modal";

const services = [
  {
    title: "Sites institucionais de alto impacto",
    description:
      "Estrutura completa para posicionamento de marca, captação e suporte ao time comercial."
  },
  {
    title: "Plataformas web sob medida",
    description:
      "Projetos em escopo fechado para operações específicas, com previsibilidade técnica e de prazo."
  },
  {
    title: "Integrações e automações",
    description:
      "Conectamos ferramentas de negócio para reduzir retrabalho e acelerar tomada de decisão."
  },
  {
    title: "Aplicativos para uso interno",
    description:
      "Soluções para equipes e gestores com foco em produtividade e controle operacional."
  },
  {
    title: "Totens e experiências institucionais",
    description:
      "Desenvolvimento de soluções digitais para atendimento, eventos e ambientes corporativos."
  },
  {
    title: "Projetos especiais de tecnologia",
    description:
      "Desenhamos iniciativas sob demanda para cenários que exigem execução consultiva e governança."
  }
];

const processSteps = [
  "Diagnóstico de contexto, metas e restrições do projeto.",
  "Definição de escopo fechado com cronograma e critérios de aceite.",
  "Execução técnica com checkpoints e comunicação objetiva.",
  "Go-live, validação final e plano de evolução orientado a negócio."
];

const faq = [
  {
    q: "A Unti desenvolve projetos muito grandes e complexos?",
    a: "Sim, desde que o escopo esteja claro e com governança definida. Nossa prioridade é previsibilidade de entrega e resultado."
  },
  {
    q: "Vocês trabalham com projetos de escopo aberto?",
    a: "Nosso foco é escopo fechado. Isso protege prazo, qualidade e alinhamento entre time técnico e negócio."
  },
  {
    q: "A Unti atende somente sites?",
    a: "Não. Atuamos com sites, plataformas web, integrações, automações, aplicativos internos e outros projetos institucionais de tecnologia."
  },
  {
    q: "Como funciona o primeiro contato?",
    a: "Você compartilha contexto e objetivo. A partir disso, estruturamos um diagnóstico inicial para recomendar o melhor caminho."
  }
];

export default function HomePage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14">
      <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">UNTI — Provedora de serviços de tecnologia</p>
        <h1 className="mt-2 max-w-4xl text-4xl font-bold tracking-tight text-slate-900">
          Projetos digitais institucionais para empresas que exigem execução, governança e previsibilidade.
        </h1>
        <p className="mt-4 max-w-3xl text-slate-600">
          Estruturamos soluções em tecnologia para marcas que querem crescer com consistência: do site
          institucional às plataformas e integrações que sustentam operação e vendas.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <LeadModal />
          <Link href="/servicos" className="rounded-md border border-slate-300 px-4 py-2 text-sm font-semibold">
            Conhecer serviços
          </Link>
        </div>
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-slate-900">O que entregamos</h2>
        <p className="mt-2 max-w-3xl text-slate-600">
          Soluções de tecnologia com foco em contexto real de negócio, sem promessas genéricas e com
          escopo claro desde o início.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {services.map((service) => (
            <article key={service.title} className="rounded-xl border border-slate-200 bg-white p-5">
              <h3 className="font-semibold text-slate-900">{service.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-12 grid gap-8 md:grid-cols-2">
        <article className="rounded-xl border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-bold text-slate-900">Como trabalhamos</h2>
          <ol className="mt-4 space-y-3 text-sm text-slate-600">
            {processSteps.map((step) => (
              <li key={step} className="rounded-md bg-slate-50 p-3">
                {step}
              </li>
            ))}
          </ol>
        </article>

        <article className="rounded-xl border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-bold text-slate-900">Para quem é</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600">
            <li>Empresas que precisam de parceiro técnico para projetos institucionais.</li>
            <li>Times que querem reduzir retrabalho e alinhar tecnologia com objetivo comercial.</li>
            <li>Operações que exigem processo claro, documentação e acompanhamento executivo.</li>
            <li>Negócios que priorizam resultado consistente em vez de experimentação sem direção.</li>
          </ul>
        </article>
      </section>

      <section className="mt-12 rounded-xl border border-slate-200 bg-white p-6">
        <h2 className="text-xl font-bold text-slate-900">Perguntas frequentes</h2>
        <div className="mt-4 space-y-4">
          {faq.map((item) => (
            <article key={item.q}>
              <h3 className="font-semibold text-slate-900">{item.q}</h3>
              <p className="mt-1 text-sm text-slate-600">{item.a}</p>
            </article>
          ))}
        </div>
      </section>
    </section>
  );
}
