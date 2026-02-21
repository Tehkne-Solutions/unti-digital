import { PageShell } from "@/components/page-shell";

const sectors = ["Automotivo", "Varejo", "Indústria", "Serviços corporativos", "Tecnologia"];

export default function ClientesPage() {
  return (
    <PageShell
      title="Clientes"
      description="Construímos relações de longo prazo com empresas que valorizam execução consistente, comunicação clara e qualidade técnica."
    >
      <section className="rounded-xl border border-slate-200 bg-white p-6">
        <h2 className="text-lg font-bold text-slate-900">Segmentos em que atuamos</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {sectors.map((sector) => (
            <span key={sector} className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700">
              {sector}
            </span>
          ))}
        </div>
      </section>

      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-6 text-sm text-slate-700">
        <h2 className="text-lg font-bold text-slate-900">O que os clientes valorizam no nosso modelo</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>Escopo fechado com critérios de entrega objetivos.</li>
          <li>Alinhamento entre objetivo comercial e solução técnica.</li>
          <li>Transparência de execução com checkpoints recorrentes.</li>
          <li>Compromisso com estabilidade e evolução pós-entrega.</li>
        </ul>
      </section>
    </PageShell>
  );
}
