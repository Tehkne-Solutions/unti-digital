import { PageShell } from "@/components/page-shell";
import { LeadModal } from "@/components/lead-modal";

const checklist = [
  "Objetivo de negócio do projeto",
  "Prazo estimado ou janela de entrega",
  "Sistemas/ferramentas já utilizados",
  "Principal gargalo técnico ou operacional"
];

export default function ContatoPage() {
  return (
    <PageShell
      title="Contato"
      description="Fale com a Unti para desenhar a melhor estratégia técnica para o seu projeto institucional."
    >
      <section className="rounded-xl border border-slate-200 bg-white p-6 text-sm text-slate-700">
        <h2 className="text-lg font-bold text-slate-900">Antes de iniciar o contato</h2>
        <p className="mt-2">
          Quanto mais contexto você compartilhar, mais preciso será nosso diagnóstico inicial.
        </p>
        <ul className="mt-3 list-disc space-y-1 pl-5">
          {checklist.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-6">
        <h2 className="text-lg font-bold text-slate-900">Abrir conversa pelo WhatsApp</h2>
        <p className="mt-2 text-sm text-slate-700">
          Você preencherá um formulário rápido e, em seguida, será redirecionado para o WhatsApp com
          o contexto inicial já estruturado.
        </p>
        <div className="mt-4">
          <LeadModal />
        </div>
      </section>
    </PageShell>
  );
}
