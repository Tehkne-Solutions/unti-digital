import { PageShell } from "@/components/page-shell";

const principles = [
  "Escopo fechado com clareza de responsabilidade.",
  "Execução técnica orientada por contexto de negócio.",
  "Comunicação objetiva com checkpoints recorrentes.",
  "Qualidade e governança acima de improviso.",
  "Evolução contínua após entrega do MVP."
];

export default function SobrePage() {
  return (
    <PageShell
      title="Sobre a UNTI"
      description="A Unti evoluiu para atuar como provedora de serviços de tecnologia, com foco em projetos institucionais para empresas que exigem previsibilidade e execução séria."
    >
      <div className="space-y-8 text-slate-700">
        <section className="rounded-xl border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-bold text-slate-900">Quem somos</h2>
          <p className="mt-3 text-sm leading-6">
            Somos uma empresa de tecnologia com atuação prática em soluções digitais para marcas e
            operações empresariais. Nossa proposta é simples: transformar objetivos de negócio em
            entregas digitais com método, qualidade e responsabilidade de ponta a ponta.
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-bold text-slate-900">Nossa evolução</h2>
          <p className="mt-3 text-sm leading-6">
            A Unti consolidou sua transição de agência orientada a marketing para uma atuação mais
            ampla em serviços de tecnologia. Hoje, priorizamos projetos institucionais, plataformas,
            integrações e aplicações sob demanda com foco em valor real para o cliente.
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-bold text-slate-900">Como operamos</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm">
            {principles.map((principle) => (
              <li key={principle}>{principle}</li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-bold text-slate-900">Que tipo de projeto assumimos</h2>
          <div className="mt-3 grid gap-6 md:grid-cols-2 text-sm">
            <article>
              <h3 className="font-semibold text-slate-900">Assumimos</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>Projetos institucionais com objetivo e escopo definidos.</li>
                <li>Plataformas e integrações para resolver gargalos operacionais.</li>
                <li>Aplicações internas para gestão, produtividade e controle.</li>
              </ul>
            </article>
            <article>
              <h3 className="font-semibold text-slate-900">Não assumimos</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>Escopos indefinidos sem critérios de aceite.</li>
                <li>Projetos sem governança mínima de comunicação e validação.</li>
                <li>Demandas de crescimento desordenado sem estratégia técnica.</li>
              </ul>
            </article>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
