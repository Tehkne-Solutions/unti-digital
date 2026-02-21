import { PageShell } from "@/components/page-shell";

const integrationTypes = [
  "Integração de formulários, CRM e canais de atendimento.",
  "Sincronização de dados entre plataformas internas e externas.",
  "Automação de tarefas operacionais com regras de negócio.",
  "Conexões para dashboards e gestão de indicadores."
];

export default function IntegracoesPage() {
  return (
    <PageShell
      title="Integrações"
      description="Conectamos sistemas e fluxos para sua operação funcionar com menos fricção e mais previsibilidade."
    >
      <section className="rounded-xl border border-slate-200 bg-white p-6 text-sm text-slate-700">
        <h2 className="text-lg font-bold text-slate-900">Tipos de integração que desenvolvemos</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          {integrationTypes.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-6 text-sm text-slate-700">
        <h2 className="text-lg font-bold text-slate-900">Fluxo de projeto</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5">
          <li>Mapeamento do cenário atual e dos pontos de falha.</li>
          <li>Definição de arquitetura e critérios de validação.</li>
          <li>Implementação por etapas com checkpoints.</li>
          <li>Homologação funcional e entrega assistida.</li>
        </ol>
      </section>
    </PageShell>
  );
}
