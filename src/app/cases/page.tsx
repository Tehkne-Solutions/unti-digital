import { PageShell } from "@/components/page-shell";

const cases = [
  {
    title: "Reestruturação de presença institucional",
    challenge: "Site antigo com baixa manutenção e pouca conversão comercial.",
    approach: "Redesenho da arquitetura de conteúdo e padronização de navegação para foco em serviços.",
    status: "Estrutura aplicada com foco em estabilidade e evolução contínua."
  },
  {
    title: "Fluxo de captação com qualificação prévia",
    challenge: "Equipe comercial recebendo contatos sem contexto suficiente.",
    approach: "Implementação de formulário antes do WhatsApp para qualificação mínima de lead.",
    status: "Fluxo pronto para expansão com integração a CRM/Sheets."
  }
];

export default function CasesPage() {
  return (
    <PageShell
      title="Cases e Projetos"
      description="Mostramos como estruturamos solução, execução e resultado esperado em projetos institucionais de tecnologia."
    >
      <div className="grid gap-4">
        {cases.map((item) => (
          <article key={item.title} className="rounded-xl border border-slate-200 bg-white p-6">
            <h2 className="text-lg font-bold text-slate-900">{item.title}</h2>
            <p className="mt-2 text-sm text-slate-700">
              <span className="font-semibold">Desafio:</span> {item.challenge}
            </p>
            <p className="mt-2 text-sm text-slate-700">
              <span className="font-semibold">Estratégia:</span> {item.approach}
            </p>
            <p className="mt-2 text-sm text-slate-700">
              <span className="font-semibold">Status:</span> {item.status}
            </p>
          </article>
        ))}
      </div>
    </PageShell>
  );
}
