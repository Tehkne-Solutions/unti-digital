import { PageShell } from "@/components/page-shell";

const pillars = [
  {
    title: "Estratégia digital para empresas",
    description: "Conteúdos para decisores que precisam transformar tecnologia em resultado de negócio."
  },
  {
    title: "Entrevistas e mercado",
    description: "Conversas e análises práticas sobre operações, liderança e transformação digital."
  },
  {
    title: "Arquitetura e execução",
    description: "Abordagens técnicas aplicadas em projetos institucionais com escopo fechado."
  },
  {
    title: "Integrações e produtividade",
    description: "Como integrar sistemas e otimizar processos com governança e previsibilidade."
  }
];

export default function BlogPage() {
  return (
    <PageShell
      title="Blog"
      description="Conteúdo editorial da Unti para líderes e equipes que precisam decidir melhor sobre tecnologia, execução e crescimento."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {pillars.map((pillar) => (
          <article key={pillar.title} className="rounded-xl border border-slate-200 bg-white p-6">
            <h2 className="text-lg font-bold text-slate-900">{pillar.title}</h2>
            <p className="mt-2 text-sm text-slate-700">{pillar.description}</p>
          </article>
        ))}
      </div>

      <section className="mt-8 rounded-xl border border-slate-200 bg-white p-6 text-sm text-slate-700">
        <h2 className="text-lg font-bold text-slate-900">Formato editorial</h2>
        <p className="mt-2">
          Priorizamos conteúdo aplicável: menos opinião vazia e mais contexto, decisão e execução.
          Cada artigo termina com próximos passos objetivos para o leitor.
        </p>
      </section>
    </PageShell>
  );
}
