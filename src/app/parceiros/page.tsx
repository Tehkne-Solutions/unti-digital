import Link from "next/link";
import { PageShell } from "@/components/page-shell";

const partnerTypes = [
  "Agências e consultorias estratégicas",
  "Fornecedores de software e plataformas",
  "Times internos que precisam de execução técnica"
];

const collaboration = [
  "Diagnóstico conjunto e definição de escopo",
  "Entrega por squads dedicados",
  "Go-live assistido e handoff claro"
];

const benefits = [
  "Equipe técnica especializada em projetos institucionais",
  "Integrações com CRM, ERP e ferramentas de marketing",
  "Governança com prazos e entregas previsíveis"
];

export default function ParceirosPage() {
  return (
    <PageShell
      title="Parceiros"
      description="Parcerias estratégicas para ampliar entrega, tecnologia e valor para o cliente final."
    >
      <section className="rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="text-xl font-semibold text-slate-900">Quem buscamos</h2>
        <ul className="mt-4 grid gap-2 text-sm text-slate-600">
          {partnerTypes.map((item) => (
            <li key={item} className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12 rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="text-xl font-semibold text-slate-900">Modelo de colaboração</h2>
        <ul className="mt-4 grid gap-2 text-sm text-slate-600 md:grid-cols-2">
          {collaboration.map((item) => (
            <li key={item} className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12 rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="text-xl font-semibold text-slate-900">Benefícios para parceiros</h2>
        <ul className="mt-4 grid gap-2 text-sm text-slate-600 md:grid-cols-2">
          {benefits.map((item) => (
            <li key={item} className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <Link href="/contato" className="text-sm font-semibold text-brand-700">
            Falar sobre parceria
          </Link>
        </div>
      </section>
    </PageShell>
  );
}