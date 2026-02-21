import Link from "next/link";
import { PageShell } from "@/components/page-shell";

const services = [
  {
    name: "Sites institucionais",
    problem: "Empresas sem presença digital alinhada ao posicionamento e à operação comercial.",
    delivery: "Arquitetura de páginas, copy estratégica, UX, SEO técnico inicial e fluxo de captação."
  },
  {
    name: "Plataformas web sob medida",
    problem: "Processos de negócio críticos operando com soluções genéricas e pouco controle.",
    delivery: "Aplicação customizada com regras de negócio definidas, autenticação e integrações necessárias."
  },
  {
    name: "Integrações e automações",
    problem: "Dados espalhados e equipes perdendo tempo com tarefas repetitivas.",
    delivery: "Integração entre ferramentas e automações de fluxo para reduzir retrabalho."
  },
  {
    name: "Aplicativos para operações internas",
    problem: "Falta de visibilidade operacional para gestores e times em campo.",
    delivery: "Apps para processos internos com foco em usabilidade, controle e eficiência."
  },
  {
    name: "Totens e experiências digitais",
    problem: "Atendimento e apresentação de soluções sem experiência digital estruturada.",
    delivery: "Interfaces e fluxos para totem interativo, eventos e ativações institucionais."
  }
];

export default function ServicosPage() {
  return (
    <PageShell
      title="Serviços"
      description="Projetos de tecnologia com escopo fechado para empresas que precisam executar com clareza e previsibilidade."
    >
      <div className="grid gap-4">
        {services.map((service) => (
          <article key={service.name} className="rounded-xl border border-slate-200 bg-white p-6">
            <h2 className="text-lg font-bold text-slate-900">{service.name}</h2>
            <p className="mt-2 text-sm text-slate-700">
              <span className="font-semibold">Problema que resolve:</span> {service.problem}
            </p>
            <p className="mt-2 text-sm text-slate-700">
              <span className="font-semibold">Entrega típica:</span> {service.delivery}
            </p>
            <Link href="/contato" className="mt-4 inline-block text-sm font-semibold text-brand-700">
              Solicitar diagnóstico →
            </Link>
          </article>
        ))}
      </div>

      <section className="mt-8 rounded-xl border border-slate-200 bg-white p-6 text-sm text-slate-700">
        <h2 className="text-lg font-bold text-slate-900">Como escolher o serviço ideal</h2>
        <p className="mt-2">
          Comece pelo impacto de negócio que você precisa atingir nos próximos 90 dias. Em seguida,
          definimos a prioridade técnica com menor risco e maior retorno para o contexto da sua equipe.
        </p>
      </section>
    </PageShell>
  );
}
