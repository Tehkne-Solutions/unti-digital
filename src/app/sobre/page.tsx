import Link from "next/link";
import { PageShell } from "@/components/page-shell";

const pillars = [
  {
    title: "Provedora de serviços de tecnologia",
    description: "Saímos do modelo de agência tradicional para atuar como parceiro técnico de longo prazo."
  },
  {
    title: "Execução com governança",
    description: "Escopo fechado, cronogramas claros e comunicação objetiva com quem entrega."
  },
  {
    title: "Foco comercial e operacional",
    description: "Projetos que vendem e se conectam ao fluxo real do negócio."
  }
];

const commitments = [
  "Narrativa e proposta de valor claras",
  "Design e tecnologia alinhados ao negócio",
  "Integração com marketing, vendas e operação",
  "Experiência consistente para decisores e times internos"
];

const values = [
  "Transparência em prazos e investimentos",
  "Metodologia simples e replicável",
  "Colaboração com times internos do cliente",
  "Evolução contínua baseada em dados"
];

export default function SobrePage() {
  return (
    <PageShell
      title="Sobre a UNTI"
      description="História, atuação e visão da nova fase de tecnologia da empresa."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {pillars.map((item) => (
          <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-lg font-semibold text-slate-900">{item.title}</h2>
            <p className="mt-3 text-sm text-slate-600">{item.description}</p>
          </article>
        ))}
      </div>

      <section className="mt-12 rounded-2xl border border-slate-200 bg-white p-8">
        <h2 className="text-2xl font-semibold text-slate-900">O que entregamos</h2>
        <p className="mt-2 max-w-2xl text-slate-600">
          Estruturas digitais que fortalecem posicionamento e aceleram conversão.
        </p>
        <ul className="mt-4 grid gap-2 text-sm text-slate-600 md:grid-cols-2">
          {commitments.map((item) => (
            <li key={item} className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12 rounded-2xl bg-slate-900 px-8 py-10 text-white">
        <h2 className="text-2xl font-semibold">Nossa forma de trabalhar</h2>
        <p className="mt-2 max-w-2xl text-white/80">
          Simplicidade, transparência e proximidade em todas as etapas do projeto.
        </p>
        <ul className="mt-4 grid gap-2 text-sm text-white/90 md:grid-cols-2">
          {values.map((item) => (
            <li key={item} className="rounded-lg border border-white/20 bg-white/10 px-3 py-2">
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <Link
            href="/contato"
            className="rounded-md border border-white/60 px-4 py-2 text-sm font-semibold text-white"
          >
            Falar com a equipe
          </Link>
        </div>
      </section>
    </PageShell>
  );
}