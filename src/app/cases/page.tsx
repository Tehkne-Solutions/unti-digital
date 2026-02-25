import Link from "next/link";
import { PageShell } from "@/components/page-shell";

const caseStudies = [
  {
    title: "Grupo automotivo",
    challenge: "Expansão regional sem presença institucional consistente.",
    delivery: "Nova plataforma institucional com páginas de serviços e integração com CRM.",
    impact: "Mais clareza para o time comercial e avanço no funil."
  },
  {
    title: "Varejo multicanal",
    challenge: "Campanhas desconectadas do atendimento e baixa conversão.",
    delivery: "Landing pages integradas ao WhatsApp e automações de qualificação.",
    impact: "Resposta mais rápida e menor perda de leads."
  },
  {
    title: "Serviços B2B complexos",
    challenge: "Oferta difícil de entender e baixa percepção de valor.",
    delivery: "Reestruturação de conteúdo, prova social e UX orientada a decisão.",
    impact: "Melhor entendimento da oferta e avanço de negociações."
  }
];

const outcomes = [
  "Clareza de oferta e posicionamento",
  "Integração com operação e CRM",
  "Melhor conversão em leads qualificados"
];

export default function CasesPage() {
  return (
    <PageShell
      title="Cases e Projetos"
      description="Exemplos típicos de projetos entregues e resultados gerados para clientes B2B."
    >
      <div className="grid gap-6">
        {caseStudies.map((item) => (
          <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-semibold text-slate-900">{item.title}</h2>
            <div className="mt-4 grid gap-2 text-sm text-slate-600">
              <p>
                <strong className="font-semibold text-slate-700">Desafio:</strong> {item.challenge}
              </p>
              <p>
                <strong className="font-semibold text-slate-700">Entrega:</strong> {item.delivery}
              </p>
              <p>
                <strong className="font-semibold text-slate-700">Impacto:</strong> {item.impact}
              </p>
            </div>
          </article>
        ))}
      </div>

      <section className="mt-12 rounded-2xl border border-slate-200 bg-white p-8">
        <h2 className="text-2xl font-semibold text-slate-900">Resultados mais comuns</h2>
        <p className="mt-2 max-w-2xl text-slate-600">
          Muitos projetos reais são apresentados sob NDA. Durante a conversa, detalhamos cenários semelhantes ao seu.
        </p>
        <ul className="mt-4 grid gap-2 text-sm text-slate-600 md:grid-cols-3">
          {outcomes.map((item) => (
            <li key={item} className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12 rounded-2xl bg-slate-900 px-8 py-10 text-white">
        <h2 className="text-2xl font-semibold">Quer ver casos similares ao seu?</h2>
        <p className="mt-2 max-w-2xl text-white/80">
          Compartilhe seu contexto e segmentamos os exemplos mais próximos da sua realidade.
        </p>
        <div className="mt-6">
          <Link
            href="/contato"
            className="rounded-md border border-white/60 px-4 py-2 text-sm font-semibold text-white"
          >
            Solicitar exemplos
          </Link>
        </div>
      </section>
    </PageShell>
  );
}