import { PageShell } from "@/components/page-shell";

const profiles = [
  "Empresas com operação digital crítica",
  "Times de marketing e TI que precisam de alinhamento",
  "Negócios B2B com ciclo de venda consultiva",
  "Organizações em reposicionamento de marca"
];

const sectors = ["Automotivo", "Varejo", "Serviços B2B", "Indústria", "Tecnologia e SaaS"];

const priorities = [
  "Governança e previsibilidade",
  "Segurança e LGPD",
  "Integração com CRM e dados",
  "Experiência institucional robusta"
];

export default function ClientesPage() {
  return (
    <PageShell
      title="Clientes"
      description="Perfil de empresas que atendemos e prioridades comuns nas entregas da UNTI."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <section className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-slate-900">Quem atendemos</h2>
          <p className="mt-2 text-sm text-slate-600">
            Trabalhamos com contas que precisam de execução rápida, governança e presença institucional consistente.
          </p>
          <ul className="mt-4 grid gap-2 text-sm text-slate-600">
            {profiles.map((item) => (
              <li key={item} className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-slate-900">Setores com experiência</h2>
          <p className="mt-2 text-sm text-slate-600">
            Atuamos em setores com operações complexas e necessidade de integração entre áreas.
          </p>
          <ul className="mt-4 grid gap-2 text-sm text-slate-600 md:grid-cols-2">
            {sectors.map((item) => (
              <li key={item} className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
                {item}
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section className="mt-12 rounded-2xl border border-slate-200 bg-white p-8">
        <h2 className="text-2xl font-semibold text-slate-900">O que os clientes valorizam</h2>
        <p className="mt-2 max-w-2xl text-slate-600">
          Projetos institucionais exigem clareza de comunicação e integração com a operação.
        </p>
        <ul className="mt-4 grid gap-2 text-sm text-slate-600 md:grid-cols-2">
          {priorities.map((item) => (
            <li key={item} className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
              {item}
            </li>
          ))}
        </ul>
      </section>
    </PageShell>
  );
}