import Link from "next/link";
import { PageShell } from "@/components/page-shell";

const pillars = [
  "Estratégia digital institucional",
  "Experiência e conversão B2B",
  "Tecnologia aplicada a marketing e operações",
  "LGPD, segurança e governança"
];

const series = [
  {
    title: "Entrevistas com líderes",
    description: "Conversas com decisores sobre desafios reais de operação e tecnologia."
  },
  {
    title: "Arquitetura de presença digital",
    description: "Como estruturar sites institucionais que vendem e sustentam autoridade."
  },
  {
    title: "Integrações que destravam crescimento",
    description: "Casos e práticas de integração entre marketing, vendas e operação."
  }
];

const formats = ["Entrevistas", "Guias práticos", "Análises de cases", "Opinião técnica"];

export default function BlogPage() {
  return (
    <PageShell
      title="Blog"
      description="Linha editorial voltada a autoridade técnica, entrevistas e práticas aplicáveis a negócios B2B."
    >
      <section className="rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="text-xl font-semibold text-slate-900">Pilares editoriais</h2>
        <p className="mt-2 text-sm text-slate-600">
          Conteúdo pensado para decisores que precisam de clareza, previsibilidade e visão estratégica.
        </p>
        <ul className="mt-4 grid gap-2 text-sm text-slate-600 md:grid-cols-2">
          {pillars.map((item) => (
            <li key={item} className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12 grid gap-6 lg:grid-cols-2">
        {series.map((item) => (
          <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-semibold text-slate-900">{item.title}</h2>
            <p className="mt-2 text-sm text-slate-600">{item.description}</p>
          </article>
        ))}
      </section>

      <section className="mt-12 rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="text-xl font-semibold text-slate-900">Formatos em produção</h2>
        <ul className="mt-4 grid gap-2 text-sm text-slate-600 md:grid-cols-2">
          {formats.map((item) => (
            <li key={item} className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <Link href="/contato" className="text-sm font-semibold text-brand-700">
            Sugerir pauta
          </Link>
        </div>
      </section>
    </PageShell>
  );
}