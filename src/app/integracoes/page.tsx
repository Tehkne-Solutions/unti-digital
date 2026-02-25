import Link from "next/link";
import { PageShell } from "@/components/page-shell";

const categories = [
  {
    title: "CRM e vendas",
    description: "Integrações com ferramentas de CRM para qualificação e acompanhamento de leads."
  },
  {
    title: "ERP e financeiro",
    description: "Conexão com sistemas internos para consistência de dados e fluxo operacional."
  },
  {
    title: "BI e analytics",
    description: "Painéis e rastreamento de métricas para decisão orientada por dados."
  },
  {
    title: "Marketing e automação",
    description: "Conectamos campanhas, formulários e workflows com o atendimento."
  },
  {
    title: "Atendimento e suporte",
    description: "WhatsApp, chat e ferramentas de suporte integradas ao funil comercial."
  }
];

const approach = [
  "Mapeamento de dados e objetivos",
  "Integração por APIs ou arquivos",
  "Validação, monitoramento e documentação"
];

export default function IntegracoesPage() {
  return (
    <PageShell
      title="Integrações"
      description="Integrações técnicas para conectar marketing, vendas e operação sem atrito."
    >
      <section className="grid gap-6 md:grid-cols-2">
        {categories.map((item) => (
          <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-lg font-semibold text-slate-900">{item.title}</h2>
            <p className="mt-2 text-sm text-slate-600">{item.description}</p>
          </article>
        ))}
      </section>

      <section className="mt-12 rounded-2xl border border-slate-200 bg-white p-8">
        <h2 className="text-2xl font-semibold text-slate-900">Nossa abordagem</h2>
        <p className="mt-2 max-w-2xl text-slate-600">
          Integrações feitas para sustentar operação, governança e crescimento.
        </p>
        <ul className="mt-4 grid gap-2 text-sm text-slate-600 md:grid-cols-3">
          {approach.map((item) => (
            <li key={item} className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <Link href="/contato" className="text-sm font-semibold text-brand-700">
            Solicitar integração
          </Link>
        </div>
      </section>
    </PageShell>
  );
}