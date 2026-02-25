import { PageShell } from "@/components/page-shell";
import { LeadModal } from "@/components/lead-modal";

const steps = [
  {
    title: "Compartilhe seu contexto",
    description: "Conte objetivo, prazo e desafios principais."
  },
  {
    title: "Diagnóstico inicial",
    description: "Analisamos o cenário e sugerimos o melhor caminho."
  },
  {
    title: "Próximo passo claro",
    description: "Se fizer sentido, seguimos para escopo e proposta."
  }
];

const checklist = [
  "Objetivo do projeto",
  "Prazo desejado",
  "Stakeholders envolvidos",
  "Referências e inspirações"
];

export default function ContatoPage() {
  return (
    <PageShell title="Contato" description="Entre em contato com a UNTI para discutir seu projeto.">
      <div className="grid gap-6 lg:grid-cols-3">
        <section className="rounded-2xl border border-slate-200 bg-white p-6 lg:col-span-2">
          <h2 className="text-xl font-semibold text-slate-900">Como funciona o primeiro contato</h2>
          <div className="mt-4 grid gap-4">
            {steps.map((step, index) => (
              <article key={step.title} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs font-semibold uppercase text-brand-700">Etapa {index + 1}</p>
                <h3 className="mt-2 font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{step.description}</p>
              </article>
            ))}
          </div>

          <h3 className="mt-6 text-sm font-semibold uppercase tracking-wide text-slate-500">O que ajuda na conversa</h3>
          <ul className="mt-3 grid gap-2 text-sm text-slate-600 md:grid-cols-2">
            {checklist.map((item) => (
              <li key={item} className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-slate-900">Pronto para avançar?</h2>
          <p className="mt-2 text-sm text-slate-600">
            Envie seus dados e seguimos no WhatsApp com a equipe.
          </p>
          <div className="mt-4">
            <LeadModal />
          </div>
          <p className="mt-4 text-xs text-slate-500">
            Ao enviar, você concorda com o uso dos dados para contato comercial conforme a LGPD.
          </p>
        </section>
      </div>
    </PageShell>
  );
}