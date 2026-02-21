import { PageShell } from "@/components/page-shell";

export default function ParceirosPage() {
  return (
    <PageShell
      title="Parceiros"
      description="Buscamos parcerias estratégicas com empresas e profissionais que compartilham compromisso com qualidade, execução e relacionamento de longo prazo."
    >
      <section className="rounded-xl border border-slate-200 bg-white p-6 text-sm text-slate-700">
        <h2 className="text-lg font-bold text-slate-900">Modelos de parceria</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>Coentrega de projetos institucionais.</li>
          <li>Parcerias técnicas para integrações específicas.</li>
          <li>Rede de especialistas para iniciativas sob escopo fechado.</li>
        </ul>
      </section>

      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-6 text-sm text-slate-700">
        <h2 className="text-lg font-bold text-slate-900">Critérios de elegibilidade</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>Compromisso com prazo e qualidade técnica.</li>
          <li>Comunicação transparente com foco em solução.</li>
          <li>Capacidade de atuar em modelo de governança compartilhada.</li>
        </ul>
      </section>
    </PageShell>
  );
}
