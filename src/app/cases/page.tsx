import type { Metadata } from "next";
import Link from "next/link";
import { cases } from "@/data/cases";
import { CasesPortfolioGrid } from "@/components/cases/CasesPortfolioGrid";

export const metadata: Metadata = {
  title: "Cases | Unti Digital",
  description:
    "Portfolio da Unti Digital com projetos em saude, automotivo, corporativo e industria."
};

export default function CasesPage() {
  return (
    <main className="bg-white">
      <section className="border-b border-zinc-100 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Pagina de Cases
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-900 md:text-5xl">
              Quantidade e variedade para comunicar solidez de operacao.
            </h1>
            <p className="mt-6 max-w-3xl text-base text-zinc-600 md:text-lg">
              Da saude ao automotivo, reunimos um portfolio completo para mostrar repertorio
              tecnico, consistencia de entrega e capacidade de executar jornadas digitais de alto
              impacto.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {[
              `${cases.length} projetos mapeados`,
              "4 frentes de mercado",
              "Sites, plataformas e integracoes",
              "Autoridade visual com base tecnica"
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-zinc-200 bg-zinc-50 px-4 py-2 text-sm text-zinc-600"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50/50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-10 max-w-3xl">
            <h2 className="text-2xl font-semibold text-zinc-900 md:text-3xl">
              Vitrine completa de autoridade
            </h2>
            <p className="mt-3 text-zinc-600">
              Os nove primeiros cards entregam peso de marca logo de entrada. O restante amplia a
              leitura de volume, diversidade e maturidade operacional.
            </p>
          </div>

          <CasesPortfolioGrid cases={cases} />
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-4">
          <div className="rounded-[32px] border border-zinc-100 bg-white px-8 py-10 text-center shadow-[0_18px_60px_rgba(15,23,42,0.05)]">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
              Proximo passo
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-zinc-900">
              Quer estruturar um projeto com esse nivel de acabamento?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-zinc-600">
              Levamos a mesma combinacao de estrategia, design premium e engenharia para o seu
              contexto.
            </p>
            <div className="mt-8 flex justify-center">
              <Link
                href="/contato"
                className="interactive-btn inline-flex h-12 items-center justify-center rounded-xl border border-unti-blue px-6 text-sm font-semibold text-unti-blue no-underline transition-all duration-300 hover:bg-unti-blue hover:text-white hover:no-underline"
              >
                Solicitar Projeto Semelhante
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
