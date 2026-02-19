import Link from "next/link";
import { LeadModal } from "@/components/lead-modal";

const services = [
  "Desenvolvimento de sites institucionais",
  "Plataformas web sob medida",
  "Integrações e automações",
  "Aplicativos para operações internas"
];

export default function HomePage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14">
      <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">Nova fase da UNTI</p>
        <h1 className="mt-2 max-w-3xl text-4xl font-bold tracking-tight">
          Construímos produtos digitais institucionais para empresas que exigem escala e execução.
        </h1>
        <p className="mt-4 max-w-2xl text-slate-600">
          Primeira fase do projeto em código: base em Next.js, páginas institucionais e fluxo de
          captação com modal antes do WhatsApp.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <LeadModal />
          <Link href="/servicos" className="rounded-md border border-slate-300 px-4 py-2 text-sm font-semibold">
            Ver serviços
          </Link>
        </div>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {services.map((service) => (
          <article key={service} className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="font-semibold text-slate-900">{service}</h2>
            <p className="mt-2 text-sm text-slate-600">Escopo fechado, previsibilidade e foco em resultado.</p>
          </article>
        ))}
      </div>
    </section>
  );
}
